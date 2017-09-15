package com.app.admin.controller;

import com.app.admin.Application;
import com.domain.entity.geo.Region;
import com.domain.service.RegionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by wiiee on 3/5/2017.
 */
@Controller
@RequestMapping("/test")
public class TestController {
    private static final Logger log = LoggerFactory.getLogger(Application.class);

    @Autowired
    private RegionService regionService;

    @RequestMapping(value = "/region", method = RequestMethod.GET)
    @ResponseBody
    public List<Region> region() {
        try {
            return regionService.get();
        } catch (Exception ex) {
            log.error(ex.toString());
            return null;
        }
    }
}
