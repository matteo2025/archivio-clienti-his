
package it.sirfin.archivioclienti.dto;

import it.sirfin.archivioclienti.model.Cliente;
import java.util.List;

public class ListaClientiDto {
    
    private List<Cliente> clienti;

    public ListaClientiDto() {
    }

    public ListaClientiDto(List<Cliente> clienti) {
        this.clienti = clienti;
    }

    public List<Cliente> getClienti() {
        return clienti;
    }

    public void setClienti(List<Cliente> clienti) {
        this.clienti = clienti;
    }

    @Override
    public String toString() {
        return "ListaClientiDto{" + "clienti=" + clienti + '}';
    }
    
    
}
