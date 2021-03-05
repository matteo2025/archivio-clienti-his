package it.sirfin.archivioclienti.repository;

import it.sirfin.archivioclienti.model.Cliente;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArchivioClientiRepository extends JpaRepository<Cliente, Long> {

    List<Cliente> findByCodiceContainsOrIndirizzoContainsOrRagioneSocialeContains(String t, String m, String s);
}
