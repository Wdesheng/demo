package com.wds.demo.config;

import java.sql.SQLException;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import com.alibaba.druid.pool.DruidDataSource;
import com.wds.demo.properties.DatasourceProperties;

@Configuration
public class DruidConfig
{
	@Autowired
	private DatasourceProperties datasourceProperties;
	
	private Logger logger = LoggerFactory.getLogger(DruidConfig.class);
	
	@Bean     //声明其为Bean实例  
    @Primary  //在同样的DataSource中，首先使用被标注的DataSource 
	public DataSource dataSource(){
		DruidDataSource dataSource = new DruidDataSource();
		
		dataSource.setDriverClassName(datasourceProperties.getDriverClassName());
		dataSource.setUrl(datasourceProperties.getUrl());
		dataSource.setUsername(datasourceProperties.getUsername());
		dataSource.setPassword(datasourceProperties.getPassword());
		
		
		dataSource.setInitialSize(datasourceProperties.getInitialSize());
		dataSource.setMinIdle(datasourceProperties.getMinIdle());
		dataSource.setMaxActive(datasourceProperties.getMaxActive());
		dataSource.setMaxWait(datasourceProperties.getMaxWait());
		dataSource.setTimeBetweenEvictionRunsMillis(datasourceProperties.getTimeBetweenEvictionRunsMillis());
		dataSource.setMinEvictableIdleTimeMillis(datasourceProperties.getMinEvictableIdleTimeMillis());
		dataSource.setValidationQuery(datasourceProperties.getValidationQuery());
		dataSource.setTestWhileIdle(datasourceProperties.getTestWhileIdle());
		dataSource.setTestOnBorrow(datasourceProperties.getTestOnBorrow());
		dataSource.setTestOnReturn(datasourceProperties.getTestOnReturn());
		dataSource.setPoolPreparedStatements(datasourceProperties.getPoolPreparedStatements());
		dataSource.setMaxPoolPreparedStatementPerConnectionSize(datasourceProperties.getMaxPoolPreparedStatementPerConnectionSize());
		try
		{
			dataSource.setFilters(datasourceProperties.getFilters());
		} catch (SQLException e)
		{
			// TODO Auto-generated catch block
			logger.error("druid configuration initialization filter", e); 
		}
		return dataSource;
	}
}
