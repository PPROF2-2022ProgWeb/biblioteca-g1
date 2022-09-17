package com.biblioteca.service;
import java.util.List;
import com.biblioteca.model.Users;

public interface UserService {
	// Get all
    List<Users> fetchUserList();
    
	// Create
    Users saveUser(Users user);
 
    // Update
    Users updateUser(Users user, Long id);
 
    // Delete
    void deleteUsertById(Long id);

}
