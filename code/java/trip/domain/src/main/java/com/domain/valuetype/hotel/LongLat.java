package com.domain.valuetype.hotel;

/**
 * Created by wiiee on 9/3/2017.
 */
public class LongLat {
    private double latitude;
    private double longitude;

    public LongLat(double latitude, double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public double getLongitude() {
        return longitude;
    }
}
