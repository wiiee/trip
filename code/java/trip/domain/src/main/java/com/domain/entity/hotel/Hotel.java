package com.domain.entity.hotel;

import com.domain.valuetype.hotel.HotelContent;
import com.platform.data.base.BaseData;

import java.util.List;

/**
 * Created by wiiee on 8/31/2017.
 */
public class Hotel extends BaseData<Integer> {
    //静态信息
    private HotelContent hotelContent;

    //动态信息
    private List<String> roomTypeIds;
}