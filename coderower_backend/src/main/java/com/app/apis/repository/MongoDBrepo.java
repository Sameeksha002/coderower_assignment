package com.app.apis.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.app.apis.entities.Data;

public interface MongoDBrepo extends MongoRepository<Data, String>{

}
