package com.biblioteca.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.biblioteca.model.Users;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long>{
	//List user like name
	/*@Query(value = "select u from  Users u where u.name like  %?1% ") 
	List<Users> findUserLikeByPage(String name);*/
	
	List<Users> findByName(String name);
}
