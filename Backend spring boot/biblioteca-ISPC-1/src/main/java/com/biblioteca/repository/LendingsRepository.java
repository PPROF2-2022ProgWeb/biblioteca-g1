package com.biblioteca.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.biblioteca.model.Lendings;


@Repository
public interface LendingsRepository extends JpaRepository<Lendings, Long> {

}
