package com.biblioteca.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.biblioteca.model.Users;
import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long>{
}
