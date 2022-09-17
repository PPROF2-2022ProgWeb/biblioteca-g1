package com.biblioteca.service;

import java.util.List;
import com.biblioteca.model.Books;


public interface BookService {
	// Get all
    List<Books> fetchBookList();
    
	// Create
    Books saveBook(Books book);
 
    // Update
    Books updateBook(Books book, Long id);
 
    // Delete
    void deleteBookById(Long id);

}
