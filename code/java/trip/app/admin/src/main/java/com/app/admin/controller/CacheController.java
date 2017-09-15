package com.app.admin.controller;

import com.app.admin.ui.Statistic;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.platform.constant.CacheStatistics;
import com.platform.util.GsonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.jcache.JCacheCacheManager;
import org.springframework.cache.support.NullValue;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.cache.Cache;
import javax.management.*;
import java.util.*;

/**
 * Created by wang.na on 2016/12/21.
 */
@Controller
@RequestMapping("/cache")
public class CacheController {
    private static final int DISPLAY_MAX = 100;

//    @Autowired
//    private CacheManager cacheManager;

    @Autowired
    private JCacheCacheManager cacheManager;

    @Autowired
    private MBeanServer mBeanServer;

    @RequestMapping(method = RequestMethod.GET)
    public String info(Model model) throws MalformedObjectNameException, AttributeNotFoundException, MBeanException, ReflectionException, InstanceNotFoundException {
        Collection<String> names = cacheManager.getCacheNames();
        List<Statistic> statistics = new ArrayList<>();

//        for(String name : names){
//            statistics.add(new Statistic(name, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
//        }

        for (String name : names) {
            ObjectName objectName = new ObjectName("javax.cache:type=CacheStatistics"
                    + ",CacheManager=" + cacheManager.getCacheManager().getURI().toString().replace(':', '.')
                    + ",Cache=" + name);
            statistics.add(new Statistic(
                    name,
                    (long) mBeanServer.getAttribute(objectName, CacheStatistics.CacheHits.toString()),
                    (long) mBeanServer.getAttribute(objectName, CacheStatistics.CacheMisses.toString()),
                    (long) mBeanServer.getAttribute(objectName, CacheStatistics.CacheGets.toString()),
                    (long) mBeanServer.getAttribute(objectName, CacheStatistics.CachePuts.toString()),
                    (long) mBeanServer.getAttribute(objectName, CacheStatistics.CacheRemovals.toString()),
                    (long) mBeanServer.getAttribute(objectName, CacheStatistics.CacheEvictions.toString()),
                    (float) mBeanServer.getAttribute(objectName, CacheStatistics.CacheHitPercentage.toString()),
                    (float) mBeanServer.getAttribute(objectName, CacheStatistics.CacheMissPercentage.toString()),
                    (float) mBeanServer.getAttribute(objectName, CacheStatistics.AverageGetTime.toString()),
                    (float) mBeanServer.getAttribute(objectName, CacheStatistics.AveragePutTime.toString()),
                    (float) mBeanServer.getAttribute(objectName, CacheStatistics.AverageRemoveTime.toString())
            ));
        }

        model.addAttribute("statistics", statistics);
        return "pages/cache/index";
    }

    @RequestMapping(path = "/{name}", method = RequestMethod.GET)
    public String name(@PathVariable String name, Model model) throws JsonProcessingException {
        Map<String, String> entries = new HashMap<>();

//        //Redis Cache
//        if (nativeCache instanceof StringRedisTemplate) {
//            StringRedisTemplate cache = (StringRedisTemplate) nativeCache;
//            Set<String> keys = cache.keys("*");
//            size = keys.size();
//
//            for (String key : keys) {
//                if (entries.size() <= 100) {
//                    ValueOperations ops = cache.opsForValue();
//                    entries.put(key, mapper.writeValueAsString(ops.get(key)));
//                }
//            }
//        }

        Cache nativeCache;

        //Ehcache
        if(cacheManager.getCache(name) != null){
            nativeCache = (Cache) cacheManager.getCache(name).getNativeCache();

            Iterator<Cache.Entry> it = nativeCache.iterator();

            while (it.hasNext()) {
                Cache.Entry entry = it.next();

                if(entry != null){
                    String value = entry.getValue() instanceof NullValue ? "null" : GsonUtil.toJson(entry.getValue());
                    entries.put(GsonUtil.toJson(entry.getKey()), value);
                }
            }
        }

        model.addAttribute("entries", entries);
        model.addAttribute("size", entries.size());

        return "pages/cache/cache";
    }
}