package com.wds.demo.controller;

import java.awt.print.Pageable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import com.wds.demo.dao.GirlRepository;
import com.wds.demo.pojo.Girl;
import com.wds.demo.pojo.Result;
import com.wds.demo.service.IGirlService;
import com.wds.demo.util.ResultUtil;

@RestController
public class GirlController
{
	private final static Logger logger = LoggerFactory.getLogger(GirlController.class);
	
	@Autowired
	private GirlRepository girlRepository;
	
	@Autowired
	private IGirlService girlService;

	@ApiOperation(value="创建Girl", notes="根据Girl对象创建用户")
	@ApiImplicitParam(name = "girl", value = "用户详细实体girl", required = true, dataType = "Girl")
	@PostMapping(value="/girl")
	public Result<Girl> addGirl(@Valid Girl girl, BindingResult bindingResult){
		if(bindingResult.hasErrors()){
			
			return ResultUtil.error(1, bindingResult.getFieldError().getDefaultMessage());
		}
		girl.setAge(girl.getAge());
		girl.setName(girl.getName());
		return ResultUtil.success(girlRepository.save(girl));
	}

	@ApiOperation(value = "获取单个Girl",notes = "根据url的id来获取用户详细信息")
	@ApiImplicitParam(name = "id",value = "GirlID",required = true,dataType = "Integer",paramType = "path")
	@GetMapping(value="/girl/{id}")
	public Girl getGirl(@PathVariable("id") Integer id){
		return girlRepository.findOne(id);
	}

	@ApiOperation(value = "获取Girl列表",notes = "")
	@GetMapping(value="/girl")
	public Map<String,Object> getGirls(@RequestParam("page") Integer page, @RequestParam("rows") Integer size){
		Map<String,Object> map = new HashMap<String,Object>();
		org.springframework.data.domain.Pageable pageable = new PageRequest(page-1,size);
		Page<Girl> list = girlService.findAllT(pageable);
		int total = girlRepository.findAll().size();
		map.put("total",total);
		map.put("rows",list.getContent());
		return map;
	}

	@ApiOperation(value = "获取Girl列表",notes = "根据name来获取用户列表")
	@GetMapping(value="/girls")
	public List<Girl> findByName(@RequestParam("name") String name){
		logger.info("findByName");
		return girlRepository.findByName(name);
	}

	@ApiOperation(value="更新信息", notes="根据url的id来指定更新用户信息")
	@ApiImplicitParams({
			@ApiImplicitParam(name = "id", value = "用户ID", required = true, dataType = "Integer",paramType = "path"),
			@ApiImplicitParam(name = "girl", value = "girl实体", required = true, dataType = "Girl")
	})
	@PutMapping(value="/girls/{id}")
	public Girl updateGirl(@PathVariable("id") Integer id,
							@RequestBody Girl girl){

		girl.setId(id);
//		girl.setAge(age);
//		girl.setName(name);
		return girlRepository.save(girl);
	}

	@ApiOperation(value="删除用户", notes="根据url的id来指定删除用户")
	@ApiImplicitParam(name = "id", value = "用户ID", required = true, dataType = "Integer", paramType = "path")
	@DeleteMapping(value="/girls/{id}")
	public void deleteGirl(@PathVariable("id") Integer id){
		girlRepository.delete(id);
	}
	
	@PostMapping(value="/girls/two")
	public void saveGirls(){
		girlService.saveGirls();
	}
}
