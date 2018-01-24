package com.wds.demo.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.wds.demo.pojo.Girl;

public interface GirlRepository extends JpaRepository<Girl, Integer>
{
	public List<Girl> findByName(String name);

	public Page<Girl> findAllT(Pageable pageable);
}
