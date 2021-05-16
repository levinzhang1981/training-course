package com.kingland.neusoft.course.service;

import com.kingland.neusoft.course.mapper.UserMapper;
import com.kingland.neusoft.course.mapper.dao.UserModel;
import com.kingland.neusoft.course.service.bo.KscUserDetails;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

/**
 * Database driven user details service implementation provide method for accessing the user data from database
 *
 * @author KSC
 */
public class DbDrivenUserDetailsServiceImpl implements UserDetailsService {
    private final UserMapper userMapper;

    public DbDrivenUserDetailsServiceImpl(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel userModel = this.userMapper.selectByUsername(username);
        return new KscUserDetails(userModel);
    }
}
