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
@Getter
@Setter
@ToString
public class books {

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
		
}
