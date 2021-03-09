package com.kingland.neusoft.course.model;

import java.io.Serializable;

/**
 * permisson
 * @author 
 */
public class PermissonModel implements Serializable {
    private Long id;

    private String name;

    private static final long serialVersionUID = 1L;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}