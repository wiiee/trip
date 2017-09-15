package com.domain.entity.hotel;

import com.domain.valuetype.hotel.RoomTypeContent;
import com.domain.valuetype.hotel.RoomTypeRule;
import com.platform.data.base.BaseData;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by wiiee on 8/31/2017.
 */
public class RoomType extends BaseData<Integer> {
    private RoomTypeContent roomTypeContent;

    //不同供应商的房型规则
    private Map<Integer, RoomTypeRule> roomTypeRules;

    public RoomType(Integer integer, RoomTypeContent roomTypeContent) {
        super(integer);
        this.roomTypeContent = roomTypeContent;
        this.roomTypeRules = new HashMap<>();
    }

    public RoomTypeContent getRoomTypeContent() {
        return roomTypeContent;
    }

    public Map<Integer, RoomTypeRule> getRoomTypeRules() {
        return roomTypeRules;
    }
}