package com.biblioteca.model;
import javax.persistence.*;

import lombok.AllArgsConstructor;
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
@Getter
@Setter
@ToString
public class users {
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

}
