package it.sirfin.archivioclienti.service.impl;

import it.sirfin.archivioclienti.dto.ClienteDto;
import it.sirfin.archivioclienti.dto.ListaClientiDto;
import it.sirfin.archivioclienti.model.Cliente;
import it.sirfin.archivioclienti.repository.ArchivioClientiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import it.sirfin.archivioclienti.serice.ArchivioClientiService;
import java.util.List;

@Service
public class ArchivioClientiServiceImpl implements ArchivioClientiService {

    @Autowired
    ArchivioClientiRepository archivioClientiRepository;

    @Override
    public ListaClientiDto inserisciContatto(Cliente cliente) {
        archivioClientiRepository.save(cliente);
        return aggiorna();
    }

    @Override
    public ListaClientiDto aggiorna() {
      List<Cliente> lista = archivioClientiRepository.findAll();
      return new ListaClientiDto(lista);
             
    }

    @Override
    public ListaClientiDto cancellaCliente(Cliente cliente) {
        archivioClientiRepository.delete(cliente);
        return aggiorna();
    }
    
    

    
}
