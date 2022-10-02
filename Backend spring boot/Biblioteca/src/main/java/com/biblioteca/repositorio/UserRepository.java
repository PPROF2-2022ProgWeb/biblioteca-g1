package com.biblioteca.repositorio;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.biblioteca.modelo.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{

	//@Query("SELECT u FROM Users u WHERE u.name LIKE %?1%")
	//public List<User> findByName(String palabraClave);
}
