package com.kingland.neusoft.course.mapper;

import com.kingland.neusoft.course.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Profile("JDBC")
@Repository
public class UserMapperImpl implements UserMapper {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return 0;
    }

    @Override
    public int insert(UserModel record) {
        return 0;
    }

    @Override
    public int insertSelective(UserModel record) {
        return 0;
    }

    @Override
    public UserModel selectByPrimaryKey(Long id) {
        String sql = "select id, username, password, name, gender, birthday, phone_num as phoneNum, home_address as homeAddress from user_access.user where id = ?;";
        UserModel userModel = jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(UserModel.class), id);
        return userModel;
    }

    @Override
    public int updateByPrimaryKeySelective(UserModel record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(UserModel record) {
        return 0;
    }
}
