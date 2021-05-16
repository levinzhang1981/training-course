package com.kingland.neusoft.course.mapper;

import com.kingland.neusoft.course.mapper.dao.UserModel;

public interface UserMapper {
    int deleteByPrimaryKey(Long id);

    int insert(UserModel record);

    int insertSelective(UserModel record);

    UserModel selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(UserModel record);

    int updateByPrimaryKey(UserModel record);

    UserModel selectByUsername(String username);
}