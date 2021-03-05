package it.sirfin.archivioclienti.dto;

import it.sirfin.archivioclienti.model.Cliente;

public class ClienteDto {

    private Cliente cliente;

    public ClienteDto(Cliente cliente) {
        this.cliente = cliente;
    }

    public ClienteDto() {
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    @Override
    public String toString() {
        return "ClienteDto{" + "cliente=" + cliente + '}';
    }

}
