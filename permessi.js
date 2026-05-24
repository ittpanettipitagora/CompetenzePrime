// permessi.js

// 1. DATABASE DELLE AUTORIZZAZIONI
const CONFIG_PERMESSI = {
  "1A": {
    // Inserisci qui l'email del coordinatore reale della 1A (che avrà tutto sbloccato)
    "coordinatore": "coordinatore.1a@panettipitagora.edu.it", 
    "docenti": {
      "alessandra.degaetano@panettipitagora.edu.it": ["ITALIANO", "STORIA"]
      // Esempio per aggiungere gli altri colleghi:
      // "mario.rossi@panettipitagora.edu.it": ["MATEMATICA", "TECNOLOGIE INFORMATICHE"],
      // "luigi.verdi@panettipitagora.edu.it": ["INGLESE"]
    }
  }
  // Se devi aggiungere la 1B, 1C, ecc., ti basterà copiare il blocco "1A" qui sotto
};


// 2. FUNZIONE GLOBALE DI CONTROLLO ACCESSO (Non modificare)
function controllaEApplicaPermessi(classeSelezionata, emailUtente) {
  const configClasse = CONFIG_PERMESSI[classeSelezionata];

  // Se la classe non esiste nel database permessi, blocca l'accesso
  if (!configClasse) {
    alert("Errore: Configurazione permessi non trovata per la classe " + classeSelezionata);
    window.location.href = "index.html";
    return null;
  }

  // Verifica dei ruoli
  const eCoordinatore = (configClasse.coordinatore === emailUtente);
  const materieAssegnate = configClasse.docenti[emailUtente] || [];
  const eDocenteDellaClasse = materieAssegnate.length > 0;

  // L'utente non è né coordinatore né docente registrato per questa classe
  if (!eCoordinatore && !eDocenteDellaClasse) {
    alert("Accesso Negato: Non fai parte del Consiglio di Classe della " + classeSelezionata);
    window.location.href = "index.html"; 
    return null;
  }

  // Restituisce le autorizzazioni alla pagina HTML
  return {
    isCoordinatore: eCoordinatore,
    materieAbilitate: materieAssegnate 
  };
}