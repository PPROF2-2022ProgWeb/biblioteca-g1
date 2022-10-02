package com.biblioteca.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "books")
public class Book {
	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id", nullable = false)
	private long id;
	  
	@Column(name="title" , length = 255, nullable = false)
	private String title;

	@Column(name="date" , length = 255, nullable = false)
	private String date;

	@Column(name="author" , length = 255, nullable = false)
	private String author;
	
	@Column(name="category" , length = 255, nullable = false)
	private String category;
	
	@Column(name="edit" , length = 255, nullable = false)
	private String edit;
	
	@Column(name="lang" , length = 255, nullable = false)
	private String lang;
	
	@Column(name="description" , length = 255, nullable = false)
	private String description;
	
	@Column(name="stock" , nullable = false)
	private int stock;
	
	@Column(name="available" , nullable = false)
	private int available;
	
	public Book() {}

	public Book(long id, String title, String date, String author, String category, String edit, String lang,
			String description, int stock, int available) {
		super();
		this.id = id;
		this.title = title;
		this.date = date;
		this.author = author;
		this.category = category;
		this.edit = edit;
		this.lang = lang;
		this.description = description;
		this.stock = stock;
		this.available = available;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getEdit() {
		return edit;
	}

	public void setEdit(String edit) {
		this.edit = edit;
	}

	public String getLang() {
		return lang;
	}

	public void setLang(String lang) {
		this.lang = lang;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public int getAvailable() {
		return available;
	}

	public void setAvailable(int available) {
		this.available = available;
	}
	
	
}
