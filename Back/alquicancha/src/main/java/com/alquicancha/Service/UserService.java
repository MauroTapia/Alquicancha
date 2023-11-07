package com.alquicancha.Service;

import com.alquicancha.controllers.dto.UserRegistrationDto;
import com.alquicancha.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;


public interface UserService extends UserDetailsService {
    User findByEmail(String email);

    User save(UserRegistrationDto registration);
}
