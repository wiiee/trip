package com.domain.valuetype.hotel.inventory;

import com.domain.valuetype.DateRange;

/**
 * Created by wiiee on 9/3/2017.
 */
public class InventorySetting {
    private DateRange dateRange;
    private int total;

    public InventorySetting(DateRange dateRange, int total) {
        this.dateRange = dateRange;
        this.total = total;
    }

    public DateRange getDateRange() {
        return dateRange;
    }

    public int getTotal() {
        return total;
    }
}
