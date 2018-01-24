package com.wds.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wds.demo.dao.GirlRepository;
import com.wds.demo.pojo.Girl;
import com.wds.demo.properties.GirlProperties;
import com.wds.demo.properties.DatasourceProperties;

@RestController
public class HelloController
{
	@Autowired
	private GirlProperties girlProperties;
	
	@Autowired
	private DatasourceProperties springProperties;
	
	@Autowired
	private GirlRepository girlRepository;
	
	//@RequestMapping(value="/hello", method = RequestMethod.POST)
	@PostMapping(value = "/hello")
	public String say(){
		return girlProperties.getName();
		
	}
	
	@RequestMapping(value="/hello/{name}", method = RequestMethod.GET)

	public String sayTo(@PathVariable String name){
        System.out.println("ssss");
	    return "hello 66688  "+name;
	}

    @RequestMapping(value="/hellos/{name}", method = RequestMethod.GET)

    public String sayTos(@PathVariable String name){
        System.out.println("ssss");
        return "hello 666  "+name;
    }
}
