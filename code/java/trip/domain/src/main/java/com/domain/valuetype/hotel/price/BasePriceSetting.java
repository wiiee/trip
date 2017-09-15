package com.domain.valuetype.hotel.price;

import com.domain.valuetype.DateRange;

import java.util.Date;

/**
 * Created by wiiee on 9/3/2017.
 */
public abstract class BasePriceSetting implements IPriceSetting {
    private DateRange dateRange;

    @Override
    public DateRange getDateRange() {
        return dateRange;
    }

    public void setDateRange(DateRange dateRange) {
        this.dateRange = dateRange;
    }

    //ToDo
    public boolean isDateValid(Date date){
        return false;
    }
}
