package com.kingland.neusoft.course.service.bo;

import com.kingland.neusoft.course.mapper.dao.UserModel;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Objects;

/**
 * Ksc provided user details model for authentication
 *
 * @author KSC
 */
public class KscUserDetails implements UserDetails {

    private final UserModel internalUser;

    public KscUserDetails(UserModel internalUser) {
        this.internalUser = Objects.requireNonNullElseGet(internalUser, UserModel::new);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return internalUser.getPassword();
    }

    @Override
    public String getUsername() {
        return internalUser.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
