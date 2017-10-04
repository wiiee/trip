package com.domain.repository;

import com.domain.entity.geo.Metro;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by wiiee on 10/4/2017.
 */
public interface MetroRepository extends MongoRepository<Metro, Integer> {
}
