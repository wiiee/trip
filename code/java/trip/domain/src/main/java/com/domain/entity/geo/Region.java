package com.domain.entity.geo;

import com.platform.data.base.BaseData;

/**
 * Created by wang.na on 2017/1/12.
 */
public class Region extends BaseData<Integer> {
    //
    private int parentId;

    private String name;

    public int getParentId() {
        return parentId;
    }

    public void setParentId(int parentId) {
        this.parentId = parentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
