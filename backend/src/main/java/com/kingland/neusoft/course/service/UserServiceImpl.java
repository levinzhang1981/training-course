package com.kingland.neusoft.course.service;

import com.kingland.neusoft.course.mapper.UserMapper;
import com.kingland.neusoft.course.mapper.dao.UserModel;
import org.springframework.stereotype.Service;

/**
 * Implementation class of user service
 *
 * @author KSC
 */
@Service
public class UserServiceImpl implements UserService {

    private final UserMapper userMapper;

    public UserServiceImpl(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    public UserModel getUserById(Long id) {
        return userMapper.selectByPrimaryKey(id);
    }

    @Override
    public UserModel addUser(UserModel userModel) {
        userMapper.insert(userModel);
        return userModel;
    }

    @Override
    public void deleteById(Long id) {
        userMapper.deleteByPrimaryKey(id);
    }
}
