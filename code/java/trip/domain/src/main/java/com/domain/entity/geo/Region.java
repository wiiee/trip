package com.domain.entity.geo;

import com.domain.valuetype.geo.LongLat;
import com.platform.data.base.BaseData;

/**
 * Created by wang.na on 2017/1/12.
 */
public class Region extends BaseData<Integer> {
    //
    private int parentId;

    private String name;

    private LongLat longLat;

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

    public LongLat getLongLat() {
        return longLat;
    }

    public void setLongLat(LongLat longLat) {
        this.longLat = longLat;
    }
}
