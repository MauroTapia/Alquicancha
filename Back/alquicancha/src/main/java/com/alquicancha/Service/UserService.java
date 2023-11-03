package com.alquicancha.Service;

import com.alquicancha.controllers.dto.UsuarioRegistroDTO;
import com.alquicancha.entity.Usuario;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
    public Usuario guardar(UsuarioRegistroDTO registroDTO);

    public List<Usuario> listarUsuarios();
}
