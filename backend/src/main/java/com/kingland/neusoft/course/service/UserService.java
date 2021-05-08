package com.kingland.neusoft.course.service;

import com.kingland.neusoft.course.model.UserModel;

/**
 * The service provide ability to access the user information
 *
 * @author KSC
 */
public interface UserService {

    /**
     * Get user record by provided id
     *
     * @param id user id
     * @return user data
     */
    UserModel getUserById(Long id);

    /**
     * Create user by specific user object
     *
     * @param userModel the model for creating user
     * @return database record
     */
    UserModel addUser(UserModel userModel);
}
