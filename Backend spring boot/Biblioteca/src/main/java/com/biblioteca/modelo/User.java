package com.biblioteca.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id", nullable = false)
	private long id;

	@Column(name="name" , length = 30, nullable = false)
	private String name;
	
	@Column(name="last_name_p", length = 30, nullable = false)
	private String last_name_p;
	
	@Column(name="last_name_m", length = 30, nullable = false)
	private String last_name_m;
	
	@Column(name="domicilio" , length = 250)
	private String domicilio;
	
	@Column(name="tel", length = 25)
	private String tel;
	
	@Column(name="sanctions")
	private Integer sanctions;
	
	@Column(name="sanc_money")
	private Integer sanc_money;

	public User() {}

	public User(long id, String name, String last_name_p, String last_name_m, String domicilio, String tel,
			Integer sanctions, Integer sanc_money) {
		super();
		this.id = id;
		this.name = name;
		this.last_name_p = last_name_p;
		this.last_name_m = last_name_m;
		this.domicilio = domicilio;
		this.tel = tel;
		this.sanctions = sanctions;
		this.sanc_money = sanc_money;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLast_name_p() {
		return last_name_p;
	}

	public void setLast_name_p(String last_name_p) {
		this.last_name_p = last_name_p;
	}

	public String getLast_name_m() {
		return last_name_m;
	}

	public void setLast_name_m(String last_name_m) {
		this.last_name_m = last_name_m;
	}

	public String getDomicilio() {
		return domicilio;
	}

	public void setDomicilio(String domicilio) {
		this.domicilio = domicilio;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public Integer getSanctions() {
		return sanctions;
	}

	public void setSanctions(Integer sanctions) {
		this.sanctions = sanctions;
	}

	public Integer getSanc_money() {
		return sanc_money;
	}

	public void setSanc_money(Integer sanc_money) {
		this.sanc_money = sanc_money;
	}
	
	
}
