package com.domain.valuetype.geo;

/**
 * Created by wiiee on 9/3/2017.
 */
public class Location {
    private String name;
    private int regionId;
    private LongLat longLat;

    public Location(String name, int regionId, LongLat longLat) {
        this.name = name;
        this.regionId = regionId;
        this.longLat = longLat;
    }

    public String getName() {
        return name;
    }

    public int getRegionId() {
        return regionId;
    }

    public LongLat getLongLat() {
        return longLat;
    }
}
