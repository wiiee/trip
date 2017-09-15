package com.domain.entity.product;

/**
 * Created by wiiee on 9/7/2017.
 */
public abstract class BaseProduct implements IProduct {
    @Override
    public String getType() {
        return this.getClass().getSimpleName();
    }
}
