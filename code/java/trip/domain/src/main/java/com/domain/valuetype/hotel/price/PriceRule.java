package com.domain.valuetype.hotel.price;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by wiiee on 9/3/2017.
 */
public class PriceRule {
    private List<IPriceSetting> basicPriceSettings;
    //酒店调整价格规则，如果取不到价格，就取基本价格
    private List<IPriceSetting> seasonalPriceSettings;

    public PriceRule() {
        basicPriceSettings = new ArrayList<>();
        basicPriceSettings = new ArrayList<>();
    }

    public List<IPriceSetting> getBasicPriceSettings() {
        return basicPriceSettings;
    }

    public List<IPriceSetting> getSeasonalPriceSettings() {
        return seasonalPriceSettings;
    }
}
