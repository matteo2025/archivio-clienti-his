package it.sirfin.archivioclienti.dto;

public class CriterioRicercaDto {
    private String string;

    public CriterioRicercaDto() {
    }

    public CriterioRicercaDto(String string) {
        this.string = string;
    }

    public String getString() {
        return string;
    }

    public void setString(String string) {
        this.string = string;
    }

    @Override
    public String toString() {
        return "CriterioRicercaDto{" + "string=" + string + '}';
    }
    
    
}
