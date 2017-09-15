package com.domain.valuetype.hotel.price;

import com.platform.util.DateUtil;

import java.time.DayOfWeek;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by wiiee on 9/3/2017.
 */
public class WeekPriceSetting extends BasePriceSetting {
    private Map<DayOfWeek, CostPrice> costPrices;

    public WeekPriceSetting() {
        costPrices = new HashMap<>();
    }

    @Override
    public CostPrice getCostPrice(Date date) {
        if(isDateValid(date)){
            return costPrices.get(DateUtil.toCalendar(date).get(Calendar.DAY_OF_WEEK));
        }

        return null;
    }
}
