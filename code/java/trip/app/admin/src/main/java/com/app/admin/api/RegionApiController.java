package com.app.admin.api;

import com.domain.model.RegionArea;
import com.domain.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by wiiee on 10/4/2017.
 */
@RestController
@RequestMapping("/api/region")
public class RegionApiController {
    @Autowired
    private RegionService regionService;

    @RequestMapping(value = "/getRegionAreasByParentId", method = RequestMethod.GET)
    public List<RegionArea> getAddress(@RequestParam int parentId) {
        return regionService.getRegionAreasByParentId(parentId);
    }

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public void test() {
        regionService.update(regionService.get());
    }
}
