package com.domain.valuetype.hotel.price;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by wiiee on 9/3/2017.
 */
public class DiversePriceSetting extends BasePriceSetting {
    private Map<Date, CostPrice> costPrices;

    public DiversePriceSetting() {
        costPrices = new HashMap<>();
    }

    @Override
    public CostPrice getCostPrice(Date date) {
        if(isDateValid(date)){
            return costPrices.get(date);
        }

        return null;
    }
}
