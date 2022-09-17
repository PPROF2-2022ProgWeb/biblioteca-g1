package com.biblioteca.controller;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.biblioteca.model.Users;
import com.biblioteca.service.UserService;

@CrossOrigin(origins = "http://localhost:3306")
@RestController
@RequestMapping("/api")
public class UsersController {
	
	@Autowired
	private UserService usersService;
	
	// Get all 
    @GetMapping("/users")
    public List<Users> fetchUserList()
    {
        return usersService.fetchUserList();
    }
    
    // Create
    @PostMapping("/user")
    public Users saveUser(@RequestBody Users user)
    {
        return usersService.saveUser(user);
    }
    
    // Update
    @PutMapping("/user/{id}")
    public Users updateUser(
    		@RequestBody Users user,
            @PathVariable("id") Long id)
    {
        return usersService.updateUser(user, id);
    }
 
    // Delete
    @DeleteMapping("/user/{id}")
    public String deleteUserById(@PathVariable("id") Long id)
    {
    	usersService.deleteUsertById(id);
        return "Deleted Successfully";
    }
}
