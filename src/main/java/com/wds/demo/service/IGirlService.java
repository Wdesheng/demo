package com.wds.demo.service;

import com.wds.demo.pojo.Girl;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IGirlService
{
	public void saveGirls();

	public Page<Girl> findAllT(Pageable pageable);
}
