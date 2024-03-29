package com.kingland.neusoft.course.service;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;
import com.kingland.neusoft.course.mapper.UserMapper;
import com.kingland.neusoft.course.mapper.dao.UserModel;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * Implementation class of user service
 *
 * @author KSC
 */
@Service
public class UserServiceImpl implements UserService {

    private final UserMapper userMapper;

    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserMapper userMapper,
                           PasswordEncoder passwordEncoder) {
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserModel getUserById(Long id) {
        return userMapper.selectByPrimaryKey(id);
    }

    @Override
    public Page<UserModel> query(PageInfo<UserModel> queryRequest) {
        return userMapper.query(queryRequest);
    }

    @Override
    public UserModel addUser(UserModel userModel) {
        // store encoded password value
        userModel.setPassword(passwordEncoder.encode(userModel.getPassword()));
        userMapper.insert(userModel);
        return userModel;
    }

    @Override
    public void deleteById(Long id) {
        userMapper.deleteByPrimaryKey(id);
    }
}
