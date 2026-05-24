// permessi.js — Generato automaticamente dal verbale
// Classi Prime (1A-1L) e Seconde (2A-2I) — A.S. 2024/25
// ============================================================

const DOMINIO_SCUOLA = "panettipitagora.edu.it";

// Super admin: accesso completo a tutto + pannello admin
const SUPER_ADMIN_EMAILS = [
  // "alessandra.degaetano@panettipitagora.edu.it",
dirigente@panettipitagora.edu.it
];

// ============================================================
// DATABASE PERMESSI DOCENTI
// email formato: nome.cognome@panettipitagora.edu.it
//
// coordinatore: ["1A"] -> vede TUTTE le materie SOLO nella 1A
// coordinatore: []     -> docente normale, nessuna classe coordinata
// sostegno:     true   -> vede TUTTE le materie di TUTTE le sue classi
// superAdmin:   true   -> accesso totale + pannello admin
// ============================================================
const DB_DOCENTI = {
  "alessandra.degaetano@panettipitagora.edu.it": {
    nome: "Giorgio Adriana",
    classi: ["1A", "2A", "2E", "2I"],
    materie: ["INGLESE"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "adriana.pedone@panettipitagora.edu.it": {
    nome: "Pedone Adriana",
    classi: ["2E", "2G"],
    materie: ["CHIMICA"],
    coordinatore: ["2G"],
    sostegno: false,
    superAdmin: false
  },
  "agata.soldo@panettipitagora.edu.it": {
    nome: "Soldo Agata",
    classi: ["1E"],
    materie: ["ITALIANO", "STORIA"],
    coordinatore: ["1E"],
    sostegno: false,
    superAdmin: false
  },
  "alberto.borrelli@panettipitagora.edu.it": {
    nome: "Borrelli Alberto",
    classi: ["1C"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  
  "alfonso.giorgio@panettipitagora.edu.it": {
    nome: "Giorgio Alfonso",
    classi: ["1A", "1B", "2A", "2B"],
    materie: ["IRC"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "andrea.spadone@panettipitagora.edu.it": {
    nome: "Spadone Andrea",
    classi: ["1A", "2A"],
    materie: ["MATEMATICA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "andreina.putignano@panettipitagora.edu.it": {
    nome: "Putignano Andreina Valeria",
    classi: ["1F", "1H", "2D", "2G", "2H"],
    materie: ["INGLESE"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "anna.piccolo@panettipitagora.edu.it": {
    nome: "Piccolo Anna",
    classi: ["1A", "1B", "2A", "2B", "2I"],
    materie: ["DIRITTO"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "annagioia.cantore@panettipitagora.edu.it": {
    nome: "Cantore Anna Gioia",
    classi: ["2E"],
    materie: ["ITALIANO", "STORIA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "annamaria.loconsole@panettipitagora.edu.it": {
    nome: "Loconsole Annamaria",
    classi: ["1I"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "annamaria.noviello@panettipitagora.edu.it": {
    nome: "Noviello Annamaria",
    classi: ["2C", "2E", "2F"],
    materie: ["MATEMATICA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "annamaria.signorile@panettipitagora.edu.it": {
    nome: "Signorile Annamaria",
    classi: ["1G", "2G"],
    materie: ["ITALIANO", "STORIA"],
    coordinatore: ["1G"],
    sostegno: false,
    superAdmin: false
  },
  "annamariagrazia.pascazio@panettipitagora.edu.it": {
    nome: "Pascazio Anna Maria Grazia",
    classi: ["1A", "1B", "2A", "2I"],
    materie: ["TTRG"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "annarita.gabriele@panettipitagora.edu.it": {
    nome: "Gabriele Annarita",
    classi: ["1F", "1H"],
    materie: ["TECNOLOGIE INFORMATICHE"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "antonella.dilillo@panettipitagora.edu.it": {
    nome: "Di Lillo Antonella",
    classi: ["1E", "1G", "2G"],
    materie: ["CHIMICA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "antonella.pulito@panettipitagora.edu.it": {
    nome: "Pulito Antonella",
    classi: ["1G", "1H", "1I", "2H"],
    materie: ["GEOGRAFIA", "CHIMICA", "SCIENZE"],
    coordinatore: ["1H"],
    sostegno: false,
    superAdmin: false
  },
  "antonia.paradiso@panettipitagora.edu.it": {
    nome: "Paradiso Antonia",
    classi: ["1A", "1B", "2A", "2B"],
    materie: ["CHIMICA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "antonio.curci@panettipitagora.edu.it": {
    nome: "Curci Antonio",
    classi: ["1E"],
    materie: ["TECNOLOGIE INFORMATICHE"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "antonio.magaletti@panettipitagora.edu.it": {
    nome: "Magaletti Antonio",
    classi: ["1H", "2H"],
    materie: ["MATEMATICA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "antonio.mercurio@panettipitagora.edu.it": {
    nome: "Mercurio Antonio",
    classi: ["1F", "2F"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "antonio.mongelli@panettipitagora.edu.it": {
    nome: "Mongelli Antonio",
    classi: ["1C", "1D", "1F", "1G", "1H", "1I", "1L"],
    materie: ["TECNOLOGIE INFORMATICHE"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "antonio.piarulli@panettipitagora.edu.it": {
    nome: "Piarulli Antonio",
    classi: ["1L"],
    materie: ["MATEMATICA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "antonio.tortorelli@panettipitagora.edu.it": {
    nome: "Tortorelli Antonio",
    classi: ["2G"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "antoniomaria.scalioti@panettipitagora.edu.it": {
    nome: "Scalioti Antonio Maria",
    classi: ["1E", "2E", "2F"],
    materie: ["DIRITTO"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "antonioraffaele.iacovazzi@panettipitagora.edu.it": {
    nome: "Iacovazzi Antonio Raffaele",
    classi: ["1A", "1B"],
    materie: ["TECNOLOGIE INFORMATICHE"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "barbara.bellucci@panettipitagora.edu.it": {
    nome: "Bellucci Barbara",
    classi: ["1B", "2B"],
    materie: ["INGLESE"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "carmela.degiglio@panettipitagora.edu.it": {
    nome: "De Giglio Carmela",
    classi: ["1H", "1I", "2H"],
    materie: ["ITALIANO", "STORIA"],
    coordinatore: ["1I"],
    sostegno: false,
    superAdmin: false
  },
  "carmela.deluisi@panettipitagora.edu.it": {
    nome: "De Luisi Carmela",
    classi: ["1C", "1D", "1E", "1G", "1I", "2F"],
    materie: ["INGLESE"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "chiara.bolognese@panettipitagora.edu.it": {
    nome: "Bolognese Chiara",
    classi: ["2D"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "claudia.abundo@panettipitagora.edu.it": {
    nome: "Abundo Claudia",
    classi: ["1D", "1I", "2D"],
    materie: ["MATEMATICA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "claudio.damasco@panettipitagora.edu.it": {
    nome: "Damasco Claudio",
    classi: ["1B", "1C", "2B", "2C", "2D", "2E"],
    materie: ["SCIENZE MOTORIE"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "daniela.attolini@panettipitagora.edu.it": {
    nome: "Attolini Daniela",
    classi: ["1L"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "domenico.terrafino@panettipitagora.edu.it": {
    nome: "Terrafino Domenico",
    classi: ["1C", "1D", "1E", "1F", "1H", "2C", "2E", "2F", "2H"],
    materie: ["TTRG"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "emanuele.triggiani@panettipitagora.edu.it": {
    nome: "Triggiani Emanuele",
    classi: ["1E"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "flavia.bianconi@panettipitagora.edu.it": {
    nome: "Bianconi Flavia",
    classi: ["1F", "1G", "2G"],
    materie: ["DIRITTO"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "francesca.paternoster@panettipitagora.edu.it": {
    nome: "Paternoster Francesca",
    classi: ["1A", "1B", "1E", "1G", "1I", "2I"],
    materie: ["TECNOLOGIE INFORMATICHE"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "francesco.avellis@panettipitagora.edu.it": {
    nome: "Avellis Francesco",
    classi: ["1A", "1B", "1C", "1D", "1F", "1H", "1I", "1L", "2A", "2B", "2C", "2D", "2E", "2F", "2H"],
    materie: ["CHIMICA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "gabriella.cantalice@panettipitagora.edu.it": {
    nome: "Cantalice Gabriella",
    classi: ["1G"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "gabriella.princigalli@panettipitagora.edu.it": {
    nome: "Princigalli Gabriella",
    classi: ["1A", "1B", "1I", "2A", "2B", "2I"],
    materie: ["FISICA"],
    coordinatore: ["2A"],
    sostegno: false,
    superAdmin: false
  },
  "gemma.ricci@panettipitagora.edu.it": {
    nome: "Ricci Gemma",
    classi: ["2A"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "giacinto.giglio@panettipitagora.edu.it": {
    nome: "Giglio Giacinto",
    classi: ["1G", "1I", "2G"],
    materie: ["TTRG"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "giovanna.adamo@panettipitagora.edu.it": {
    nome: "Adamo Giovanna",
    classi: ["2D", "2F"],
    materie: ["CHIMICA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "giovannarosamaria.romito@panettipitagora.edu.it": {
    nome: "Romito Giovanna Rosa Maria",
    classi: ["1D"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "giuseppe.stefani@panettipitagora.edu.it": {
    nome: "Stefani Giuseppe",
    classi: ["1E", "1F", "1H", "2E", "2F"],
    materie: ["TTRG"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "giuseppina.montalto@panettipitagora.edu.it": {
    nome: "Montalto Giuseppina",
    classi: ["2E"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "grazia.dilonardo@panettipitagora.edu.it": {
    nome: "Dilonardo Grazia",
    classi: ["2C"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "grazia.mastromatteo@panettipitagora.edu.it": {
    nome: "Mastromatteo Grazia",
    classi: ["1B"],
    materie: ["MATEMATICA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "graziana.moro@panettipitagora.edu.it": {
    nome: "Moro Graziana",
    classi: ["1L"],
    materie: ["ITALIANO", "STORIA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "laura.romito@panettipitagora.edu.it": {
    nome: "Romito Laura",
    classi: ["1A", "2I"],
    materie: ["ITALIANO", "STORIA"],
    coordinatore: ["1A"],
    sostegno: false,
    superAdmin: false
  },
  "letizia.summo@panettipitagora.edu.it": {
    nome: "Summo Letizia",
    classi: ["1D", "1E"],
    materie: ["SCIENZE MOTORIE"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "lucia.livorti@panettipitagora.edu.it": {
    nome: "Livorti Lucia",
    classi: ["1L"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "lucia.marchese@panettipitagora.edu.it": {
    nome: "Marchese Lucia",
    classi: ["1E"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "lucia.mura@panettipitagora.edu.it": {
    nome: "Mura Lucia",
    classi: ["1H"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "luigi.altamura@panettipitagora.edu.it": {
    nome: "Altamura Luigi",
    classi: ["1I", "1L"],
    materie: ["SCIENZE MOTORIE"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "luigi.difranco@panettipitagora.edu.it": {
    nome: "Di Franco Luigi",
    classi: ["1F", "1G", "1H", "2F", "2G", "2H"],
    materie: ["SCIENZE MOTORIE"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "maddalena.lorusso@panettipitagora.edu.it": {
    nome: "Lorusso Maddalena",
    classi: ["1C", "1D", "2D"],
    materie: ["ITALIANO", "STORIA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "marco.barletta@panettipitagora.edu.it": {
    nome: "Barletta Marco",
    classi: ["1L", "2C"],
    materie: ["INGLESE"],
    coordinatore: ["1L"],
    sostegno: false,
    superAdmin: false
  },
  "marco.denora@panettipitagora.edu.it": {
    nome: "Denora Marco",
    classi: ["1E", "1G", "2G"],
    materie: ["MATEMATICA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "maria.raspatelli@panettipitagora.edu.it": {
    nome: "Raspatelli Maria",
    classi: ["1E", "2E", "2F"],
    materie: ["IRC"],
    coordinatore: ["2E"],
    sostegno: false,
    superAdmin: false
  },
  "maria.spizzico@panettipitagora.edu.it": {
    nome: "Spizzico Maria",
    classi: ["1H"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "marianna.pantaleo@panettipitagora.edu.it": {
    nome: "Pantaleo Marianna",
    classi: ["2A"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "maurizio.scarciglia@panettipitagora.edu.it": {
    nome: "Scarciglia Maurizio",
    classi: ["1C", "1D", "1E", "2C", "2D", "2E"],
    materie: ["FISICA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "michela.bonomo@panettipitagora.edu.it": {
    nome: "Bonomo Michela",
    classi: ["1A", "1B", "1L", "2A", "2B", "2I"],
    materie: ["SCIENZE", "GEOGRAFIA", "CHIMICA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "michele.lapresa@panettipitagora.edu.it": {
    nome: "Lapresa Michele",
    classi: ["1C", "1D", "1L"],
    materie: ["TECNOLOGIE INFORMATICHE"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "modesta.colucci@panettipitagora.edu.it": {
    nome: "Colucci Modesta",
    classi: ["1H", "1L", "2H"],
    materie: ["DIRITTO"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "monicaelena.bonatesta@panettipitagora.edu.it": {
    nome: "Bonatesta Monica Elena",
    classi: ["2E", "2F"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "nadia.salvatore@panettipitagora.edu.it": {
    nome: "Salvatore Nadia",
    classi: ["2D", "2E", "2F"],
    materie: [],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "olinda.cicolella@panettipitagora.edu.it": {
    nome: "Cicolella Olinda",
    classi: ["1B"],
    materie: ["ITALIANO", "STORIA"],
    coordinatore: ["1B"],
    sostegno: false,
    superAdmin: false
  },
  "paola.demarzo@panettipitagora.edu.it": {
    nome: "De Marzo Paola",
    classi: ["2A", "2B", "2I"],
    materie: ["ITALIANO", "STORIA"],
    coordinatore: ["2B"],
    sostegno: false,
    superAdmin: false
  },
  "pierluigi.romita@panettipitagora.edu.it": {
    nome: "Romita Pierluigi",
    classi: ["1A", "2A", "2I"],
    materie: ["SCIENZE MOTORIE"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "raffaele.palumbo@panettipitagora.edu.it": {
    nome: "Palumbo Raffaele",
    classi: ["2G"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "rita.monno@panettipitagora.edu.it": {
    nome: "Monno Rita",
    classi: ["1F", "2F"],
    materie: ["ITALIANO", "STORIA"],
    coordinatore: ["1F"],
    sostegno: false,
    superAdmin: false
  },
  "rosa.carpentieri@panettipitagora.edu.it": {
    nome: "Carpentieri Rosa",
    classi: ["1B", "2B"],
    materie: [],
    coordinatore: [],
    sostegno: true,
    superAdmin: false
  },
  "rosaria.intonti@panettipitagora.edu.it": {
    nome: "Intonti Rosaria Annalisa",
    classi: ["1F", "1G", "1H", "1L", "2F", "2G", "2H"],
    materie: ["FISICA"],
    coordinatore: ["2F"],
    sostegno: false,
    superAdmin: false
  },
  "azzurra.mazzotta@panettipitagora.edu.it": {
    nome: "Mazzotta Azzurra",
    classi: ["1A", "1B", "1C", "1D", "1E", "1F", "1G", "1H", "1I", "1L", "2A", "2B", "2C", "2D", "2E", "2F", "2G", "2H", "2I"],
    materie: ["FISICA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "rossella.traversa@panettipitagora.edu.it": {
    nome: "Traversa Rossella",
    classi: ["2C"],
    materie: ["ITALIANO", "STORIA"],
    coordinatore: ["2C"],
    sostegno: false,
    superAdmin: false
  },
  "sergio.santostasi@panettipitagora.edu.it": {
    nome: "Santostasi Sergio",
    classi: ["2C", "2H"],
    materie: [],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "sofia.rubino@panettipitagora.edu.it": {
    nome: "Rubino Sofia",
    classi: ["1C", "1D", "1L", "2C", "2D", "2H"],
    materie: ["TTRG"],
    coordinatore: ["1C"],
    sostegno: false,
    superAdmin: false
  },
  "stefania.manco@panettipitagora.edu.it": {
    nome: "Manco Stefania",
    classi: ["2B", "2I"],
    materie: ["MATEMATICA"],
    coordinatore: ["2I"],
    sostegno: false,
    superAdmin: false
  },
  "stefano.ricciardi@panettipitagora.edu.it": {
    nome: "Ricciardi Stefano",
    classi: ["1C", "1D", "1F", "1G", "1H", "1I", "1L", "2C", "2D", "2G", "2H", "2I"],
    materie: ["IRC"],
    coordinatore: ["1D"],
    sostegno: false,
    superAdmin: false
  },
  "teresa.resta@panettipitagora.edu.it": {
    nome: "Resta Teresa",
    classi: ["2H"],
    materie: [],
    coordinatore: ["2H"],
    sostegno: true,
    superAdmin: false
  },
  "tiziana.ciraci@panettipitagora.edu.it": {
    nome: "Ciraci Tiziana",
    classi: ["1C", "1D", "1I", "2C", "2D"],
    materie: ["DIRITTO"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "valeria.magrino@panettipitagora.edu.it": {
    nome: "Magrino Valeria",
    classi: ["1A", "1B", "1D", "1G", "1I", "1L", "2A", "2B", "2D", "2G", "2H", "2I"],
    materie: ["TTRG"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "vincenzo.tatulli@panettipitagora.edu.it": {
    nome: "Tatulli Vincenzo",
    classi: ["2A", "2B"],
    materie: ["TTRG"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "vita.magrone@panettipitagora.edu.it": {
    nome: "Magrone Vita",
    classi: ["1C", "1D", "1G", "2C", "2D"],
    materie: ["CHIMICA", "SCIENZE", "GEOGRAFIA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "vito.lamantia@panettipitagora.edu.it": {
    nome: "La Mantia Vito",
    classi: ["1E", "1F", "1L", "2E", "2F", "2G"],
    materie: ["CHIMICA", "SCIENZE", "GEOGRAFIA"],
    coordinatore: [],
    sostegno: false,
    superAdmin: false
  },
  "vito.leopardi@panettipitagora.edu.it": {
    nome: "Leopardi Vito",
    classi: ["1C", "1F"],
    materie: ["MATEMATICA"],
    coordinatore: ["1C"],
    sostegno: false,
    superAdmin: false
  }
};

// ============================================================
// FUNZIONE DI CONTROLLO ACCESSO
// ============================================================
// FUNZIONE DI CONTROLLO ACCESSO (Non modificare)
function getPermessiDocente(email, classeAttuale) {
  if (SUPER_ADMIN_EMAILS.includes(email)) {
    return { ok: true, superAdmin: true, coordinatore: true, sostegno: true, materie: [] };
  }

  const doc = DB_DOCENTI[email];

  if (!doc) return { ok: false, motivo: "account_non_configurato" };

  if (doc.superAdmin) {
    return { ok: true, superAdmin: true, coordinatore: true, sostegno: true, materie: [] };
  }

  if (!doc.classi.includes(classeAttuale)) {
    return { ok: false, motivo: "classe_non_autorizzata", classi: doc.classi };
  }

  // CONTROLLO COORDINATORE: è un array, verifichiamo se contiene la classe attuale
  const isCoordinatoreQui = Array.isArray(doc.coordinatore) && doc.coordinatore.includes(classeAttuale);

  return {
    ok: true,
    superAdmin: false,
    coordinatore: isCoordinatoreQui, 
    sostegno: doc.sostegno,           
    materie: doc.materie,             
    nome: doc.nome
  };
}
