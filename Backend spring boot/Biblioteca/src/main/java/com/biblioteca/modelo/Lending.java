package com.biblioteca.modelo;

import javax.persistence.CascadeType;
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
	
	@ManyToOne(optional=false)
	@JoinColumn(name = "user_id")
	private User user;
	
	@ManyToOne(optional=false)
	@JoinColumn(name = "book_id")
	private Book book;
	
	@Column(name="date_out" , length = 255, nullable = false)
	private String date_out;
	
	@Column(name="date_return" , length = 255, nullable = false)
	private String date_return;

	public Lending(long id, User user, Book book, String date_out, String date_return) {
		super();
		this.id = id;
		this.user = user;
		this.book = book;
		this.date_out = date_out;
		this.date_return = date_return;
	}

	public Lending() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}

	public String getDate_out() {
		return date_out;
	}

	public void setDate_out(String date_out) {
		this.date_out = date_out;
	}

	public String getDate_return() {
		return date_return;
	}

	public void setDate_return(String date_return) {
		this.date_return = date_return;
	}
	
	
}
