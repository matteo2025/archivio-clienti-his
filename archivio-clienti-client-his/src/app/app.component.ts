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
  visButtConfAnn: boolean[] = [];
  stato = "";

  constructor(private http: HttpClient) {
    this.aggiorna(this.criterioRicerca);
  }

  aggiorna(criterio: string) {
    let criterioDto = new CriterioRicercaDto();
    criterioDto.string = criterio;

    if (criterio == "") {
      this.http.get<ListaClientiDto>("http://localhost:8080/aggiorna-lista")
        .subscribe(c => {
          this.clienti = c.listaClienti;
          this.inizializzaVisButtConfAnn();
        });
    } else if (criterio != "") {
      this.http.post<ListaClientiDto>("http://localhost:8080/ricerca-clienti", criterioDto)
        .subscribe(r => {
          this.clienti = r.listaClienti;
          this.inizializzaVisButtConfAnn();
        });
      this.inizializzaVisButtConfAnn();
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
      .subscribe(r => {
        this.clienti = r.listaClienti;
        this.inizializzaVisButtConfAnn();
      });

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
        this.inizializzaVisButtConfAnn();
      });


  }

  search() {
    // Preparazione dati da inviare al server
    let critRicDto = new CriterioRicercaDto();
    critRicDto.string = this.criterioRicerca;

    // Richiamiamo il servizio Rest
    this.http.post<ListaClientiDto>("http://localhost:8080/ricerca-clienti", critRicDto)
      .subscribe(r => {
        this.clienti = r.listaClienti;
        this.inizializzaVisButtConfAnn();
      });
  }

  seleziona(c: Cliente, i: number) {
    let clienteSelezionatoDto = new ClienteDto();
    clienteSelezionatoDto.cliente = c;
    this.http.post<ClienteDto>("http://localhost:8080/seleziona-cliente", clienteSelezionatoDto)
      .subscribe(c => {
        this.cliente = c.cliente;
        this.visButtConfAnn[i] = true;
        this.stato = "modifica";
      });
  }

  annullaModifica(i: number) {
    this.cliente = new Cliente();
    this.visButtConfAnn[i] = false;
    this.stato = "";
  }

  confermaModifica(i: number) {
    let clienteModDto = new ClienteDto();
    clienteModDto.cliente = this.cliente;
    this.http.post<ListaClientiDto>("http://localhost:8080/modifica-cliente", clienteModDto)
      .subscribe(lc => {
        this.clienti = lc.listaClienti;
        this.inizializzaVisButtConfAnn();
        this.stato = "";
      });
  }

  //questo metodo inizializza visButtConfAnn(array di booleani), che consente dopo aver
  //selezionato un campo di capire su quale riga si trova e di conseguenza attivare
  //i bottoni conferma modifica e annulla modifica solo per quella riga nella tabella
  //è inserito in tutte le subscribe che ritornano una lista di clienti in modo da rimanere
  //sempre aggiornato con la lista dopo ogni operazione di lettura lista clienti da DB
  inizializzaVisButtConfAnn() {
    this.visButtConfAnn = [];
    for (let i = 0; i < this.clienti.length; i++) {
      this.visButtConfAnn.push(false);
    }
  }
}


