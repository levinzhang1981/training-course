package com.kingland.neusoft.course.service;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;
import com.kingland.neusoft.course.mapper.dao.UserModel;

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
     * Query user model by provided conditions
     *
     * @param queryRequest request body for quering
     * @return list of user model
     */
    Page<UserModel> query(PageInfo<UserModel> queryRequest);

    /**
     * Create user by specific user object
     *
     * @param userModel the model for creating user
     * @return database record
     */
    UserModel addUser(UserModel userModel);

    /**
     * Delete user model by id
     *
     * @param id the id for deleting
     */
    void deleteById(Long id);
}
