package com.kingland.neusoft.course.controller;

import com.kingland.neusoft.course.model.UserModel;
import com.kingland.neusoft.course.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public UserModel addUser(@RequestBody UserModel userModel) {
        return userService.addUser(userModel);
    }

    @GetMapping("/user/{id}")
    public UserModel getUserByPK(@PathVariable Long id) {
        return userService.getUserByPK(id);
    }
}