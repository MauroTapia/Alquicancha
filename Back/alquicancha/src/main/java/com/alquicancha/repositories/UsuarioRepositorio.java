package com.alquicancha.repositories;

import com.alquicancha.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepositorio extends JpaRepository<User,Long> {
    User findByEmail(String email);

}
