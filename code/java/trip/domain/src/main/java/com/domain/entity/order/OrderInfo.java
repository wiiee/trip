package com.domain.entity.order;

import com.domain.entity.product.IProduct;
import com.platform.data.base.BaseData;

import java.util.Date;
import java.util.List;

/**
 * Created by wiiee on 9/4/2017.
 */
public class OrderInfo extends BaseData<String> {
    //订单创建日期
    private Date date;

    //总价格
    private int price;

    //订单产品
    private List<IProduct> products;
}
