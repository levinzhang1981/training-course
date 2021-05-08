package com.kingland.neusoft.course.model.bo;

import com.kingland.neusoft.course.model.UserModel;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

/**
 * Ksc provided user details model for authentication
 *
 * @author KSC
 */
public class KscUserDetails implements UserDetails {

    private final UserModel internalUser;

    public KscUserDetails(UserModel internalUser) {
        this.internalUser = internalUser;
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
}
