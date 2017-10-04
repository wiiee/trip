package com.domain.service;

import com.domain.entity.geo.Metro;
import com.domain.service.base.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by wiiee on 10/4/2017.
 */
public class MetroService extends BaseService<Metro, Integer> {
    @Autowired
    public MetroService(MongoRepository<Metro, Integer> repository) {
        super(repository);
    }
}
