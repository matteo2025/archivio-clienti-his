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

  constructor(private http: HttpClient) { }

  inserisci() {
    let dto = new ClienteDto();
    dto.cliente = this.cliente;
    let ox = this.http.post<ListaClientiDto>("http://localhost:8080/inserisci", dto);
    ox.subscribe(r =>
      this.clienti = r.clienti);
    this.cliente = new Cliente();
    this.criterioRicerca = "";
  }

  elimina(c: Cliente) {
    let dto = new ClienteDto();
    dto.cliente = c;
    let ox = this.http.post<ListaClientiDto>("http://localhost:8080/elimina-cliente", dto);
    ox.subscribe(r =>
      this.clienti = r.clienti);

  }

  search() {
    let critRicDto = new CriterioRicercaDto();
    critRicDto.string = this.criterioRicerca;
    this.http.post<ListaClientiDto>("http://localhost:8080/ricerca", critRicDto)
      .subscribe(r => this.clienti = r.clienti);
  }

  seleziona() { }

}


