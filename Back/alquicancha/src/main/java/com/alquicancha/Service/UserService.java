package com.alquicancha.Service;

import com.alquicancha.dto.UserDto;
import com.alquicancha.entity.User;

import java.util.List;

public interface UserService {
    void saveUser(UserDto userDto);

    User findByEmail(String email);

    List<UserDto> findAllUsers();
}
