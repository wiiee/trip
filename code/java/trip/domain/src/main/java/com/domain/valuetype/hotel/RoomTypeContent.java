package com.domain.valuetype.hotel;

import java.util.List;

/**
 * Created by wiiee on 9/4/2017.
 */
public class RoomTypeContent {
    private List<String> picIds;

    public RoomTypeContent(List<String> picIds) {
        this.picIds = picIds;
    }

    public List<String> getPicIds() {
        return picIds;
    }
}