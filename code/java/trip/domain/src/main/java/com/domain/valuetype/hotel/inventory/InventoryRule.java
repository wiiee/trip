package com.domain.valuetype.hotel.inventory;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by wiiee on 9/3/2017.
 */
public class InventoryRule {
    private List<InventorySetting> inventorySettings;

    public InventoryRule() {
        inventorySettings = new ArrayList<>();
    }

    public List<InventorySetting> getInventorySettings() {
        return inventorySettings;
    }
}
