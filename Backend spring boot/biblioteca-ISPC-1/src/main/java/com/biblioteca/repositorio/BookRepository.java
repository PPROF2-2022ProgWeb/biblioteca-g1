package com.biblioteca.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biblioteca.modelo.Book;

public interface BookRepository extends JpaRepository<Book,Long>{

}
