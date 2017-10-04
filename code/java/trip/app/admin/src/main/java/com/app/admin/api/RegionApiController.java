package com.app.admin.api;

import com.domain.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
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

    @RequestMapping(value = "/getRegionsByParentId", method = RequestMethod.GET)
    public List<Pair<Integer, String>> getAddress(@RequestParam int parentId) {
        return regionService.getRegionsByParentId(parentId);
    }

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public void test() {
        regionService.update(regionService.get());
    }
}
