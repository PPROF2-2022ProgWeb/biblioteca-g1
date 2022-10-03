package com.biblioteca.repositorio;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.biblioteca.modelo.User;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{

	@Query(value="SELECT * FROM Users WHERE name LIKE %?1%",nativeQuery = true)
	public List<User> findByNameLike(String palabraClave);
}
