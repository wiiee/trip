package com.domain.model;

/**
 * Created by wiiee on 10/5/2017.
 */
public class RegionArea {
    private int id;
    private String name;
    private boolean hasChild;

    public RegionArea(int id, String name, boolean hasChild) {
        this.id = id;
        this.name = name;
        this.hasChild = hasChild;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public boolean isHasChild() {
        return hasChild;
    }
}
