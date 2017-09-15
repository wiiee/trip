package com.domain.valuetype.hotel.price;

/**
 * Created by wiiee on 9/3/2017.
 */
public class CostPrice {
    private int cost;
    private PriceType priceType;

    public CostPrice(int cost, PriceType priceType) {
        this.cost = cost;
        this.priceType = priceType;
    }

    public int getPrice() {
        return cost;
    }

    public int getCost() {
        return cost;
    }

    public PriceType getPriceType() {
        return priceType;
    }
}
