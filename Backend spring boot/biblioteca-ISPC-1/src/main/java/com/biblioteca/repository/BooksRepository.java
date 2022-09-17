package com.biblioteca.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.biblioteca.model.Books;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksRepository extends JpaRepository<Books, Long>{

}
