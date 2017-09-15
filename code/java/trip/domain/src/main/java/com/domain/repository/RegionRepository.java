package com.domain.repository;

import com.domain.entity.geo.Region;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by wiiee on 3/28/2017.
 */
public interface RegionRepository extends MongoRepository<Region, Integer> {
}
