package com.kingland.neusoft.course.mapper;

import com.kingland.neusoft.course.mapper.dao.FamilyModel;

public interface FamilyMapper {
    int deleteByPrimaryKey(Long id);

    int insert(FamilyModel record);

    int insertSelective(FamilyModel record);

    FamilyModel selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(FamilyModel record);

    int updateByPrimaryKey(FamilyModel record);
}