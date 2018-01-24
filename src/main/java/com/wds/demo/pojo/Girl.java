package com.wds.demo.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;


@Entity
public class Girl
{
	@Id
	@GeneratedValue
	private Integer id;
	
	@NotNull(message="名字不能为空")
	private String name;
	
	@Min(value=18, message="禁止未成年人入内")
	private Integer age;

	public Girl()
	{
		super();
	}

	public Integer getId()
	{
		return id;
	}

	public void setId(Integer id)
	{
		this.id = id;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public Integer getAge()
	{
		return age;
	}

	public void setAge(Integer age)
	{
		this.age = age;
	}

	@Override
	public String toString()
	{
		return "Girl [id=" + id + ", name=" + name + ", age=" + age + "]";
	}
	
	
}
