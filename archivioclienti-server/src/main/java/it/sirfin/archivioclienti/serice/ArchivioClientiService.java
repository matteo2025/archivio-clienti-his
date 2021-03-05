
package it.sirfin.archivioclienti.serice;

import it.sirfin.archivioclienti.dto.ListaClientiDto;
import it.sirfin.archivioclienti.model.Cliente;

public interface ArchivioClientiService {
    
    ListaClientiDto inserisciContatto(Cliente cliente);
    
    ListaClientiDto aggiorna();
    
    ListaClientiDto cancellaCliente(Cliente cliente);
}
