package com.kingland.neusoft.course.config;

import com.kingland.neusoft.course.mapper.UserMapper;
import com.kingland.neusoft.course.service.DbDrivenUserDetailsServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserMapper userMapper;

    public SecurityConfig(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Bean
    @Override
    protected UserDetailsService userDetailsService() {
        return new DbDrivenUserDetailsServiceImpl(this.userMapper);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // @formatter:off
        http
                .requestMatchers().anyRequest()
                .and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/noauth/*", "/user", "/user/*")
                .permitAll();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
