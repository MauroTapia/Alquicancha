package com.backend.alquicancha.service.impl;

import com.backend.alquicancha.dto.DomicilioDto;
import com.backend.alquicancha.dto.UsuarioDto;
import com.backend.alquicancha.entity.Domicilio;
import com.backend.alquicancha.entity.Usuario;
import com.backend.alquicancha.exceptions.BadRequestException;
import com.backend.alquicancha.exceptions.ResourceNotFoundException;
import com.backend.alquicancha.repository.IUsuarioRepository;
import com.backend.alquicancha.service.IUsuarioService;
import com.backend.alquicancha.utils.JsonPrinter;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService implements IUsuarioService {
    private static final Logger LOGGER = LoggerFactory.getLogger(UsuarioService.class);
    private final IUsuarioRepository usuarioRepository;
    private final ObjectMapper objectMapper;

    @Autowired
    public UsuarioService(IUsuarioRepository usuarioRepository, ObjectMapper objectMapper) {
        this.usuarioRepository = usuarioRepository;
        this.objectMapper = objectMapper;
    }

    @Override
    public UsuarioDto guardarUsuario(Usuario usuario) throws BadRequestException {
        Usuario usuarioNuevo = usuarioRepository.save(usuario);
        DomicilioDto domicilioDto = objectMapper.convertValue(usuarioNuevo.getDomicilio(), DomicilioDto.class);
        UsuarioDto usuarioDtoNuevo = objectMapper.convertValue(usuarioNuevo, UsuarioDto.class);
        usuarioDtoNuevo.setDomicilioDto(domicilioDto);

        if (usuarioNuevo == null) {
            LOGGER.error("Error al registrar el usuario");
            throw new BadRequestException("Error al registrar el usuario");
        }
        LOGGER.info("Nuevo usuario registrado con exito: {}", JsonPrinter.toString(usuarioDtoNuevo));

        return usuarioDtoNuevo;
    }

    @Override
    public UsuarioDto buscarUsuarioPorId(Long id)  {
        Usuario usuarioBuscado = usuarioRepository.findById(id).orElse(null);
        UsuarioDto usuarioDto = null;
        if (usuarioBuscado != null) {
            DomicilioDto domicilioDto = objectMapper.convertValue(usuarioBuscado.getDomicilio(), DomicilioDto.class);
            usuarioDto = objectMapper.convertValue(usuarioBuscado, UsuarioDto.class);
            usuarioDto.setDomicilioDto(domicilioDto);
            LOGGER.info("Usuario encontrado: {}", JsonPrinter.toString(usuarioDto));
        } else {
            LOGGER.info("El id no se encuentra registrado en la base de datos");

        }

        return usuarioDto;
    }

    @Override
    public UsuarioDto actualizarUsuario(Usuario usuario) throws ResourceNotFoundException {
        Usuario usuarioAActualizar = usuarioRepository.findById(usuario.getId()).orElse(null);
        UsuarioDto usuarioActualizadoDto = null;

        if (usuarioAActualizar != null) {
            //if(usuarioAActualizar.getDomicilio().getId() == usuario.getDomicilio().getId()){
            usuarioAActualizar = usuario;
            usuarioRepository.save(usuarioAActualizar);
            DomicilioDto domicilioDto = objectMapper.convertValue(usuarioAActualizar.getDomicilio(), DomicilioDto.class);
            usuarioActualizadoDto = objectMapper.convertValue(usuarioAActualizar, UsuarioDto.class);
            usuarioActualizadoDto.setDomicilioDto(domicilioDto);
            LOGGER.info("Usuario actualizado con exito: {}", JsonPrinter.toString(usuarioActualizadoDto));
           // }else{
             //   LOGGER.error("No fue posible actualizar los datos ya que el id de la direccion del usuario usuario no se encuentra registrado");
               // throw new ResourceNotFoundException("No fue posible actualizar los datos ya que el id de la direccion del usuario usuario no se encuentra registrado");
            //}

        } else {
            LOGGER.error("No fue posible actualizar los datos ya que el usuario no se encuentra registrado");
            throw new ResourceNotFoundException("No fue posible actualizar los datos ya que el usuario no se encuentra registrado");
        }

        return usuarioActualizadoDto;
    }

    @Override
    public List<UsuarioDto> listarUsuarios() {

        List<Usuario> usuarios = usuarioRepository.findAll();
        List<UsuarioDto> usuarioDtos = usuarios.stream()
                .map(usuario -> {
                    Domicilio dom = usuario.getDomicilio();
                    DomicilioDto domicilioDto = objectMapper.convertValue(dom, DomicilioDto.class);
                    return new UsuarioDto(usuario.getId(), usuario.getNombre(), usuario.getApellido(), usuario.getEmail(), usuario.getPhone(), usuario.getDni(), usuario.isAdmin(), usuario.getFechaIngreso(), domicilioDto);
                })
                .toList();

        LOGGER.info("Lista de todos los usuarios: {}", JsonPrinter.toString(usuarioDtos));

        return usuarioDtos;
    }

    @Override
    public void eliminarUsuario(Long id) throws ResourceNotFoundException {
        if (buscarUsuarioPorId(id) != null) {
            usuarioRepository.deleteById(id);
            LOGGER.warn("Se ha eliminado el usuario con id {}", id);
        } else {
            LOGGER.error("No se ha encontrado el usuario con id {} " + id);
            throw new ResourceNotFoundException("No se ha encontrado el usuario con id " + id);
        }
    }
}
