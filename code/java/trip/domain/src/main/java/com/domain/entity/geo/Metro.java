package com.domain.entity.geo;

import com.domain.valuetype.geo.Station;
import com.platform.data.base.BaseData;

import java.util.List;

/**
 * Created by wiiee on 10/4/2017.
 */
public class Metro extends BaseData<Integer> {
    private String name;

    private List<Station> stations;
}
