package com.domain.entity.user;

import com.platform.data.base.BaseData;

/**
 * Created by wiiee on 9/17/2017.
 */
public class User extends BaseData<String> {
    private String password;

    public User(String id, String password) {
        super(id);
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
