
package it.sirfin.archivioclienti.controller;

import it.sirfin.archivioclienti.dto.ClienteDto;
import it.sirfin.archivioclienti.dto.CriterioRicercaDto;
import it.sirfin.archivioclienti.dto.ListaClientiDto;
import it.sirfin.archivioclienti.serice.ArchivioClientiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class ArchivioClientiController {
    
    @Autowired
    ArchivioClientiService archivioClientiService;
    
    @RequestMapping("/inserisci-cliente")
    @ResponseBody
    public ListaClientiDto inserisciCliente(@RequestBody ClienteDto clientDto){
        return archivioClientiService.inserisciContatto(clientDto.getCliente());
    }
    
    @RequestMapping("/elimina-cliente")
    @ResponseBody
    public ListaClientiDto eliminaCliente(@RequestBody ClienteDto clientDto){
        return archivioClientiService.cancellaCliente(clientDto.getCliente());
    }
    
    @RequestMapping("/ricerca-clienti")
    @ResponseBody
    public ListaClientiDto ricercaClienti(@RequestBody CriterioRicercaDto c){
        return archivioClientiService.ricerca(c.getString());
    }
    
    @RequestMapping("/aggiorna-lista")
    @ResponseBody
    public ListaClientiDto aggiornaListaClienti() {
        return archivioClientiService.aggiorna();
    }
    
}
