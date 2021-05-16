package com.kingland.neusoft.course.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;
import com.kingland.neusoft.course.mapper.dao.UserModel;
import com.kingland.neusoft.course.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * The user information related rest api controller
 *
 * @author KSC
 */
//@RestController("/user")
@RestController
public class UserController {

    private final UserService userService;

    /**
     * Initialize controller with user service bean
     *
     * @param userService service implementation bean
     */
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * Api for creating user
     *
     * @param userModel creating user
     * @return created user record
     */
    @PostMapping("/user")
    public UserModel addUser(@RequestBody UserModel userModel) {
        return userService.addUser(userModel);
    }

    /**
     * Api for getting user information by id
     *
     * @param id id for querying user
     * @return existed user
     */
    @GetMapping("/user/{id}")
    public UserModel getById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    /**
     * Api for querying user information by advance condition
     *
     * @param request page info like request for querying user information
     * @return collection of user info but with page information
     */
    @PostMapping("/user/query")
    public Page<UserModel> query(@RequestBody PageInfo<UserModel> request) {
        return userService.query(request);
    }

    /**
     * Api for getting user information by id
     *
     * @param id id for querying user
     * @return existed user
     */
    @DeleteMapping("/user/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) {
        userService.deleteById(id);
        // use response entity to build the empty content with deleted message
        return ResponseEntity.noContent().build();
    }
}