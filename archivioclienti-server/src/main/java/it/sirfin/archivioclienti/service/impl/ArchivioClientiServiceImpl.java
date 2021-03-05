package it.sirfin.archivioclienti.service.impl;

import it.sirfin.archivioclienti.repository.ArchivioClientiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import it.sirfin.archivioclienti.serice.ArchivioClientiService;

@Service
public class ArchivioClientiServiceImpl implements ArchivioClientiService {

    @Autowired
    ArchivioClientiRepository archivioClientiRepository;

}
