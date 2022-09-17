package com.biblioteca.model;
import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "lendings")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Lendings {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "date_out")
	private String date_out;
	
	@Column(name = "date_return")
	private String date_return;
	
}
