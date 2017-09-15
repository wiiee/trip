package com.domain.entity.order;

import com.platform.data.base.BaseInfoComposition;

/**
 * Created by wiiee on 9/4/2017.
 */
public class Order extends BaseInfoComposition<OrderInfo> {
    //Id为userId

    public Order(String id) {
        super(id);
    }
}
