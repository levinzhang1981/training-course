package com.kingland.neusoft.course.model;

import java.io.Serializable;

/**
 * The data model represent the necessary field of family
 *
 * @author KSC
 */
public class FamilyModel implements Serializable {
    private Long id;

    private Long userId;

    private String name;

    private Integer age;

    private String relationshiptype;

    private String phoneNum;

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getRelationshiptype() {
        return relationshiptype;
    }

    public void setRelationshiptype(String relationshiptype) {
        this.relationshiptype = relationshiptype;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }
}