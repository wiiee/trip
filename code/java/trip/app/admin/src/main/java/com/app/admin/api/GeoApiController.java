package com.app.admin.api;

import com.platform.model.baidu.GeocoderSearchResponse;
import com.platform.provider.BaiduMapProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by wiiee on 9/23/2017.
 */
@RestController
@RequestMapping("/api/user")
public class GeoApiController {
    @Autowired
    private BaiduMapProvider baiduMapProvider;

    @RequestMapping(value = "/getAddress", method = RequestMethod.GET)
    public String getAddress(@RequestParam double latitude, @RequestParam double longitude) {
        GeocoderSearchResponse geo = this.baiduMapProvider.getGeo(latitude, longitude);

        if(geo != null && geo.getResult() != null)
        {
            return String.format("%s(%s)", geo.getResult().getFormatted_address(), geo.getResult().getSematic_description());
        }

        return "";
    }
}
