package com.app.apis.entities;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection= "CodeRower")
public class Data {

	@Id
	private String id;
	
	private String remark;
	
	private List<List<String>> configuration;
	
}
