package com.app.apis.services;

import java.util.List;

import com.app.apis.entities.Data;

public interface ConfigurationService {

	public List<List<String>> getConfigurationById(String id);

	public void updateRemark(String id, String remark);

	public void addMongoDB(Data data);
}
