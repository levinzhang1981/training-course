package com.kingland.neusoft.course.service;

import com.kingland.neusoft.course.model.UserModel;

public interface UserService {

    UserModel getUserByPK(Long id);

    UserModel addUser(UserModel userModel);
}
