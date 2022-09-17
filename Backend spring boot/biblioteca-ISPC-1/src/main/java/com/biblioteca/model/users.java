package com.biblioteca.model;
import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
/*@Getter
@Setter
@ToString*/
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;
	
	@Column(name = "last_name_p")
	private String last_name_p;
	
	@Column(name = "last_name_m")
	private String last_name_m;
	
	@Column(name = "domicilio", nullable = true)
	private String domicilio;
	
	@Column(name = "tel", nullable = true)
	private String tel;
	
	@Column(name = "sanctions", nullable = true)
	private Integer sanctions;
	
	@Column(name = "sanc_money")
	private Integer sanc_money;

	
	//Getters and Setters
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
