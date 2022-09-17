package com.biblioteca.model;
import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "books")
@Data
@AllArgsConstructor
@NoArgsConstructor
/*@Getter
@Setter
@ToString*/
public class Books {

		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private long id;

		@Column(name = "author")
		private String author;
		
		@Column(name = "available")
		private Integer available;
		
		@Column(name = "category")
		private String category;
		
		@Column(name = "date")
		private String date;
		
		@Column(name = "description")
		private String description;
		
		@Column(name = "edit")
		private String edit;
		
		@Column(name = "lang")
		private String lang;
		
		@Column(name = "stock")
		private Integer stock;
		
		@Column(name = "title")
		private String title;

		
		//Getters and setters
		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getAuthor() {
			return author;
		}

		public void setAuthor(String author) {
			this.author = author;
		}

		public Integer getAvailable() {
			return available;
		}

		public void setAvailable(Integer available) {
			this.available = available;
		}

		public String getCategory() {
			return category;
		}

		public void setCategory(String category) {
			this.category = category;
		}

		public String getDate() {
			return date;
		}

		public void setDate(String date) {
			this.date = date;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
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

		public Integer getStock() {
			return stock;
		}

		public void setStock(Integer stock) {
			this.stock = stock;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}
		
		
}
