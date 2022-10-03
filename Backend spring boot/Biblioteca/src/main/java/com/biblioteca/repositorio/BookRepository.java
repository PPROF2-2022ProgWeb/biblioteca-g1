package com.biblioteca.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.biblioteca.modelo.Book;
import com.biblioteca.modelo.User;

public interface BookRepository extends JpaRepository<Book,Long>{
	
	@Query(value="SELECT * FROM books WHERE title LIKE %?1%",nativeQuery = true)
	public List<Book> findByName(String palabraClave);
}
