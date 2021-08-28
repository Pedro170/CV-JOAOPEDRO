package curriculo.com.curriculoDigital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import curriculo.com.curriculoDigital.model.Mensagens;

@Repository
public interface MensagensRepository extends JpaRepository<Mensagens, Long> {

}
