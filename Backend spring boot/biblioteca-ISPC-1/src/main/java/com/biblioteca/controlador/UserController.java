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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.biblioteca.excepciones.ResourceNotFoundException;
import com.biblioteca.modelo.User;
import com.biblioteca.repositorio.UserRepository;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	@Autowired
	private UserRepository repositorio;
	
	@GetMapping("/users")
	public List<User> listarTodosLosUsuarios(){
		return repositorio.findAll();
	}
	/*
	@GetMapping("/usersname/{palabraClave}")
	public List<User> listarTodosLosUsuarios(@PathVariable String palabraClave){
		return repositorio.findByName(palabraClave);
	}
	*/

	
	@PostMapping("/users")
	public User guardarUsuario(@RequestBody User usuario) {
		return repositorio.save(usuario);
	}
	
	//Busca un usuario por Id
	@GetMapping("/users/{id}")
	public ResponseEntity<User> obtenerUsuarioPorId(@PathVariable Long id){
		User u=repositorio.findById(id)
				.orElseThrow(()->new ResourceNotFoundException(("No existe el Usuario con el Id: " + id)));
		return ResponseEntity.ok(u);
	}
	
	@PutMapping("/users/{id}")
	public ResponseEntity<User> ActualizarUsuario(@PathVariable Long id,@RequestBody User detalleUsuario){
		User u=repositorio.findById(id)
				.orElseThrow(()->new ResourceNotFoundException(("No existe el Usuario con el Id: " + id)));
		u.setName(detalleUsuario.getName());
		u.setLast_name_p(detalleUsuario.getLast_name_p());
		u.setLast_name_m(detalleUsuario.getLast_name_m());
		u.setDomicilio(detalleUsuario.getDomicilio());
		u.setTel(detalleUsuario.getTel());
		
		User usuarioActualizado=repositorio.save(u);
		return ResponseEntity.ok(usuarioActualizado);
	}
	
    @DeleteMapping("/users/{id}")
    public void EliminarUsuario(@PathVariable Long id){
    	repositorio.deleteById(id);
    }
}
