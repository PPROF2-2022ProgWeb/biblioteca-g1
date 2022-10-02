package com.biblioteca.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "lendings")
public class Lending {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id", nullable = false)
	private long id;
	
	@ManyToOne
	@JoinColumn(name = "user_id",nullable=false)
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "book_id",nullable=false)
	private Book book;
	
	@Column(name="date_out" , length = 255, nullable = false)
	private String date_out;
	
	@Column(name="date_return" , length = 255, nullable = false)
	private String date_return;
}
