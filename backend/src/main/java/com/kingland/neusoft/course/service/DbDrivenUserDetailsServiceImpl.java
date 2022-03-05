package com.kingland.neusoft.course.service;

import com.kingland.neusoft.course.mapper.UserMapper;
import com.kingland.neusoft.course.mapper.dao.UserModel;
import com.kingland.neusoft.course.service.bo.KscUserDetails;
import org.springframework.security.config.annotation.authentication.configurers.provisioning.UserDetailsManagerConfigurer;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Collection;

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
        return new UserDetails() {
            @Override
            public Collection<? extends GrantedAuthority> getAuthorities() {
                return null;
            }

            @Override
            public String getPassword() {
                return userModel.getPassword();
            }

            @Override
            public String getUsername() {
                return userModel.getUsername();
            }

            @Override
            public boolean isAccountNonExpired() {
                return false;
            }

            @Override
            public boolean isAccountNonLocked() {
                return false;
            }

            @Override
            public boolean isCredentialsNonExpired() {
                return false;
            }

            @Override
            public boolean isEnabled() {
                return true;
            }
        };
    }
}
