package com.kingland.neusoft.course.model;

import java.io.Serializable;

/**
 * user_permisson_xref
 * @author 
 */
public class UserPermissonXrefModel implements Serializable {
    private Long id;

    private Long userId;

    private Long permissionId;

    private static final long serialVersionUID = 1L;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getPermissionId() {
        return permissionId;
    }

    public void setPermissionId(Long permissionId) {
        this.permissionId = permissionId;
    }
}