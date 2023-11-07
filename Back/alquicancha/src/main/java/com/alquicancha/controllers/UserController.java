package com.alquicancha.controllers;

import com.alquicancha.Service.UserService;
import com.alquicancha.controllers.dto.UserRegistrationDto;
import com.alquicancha.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@Controller
@RequestMapping("/registration")
public class UserController {

    @Autowired
    private UserService userService;

    @ModelAttribute("user")
    public UserRegistrationDto userRegistrationDto(){
        return new UserRegistrationDto();
    }

    @GetMapping
    public String showRegistrationForm(Model model){
        return "registration";
    }

    @PostMapping
    public String registerUserAccount(
            @ModelAttribute("user")
            @Valid UserRegistrationDto userDto,
            BindingResult result){

        User existing = userService.findByEmail(userDto.getEmail());
        if(existing!=null){
            result.reject("email", null, "There is already an account registred with that email");
        }
        System.out.print("result.hasErrors():"+result.hasErrors());
        if(result.hasErrors()){
            return "registration";
        }

        userService.save(userDto);

        return "redirect:/registration?success";
    }

}
