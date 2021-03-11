package com.kingland.neusoft.course.mapper;

import com.kingland.neusoft.course.model.PermissonModel;

public interface PermissonPermissonMapper {
    int deleteByPrimaryKey(Long id);

    int insert(PermissonModel record);

    int insertSelective(PermissonModel record);

    PermissonModel selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(PermissonModel record);

    int updateByPrimaryKey(PermissonModel record);
}