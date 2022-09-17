package com.biblioteca.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.biblioteca.model.users;
import java.util.List;

public interface usersRepository extends JpaRepository<users, Long>{
	List<users> findByName(String name);
}
