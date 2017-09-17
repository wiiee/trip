package com.domain.repository;

import com.domain.entity.user.User;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by wiiee on 9/17/2017.
 */
public interface UserRepository extends MongoRepository<User, String> {
}
