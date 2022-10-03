package com.biblioteca.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.biblioteca.excepciones.ResourceNotFoundException;
import com.biblioteca.modelo.Book;
import com.biblioteca.modelo.User;
import com.biblioteca.repositorio.BookRepository;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins="http://localhost:4200")
public class BookController {
	@Autowired
	private BookRepository repositorio;
	
	@GetMapping("/books")
	public List<Book> listarTodosLosLibros(){
		return repositorio.findAll();
	}
	
	@PostMapping("/books")
	public Book guardarLibro(@RequestBody Book book) {
		return repositorio.save(book);
	}
	
    @DeleteMapping("/books/{id}")
    public void EliminarLibro(@PathVariable Long id){
    	repositorio.deleteById(id);
    }
    
	@GetMapping("/books/{id}")
	public ResponseEntity<Book> obtenerLibroPorId(@PathVariable Long id){
		Book b=repositorio.findById(id)
				.orElseThrow(()->new ResourceNotFoundException(("No existe el Libro con el Id: " + id)));
		return ResponseEntity.ok(b);
	}
	
	@PutMapping("/books/{id}")
	public ResponseEntity<Book> ActualizarUsuario(@PathVariable Long id,@RequestBody Book detalleLibro){
		Book b=repositorio.findById(id)
				.orElseThrow(()->new ResourceNotFoundException(("No existe el Libro con el Id: " + id)));
		b.setId(detalleLibro.getId());
		b.setTitle(detalleLibro.getTitle());
		b.setDate(detalleLibro.getDate());
		b.setAuthor(detalleLibro.getAuthor());
		b.setCategory(detalleLibro.getCategory());
		b.setEdit(detalleLibro.getEdit());
		b.setLang(detalleLibro.getLang());
		b.setDescription(detalleLibro.getDescription());
		b.setStock(detalleLibro.getStock());
		b.setAvailable(detalleLibro.getAvailable());
		
		Book libroActualizado=repositorio.save(b);
		return ResponseEntity.ok(libroActualizado);
	}
	
	@GetMapping("/booksSearch/{palabraClave}")
	public List<Book> buscarTodosLosLibros(@PathVariable String palabraClave){
		return repositorio.findByName(palabraClave);
	}
}
