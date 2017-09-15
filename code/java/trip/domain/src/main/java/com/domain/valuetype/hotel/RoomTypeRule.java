package com.domain.valuetype.hotel;

import com.domain.valuetype.hotel.inventory.InventoryRule;
import com.domain.valuetype.hotel.policy.IPolicy;
import com.domain.valuetype.hotel.price.PriceRule;
import com.domain.valuetype.hotel.property.IProperty;

import java.util.List;

/**
 * Created by wiiee on 9/4/2017.
 */
public class RoomTypeRule {
    private PriceRule priceRule;
    private InventoryRule inventoryRule;
    private List<IProperty> properties;
    private List<IPolicy> policies;

    public RoomTypeRule(PriceRule priceRule, InventoryRule inventoryRule, List<IProperty> properties, List<IPolicy> policies) {
        this.priceRule = priceRule;
        this.inventoryRule = inventoryRule;
        this.properties = properties;
        this.policies = policies;
    }
    public PriceRule getPriceRule() {
        return priceRule;
    }

    public InventoryRule getInventoryRule() {
        return inventoryRule;
    }

    public List<IProperty> getProperties() {
        return properties;
    }

    public List<IPolicy> getPolicies() {
        return policies;
    }
}
