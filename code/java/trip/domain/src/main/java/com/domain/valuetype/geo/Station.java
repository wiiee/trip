package com.domain.valuetype.geo;

/**
 * Created by wiiee on 10/4/2017.
 */
public class Station {
    private String name;
    private LongLat longLat;

    public Station(String name, LongLat longLat) {
        this.name = name;
        this.longLat = longLat;
    }

    public String getName() {
        return name;
    }

    public LongLat getLongLat() {
        return longLat;
    }
}
