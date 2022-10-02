package com.biblioteca.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.biblioteca.modelo.Lending;
import com.biblioteca.repositorio.LendingRepository;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins="http://localhost:4200")
public class LendingController {
	@Autowired
	private LendingRepository repositorio;
	
	@GetMapping("/lendings")
	public List<Lending> listarTodosLosPrestamos(){
		return repositorio.findAll();
	}
	
	@PostMapping("/lendings")
	public Lending guardarPrestamo(@RequestBody Lending leading) {
		return repositorio.save(leading);
	}
}
