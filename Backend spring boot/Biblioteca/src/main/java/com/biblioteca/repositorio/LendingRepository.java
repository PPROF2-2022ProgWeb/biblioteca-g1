package com.biblioteca.repositorio;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.biblioteca.modelo.Lending;

public interface LendingRepository extends JpaRepository<Lending,Long>{
	@Transactional(readOnly=true)
	@Query(value="SELECT * FROM lendings  WHERE user_id=?1 and book_id=?2",nativeQuery = true)
	Lending findByUserAndBook(int pCodigoUsuario, int pCodigoLibro);
	
}
