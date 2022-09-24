package com.biblioteca.service;

import java.util.List;

import com.biblioteca.model.Lendings;
import com.biblioteca.model.Users;

public interface LendingService {
	// Get all
    List<Lendings> fetchLendingList();
    
	// Create
    Lendings saveLending(Lendings lending);
 
    // Update
    Lendings updateLending(Lendings lending, Long id);
 
    // Delete
    void deleteLendingById(Long id);
}
