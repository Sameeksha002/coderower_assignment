package com.app.apis.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.apis.entities.Data;
import com.app.apis.services.ConfigurationService;

@RestController
@RequestMapping("/api/configurations")
@CrossOrigin(origins = "http://localhost:3000/")
public class Mycontroller {

	@Autowired
    private ConfigurationService configurationService;
	
	@GetMapping("/{id}")
    public ResponseEntity<List<List<String>>> getConfiguration(@PathVariable String id) {
        List<List<String>> result = configurationService.getConfigurationById(id);
        System.out.println(result);
        return ResponseEntity.ok(result);
    }
	
	 @PutMapping("/{id}")
	    public ResponseEntity<Map<String, String>> updateRemark(@PathVariable String id, @RequestBody Map<String, String> request) {
	        String remark = request.get("remark");
	        configurationService.updateRemark(id, remark);
	        Map<String, String> response = Collections.singletonMap("message", "success");
	        return ResponseEntity.ok(response);
	}
	 
	 @PostMapping
	 public ResponseEntity<String> addMongoDB(@RequestBody Data data) {
		 configurationService.addMongoDB(data);
		 return ResponseEntity.ok("Data Saved");
		 
	 }
	 
	 
}
