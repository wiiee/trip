package com.domain.valuetype.hotel.price;

import java.util.Date;

/**
 * Created by wiiee on 9/3/2017.
 */
public class SamePriceSetting extends BasePriceSetting {
    private CostPrice costPrice;

    public SamePriceSetting(CostPrice costPrice){
        this.costPrice = costPrice;
    }

    @Override
    public CostPrice getCostPrice(Date date) {
        if(isDateValid(date)){
            return costPrice;
        }

        return null;
    }
}
