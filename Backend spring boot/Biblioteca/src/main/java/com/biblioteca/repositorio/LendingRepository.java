package com.biblioteca.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biblioteca.modelo.Lending;

public interface LendingRepository extends JpaRepository<Lending,Long>{

}
