
package it.sirfin.archivioclienti.dto;

import it.sirfin.archivioclienti.model.Cliente;
import java.util.List;

public class ListaClientiDto {
    
    private List<Cliente> listaClienti;

    public ListaClientiDto() {
    }

    public ListaClientiDto(List<Cliente> clienti) {
        this.listaClienti = clienti;
    }

    public List<Cliente> getListaClienti() {
        return listaClienti;
    }

    public void setListaClienti(List<Cliente> listaClienti) {
        this.listaClienti = listaClienti;
    }

    @Override
    public String toString() {
        return "ListaClientiDto{" + "clienti=" + listaClienti + '}';
    }
    
    
}
