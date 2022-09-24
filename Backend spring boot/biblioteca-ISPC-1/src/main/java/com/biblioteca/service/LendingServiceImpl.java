package com.biblioteca.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.biblioteca.model.Books;
import com.biblioteca.model.Lendings;
import com.biblioteca.repository.LendingsRepository;


@Service
public class LendingServiceImpl implements LendingService{
	@Autowired
    private LendingsRepository lendingsRepository;
 
	// Get all
    @Override 
    public List<Lendings> fetchLendingList()
    {
        return (List<Lendings>) lendingsRepository.findAll();
    }
    
    // Create
    @Override
    public Lendings saveLending(Lendings lending)
    {
        return lendingsRepository.save(lending);
    }
    
    // Update
    @Override
    public Lendings updateLending(Lendings lending, Long id)
    {
        Lendings lendDB = lendingsRepository.findById(id).get();
 
        if (Objects.nonNull(lending.getBooks_id()) && !"".equalsIgnoreCase(lending.getBooks_id())) {
        	lendDB.setBooks_id(lending.getBooks_id());
        }
        if (Objects.nonNull(lending.getUsers_id()) && !"".equalsIgnoreCase(lending.getUsers_id())) {
        	lendDB.setUsers_id(lending.getUsers_id());
        }
        if (Objects.nonNull(lending.getDate_out()) && !"".equalsIgnoreCase(lending.getDate_out())) {
        	lendDB.setDate_out(lending.getDate_out());
        }
        if (Objects.nonNull(lending.getDate_return()) && !"".equalsIgnoreCase(lending.getDate_return())) {
        	lendDB.setDate_return(lending.getDate_return());
        }
        
 
        return lendingsRepository.save(lendDB);
    }
    
    // Delete
    @Override
    public void deleteLendingById(Long id)
    {
    	lendingsRepository.deleteById(id);	
    }

}
