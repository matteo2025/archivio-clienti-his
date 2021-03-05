package it.sirfin.archivioclienti.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cliente implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String indirizzo;
    @Column
    private String ragioneSociale;
    @Column
    private String codice;

    public Cliente() {
    }

    public Cliente(String indirizzo, String ragioneSociale, String codice) {
        this.indirizzo = indirizzo;
        this.ragioneSociale = ragioneSociale;
        this.codice = codice;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIndirizzo() {
        return indirizzo;
    }

    public void setIndirizzo(String indirizzo) {
        this.indirizzo = indirizzo;
    }

    public String getRagioneSociale() {
        return ragioneSociale;
    }

    public void setRagioneSociale(String ragioneSociale) {
        this.ragioneSociale = ragioneSociale;
    }

    public String getCodice() {
        return codice;
    }

    public void setCodice(String codice) {
        this.codice = codice;
    }

    @Override
    public String toString() {
        return "Cliente{" + "id=" + id + ", indirizzo=" + indirizzo + ", ragioneSociale=" + ragioneSociale + ", codice=" + codice + '}';
    }

}
