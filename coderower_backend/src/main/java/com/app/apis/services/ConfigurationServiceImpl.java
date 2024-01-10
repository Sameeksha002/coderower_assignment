package com.app.apis.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.apis.entities.Data;
import com.app.apis.repository.MongoDBrepo;

@Service
public class ConfigurationServiceImpl implements ConfigurationService{

	@Autowired
	private MongoDBrepo repo;
	
	@Override
	public List<List<String>> getConfigurationById(String id) {
		
		  Optional<Data> optionalData = repo.findById(id);

		  if (optionalData.isPresent()) {
		        Data data = optionalData.get();
		        return data.getConfiguration();  // Fix the typo here
		    }
		    return null;
	}

	@Override
	public void updateRemark(String id, String remark) {
		
		 Optional<Data> optionalData = repo.findById(id);

	        if (optionalData.isPresent()) {
	        	
	            Data data = optionalData.get();
	         
	            data.setRemark(remark);
	            
	            repo.save(data);
	            
	        }
	}

	@Override
	public void addMongoDB(Data data) {
		
		repo.save(data);
		
	}


}
