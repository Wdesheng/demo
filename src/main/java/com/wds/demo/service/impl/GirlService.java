package com.wds.demo.service.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.wds.demo.dao.GirlRepository;
import com.wds.demo.pojo.Girl;
import com.wds.demo.service.IGirlService;

@Service
public class GirlService implements IGirlService
{

	@Autowired
	private GirlRepository girlRepository;
	
	@Transactional
	public void saveGirls()
	{
		Girl girl1 = new Girl();
		girl1.setAge(15);
		girl1.setName("小明");
		girlRepository.save(girl1);
		
		Girl girl2 = new Girl();
		girl2.setAge(16);
		girl2.setName("小明222222222222");
		girlRepository.save(girl2);

	}

	@Override
	public Page<Girl> findAllT(Pageable pageable) {
		return girlRepository.findAll(pageable);
	}

	public Girl findOne(Integer id){
		return girlRepository.findOne(id);
	}

}
