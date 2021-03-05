import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteDto } from './cliente-dto';
import { CriterioRicercaDto } from './criterio-ricerca-dto';
import { ListaClientiDto } from './lista-clienti-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cliente = new Cliente();
  clienti: Cliente[] = [];
  criterioRicerca = "";

  constructor(private http: HttpClient) {
    this.aggiorna(this.criterioRicerca);
  }

  aggiorna(criterio: string) {
    let criterioDto = new CriterioRicercaDto();
    criterioDto.string = criterio;

    if (criterio == "") {
      this.http.get<ListaClientiDto>("http://localhost:8080/aggiorna-lista")
        .subscribe(c => this.clienti = c.listaClienti);
    } else if (criterio != "") {
      this.http.post<ListaClientiDto>("http://localhost:8080/ricerca-clienti", criterioDto)
        .subscribe(r => this.clienti = r.listaClienti);
    } else {
      console.log("Errore criterio");
    }
  }

  inserisci() {
    // Preparazione dati da inviare al server
    let dto = new ClienteDto();
    dto.cliente = this.cliente;

    // Richiamiamo il servizio Rest
    this.http.post<ListaClientiDto>("http://localhost:8080/inserisci-cliente", dto)
      .subscribe(r =>
        this.clienti = r.listaClienti);

    // Pulizia campi
    this.cliente = new Cliente();
    this.criterioRicerca = "";
  }

  elimina(c: Cliente) {
    // Preparazione dati da inviare al server
    let dto = new ClienteDto();
    dto.cliente = c;

    // Richiamiamo il servizio Rest
    this.http.post<ListaClientiDto>("http://localhost:8080/elimina-cliente", dto)
      .subscribe(r => {
        this.clienti = r.listaClienti;
        this.aggiorna(this.criterioRicerca);
      });


  }

  search() {
    // Preparazione dati da inviare al server
    let critRicDto = new CriterioRicercaDto();
    critRicDto.string = this.criterioRicerca;

    // Richiamiamo il servizio Rest
    this.http.post<ListaClientiDto>("http://localhost:8080/ricerca-clienti", critRicDto)
      .subscribe(r => this.clienti = r.listaClienti);

  }

  seleziona() { }
  /*
    Da implementare
  */
}


