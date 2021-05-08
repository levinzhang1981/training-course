package com.kingland.neusoft.course.service;

import com.kingland.neusoft.course.mapper.UserMapper;
import com.kingland.neusoft.course.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public UserModel getUserById(Long id) {
        return userMapper.selectByPrimaryKey(id);
    }

    @Override
    public UserModel addUser(UserModel userModel) {
        userMapper.insert(userModel);
        return userModel;
    }
}
