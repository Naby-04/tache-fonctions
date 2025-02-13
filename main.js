// -------------déclaration des variables pour l'exo numero 1
const Form1 = document.getElementById("Form1");
const multiplication1 = document.getElementById("multiplication1");
const multiplication2 = document.getElementById("multiplication2");
const multiplicationresult = document.getElementById("multiplicationresult");
// -----------------------
// Affiche le résultat
function multiplie() {
  var resultat;
  // Récupère les valeurs des inputs
  var premierNombre = Number(multiplication1.value);
  var deuxiemeNombre = Number(multiplication2.value);

  // Calcule le résultat
  resultat = premierNombre * deuxiemeNombre;
  multiplicationresult.textContent = isNaN(resultat)
    ? "Veuillez entrer des nombres valides"
    : resultat;
}

// -------------déclaration des variables pour l'exo numero 2
const Form2 = document.getElementById("Form2");
const division1 = document.getElementById("division1");
const division2 = document.getElementById("division2");
const divisionResult = document.getElementById("divisionResult");
// -----------------------
Form2.addEventListener("input", function () {
  var resultat;
  // Récupère les valeurs des inputs
  var premierNombre = Number(division1.value);
  var deuxiemeNombre = Number(division2.value);

  // Calcule le résultat
  resultat = premierNombre / deuxiemeNombre;

  // Affiche le résultat
  divisionResult.textContent = isNaN(resultat)
    ? "Veuillez entrer des nombres valides"
    : resultat;
});

// -------------déclaration des variables pour l'exo numero 3
const Form3 = document.getElementById("Form3");
const factoriel = document.getElementById("factoriel");
const factorielResult = document.getElementById("factorielResult");
// -----------------------
Form3.addEventListener("input", function () {
  var resultat;
  // Récupère les valeurs des inputs
  var factorielNombre = Number(factoriel.value);

  // Calcule le résultat
  function factorielIteratif(n) {
    if (n < 0) {
      return "Le factoriel n'est pas défini pour les nombres négatifs.";
    }

    let resultat = 1; // Initialisation à 1
    for (let i = 1; i <= n; i++) {
      resultat *= i; // Multiplier successivement
    }
    return resultat;
  }

  resultat = factorielIteratif(factorielNombre);

  // Affiche le résultat
  factorielResult.textContent = isNaN(resultat)
    ? "Veuillez entrer des nombres valides"
    : resultat;
});

// -------------déclaration des variables pour l'exo numero 4
const Form4 = document.getElementById("Form4");
const modulo = document.getElementById("modulo");
const moduloResult = document.getElementById("moduloResult");
// -----------------------
Form4.addEventListener("input", function () {
  var resultat;
  // Récupère les valeurs des inputs
  var moduloNombre = Number(modulo.value);

  // Calcule le résultat
  resultat = moduloNombre % 4;

  // Affiche le résultat
  moduloResult.textContent = isNaN(resultat)
    ? "Veuillez entrer des nombres valides"
    : "Si l'on divise " + moduloNombre + " par 4, le reste est de " + resultat;
});

// -------------déclaration des variables pour l'exo numero 5
const Form5 = document.getElementById("Form5");
const notes = document.getElementById("notes");
const notesMoyenne = document.getElementById("notesMoyenne");
const elevesSupMoyenne = document.getElementById("elevesSupMoyenne");
// -----------------------
Form5.addEventListener("input", function () {
  var resultat;
  // Récupère les valeurs des inputs
  var notesEleves = notes.value.split(",").map(Number);

  // Calcule le résultat
  function moyenne(notesEleves) {
    let somme = 0;
    for (let i = 0; i < notesEleves.length; i++) {
      somme += notesEleves[i];
    }
    return somme / notesEleves.length;
  }

  function eleveSupMoyenne(notesEleves) {
    let moyenneNotes = moyenne(notesEleves);
    let elevesSup = 0;
    for (let i = 0; i < notesEleves.length; i++) {
      if (notesEleves[i] > moyenneNotes) {
        elevesSup++;
      }
    }
    return elevesSup;
  }

  resultat = moyenne(notesEleves);
  elevesSup = eleveSupMoyenne(notesEleves);

  // Affiche le résultat
  notesMoyenne.textContent = isNaN(resultat)
    ? "Veuillez entrer des nombres valides"
    : "La moyenne des notes est de " + resultat;
  elevesSupMoyenne.textContent = isNaN(elevesSup)
    ? "Veuillez entrer des nombres valides"
    : "Il y a " + elevesSup + " élèves ayant une note supérieure à la moyenne";
});
