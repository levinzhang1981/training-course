package com.kingland.neusoft.course.mapper;

import com.kingland.neusoft.course.model.UserPermissonXrefModel;

public interface UserPermissonXrefMapper {
    int deleteByPrimaryKey(Long id);

    int insert(UserPermissonXrefModel record);

    int insertSelective(UserPermissonXrefModel record);

    UserPermissonXrefModel selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(UserPermissonXrefModel record);

    int updateByPrimaryKey(UserPermissonXrefModel record);
}