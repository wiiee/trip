package com.domain.valuetype.hotel.price;

import com.domain.valuetype.DateRange;

import java.util.Date;

/**
 * Created by wiiee on 9/3/2017.
 */
public interface IPriceSetting {
    DateRange getDateRange();

    CostPrice getCostPrice(Date date);
}
