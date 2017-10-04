package com.domain.service;

import com.domain.entity.geo.Region;
import com.domain.service.base.BaseService;
import com.platform.model.LinkedList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by wiiee on 3/25/2017.
 */
@Component
public class RegionService extends BaseService<Region, Integer> {
    @Autowired
    public RegionService(MongoRepository<Region, Integer> repository) {
        super(repository);
    }

    public List<LinkedList<Integer>> getRegions() {
        List<LinkedList<Integer>> result = new ArrayList<LinkedList<Integer>>();

        List<Integer> topRegionIds = getTopRegionIds();

        for (int regionId : topRegionIds) {
            LinkedList node = new LinkedList();
            node.setId(regionId);

            buildLinkedList(node);

            result.add(node);
        }

        return result;
    }

    //获取所有的子级地区
    public List<Pair<Integer, String>> getRegionsByParentId(int parentId){
        Region regionExample = new Region();
        regionExample.setParentId(parentId);

        Example<Region> example = Example.of(regionExample);

        return getAll(example).stream().map(o -> Pair.of(o.getId(), o.getName())).collect(Collectors.toList());
        //return get().stream().map(o -> Pair.of(o.getId(), o.getName())).collect(Collectors.toList());
    }

    //获取父地区
    public List<Integer> getRegionsByChild(int childId) {
        List<Integer> result = new ArrayList<>();
        result.add(childId);
        Region region = get(childId);

        while (!StringUtils.isEmpty(region.getParentId())) {
            result.add(region.getParentId());
            region = get(region.getParentId());
        }

        //result.Reverse();

        return result;
    }

    //获取地区链
    public List<List<Integer>> getRegionChain(int childId) {
        List<List<Integer>> result = new ArrayList<>();
        Region region = get(childId);

        while (region != null && !StringUtils.isEmpty(region.getParentId())) {
            Region regionExample = new Region();
            regionExample.setParentId(region.getParentId());
            Example<Region> example = Example.of(regionExample);

            List<Integer> regionIds = getAll(example).stream()
                    .map(o -> o.getId())
                    .collect(Collectors.toList());
            result.add(regionIds);
            region = get(region.getParentId());
        }

        result.add(getTopRegionIds());

        //result.Reverse();

        return result;
    }

    //获取所有的子目录
    public LinkedList<Integer> getRegionsByParent(int parentId) {
        LinkedList<Integer> linkedList = new LinkedList<Integer>();
        linkedList.setId(parentId);

        buildLinkedList(linkedList);

        return linkedList;
    }

    //获取顶级目录
    public List<Integer> getTopRegionIds() {
        Region region = new Region();
        region.setParentId(-1);
        Example<Region> example = Example.of(region);

        return getAll(example).stream()
                .map(o -> o.getId())
                .collect(Collectors.toList());
    }

    private void buildLinkedList(LinkedList<Integer> node) {
        Region region = new Region();
        region.setParentId(node.getId());
        Example<Region> example = Example.of(region);

        List<Integer> children = getAll(example).stream()
                .map(o -> o.getId())
                .collect(Collectors.toList());

        if (CollectionUtils.isEmpty(children)) {
            return;
        } else {
            node.setNext(new ArrayList<>());

            for (int id : children) {
                LinkedList nextNode = new LinkedList();
                nextNode.setId(id);

                buildLinkedList(nextNode);

                node.getNext().add(nextNode);
            }
        }
    }
}
