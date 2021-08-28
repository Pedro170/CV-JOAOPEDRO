package curriculo.com.curriculoDigital.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import curriculo.com.curriculoDigital.model.Mensagens;
import curriculo.com.curriculoDigital.repository.MensagensRepository;

@RestController
@RequestMapping("/mensagens")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MensagemController {
	@Autowired
	private MensagensRepository repository;
	
	@PostMapping
	public ResponseEntity<Mensagens> post (@RequestBody Mensagens mensagens){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(repository.save(mensagens));
	}

}
