package com.domain.repository;

import com.platform.data.history.History;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by wiiee on 9/1/2017.
 */
public interface HistoryRepository extends MongoRepository<History, String> {

}
