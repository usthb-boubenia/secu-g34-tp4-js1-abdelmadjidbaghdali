"use strict"; // (Vu dans le slide 51)

// ---------------------------------------------------------------------------
// F1 : Tableau Étudiants (affiche 3 étudiants simples)
// ---------------------------------------------------------------------------
// (Vu dans le slide 38 : Tableaux)
function f1() {
  const tabEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
  console.log(tabEtudiants[0]);
  console.log(tabEtudiants[1]);
  console.log(tabEtudiants[2]);
}

// ---------------------------------------------------------------------------
// F2 : Objet Étudiant (affiche un seul étudiant sous forme d'objet)
// ---------------------------------------------------------------------------
// (Vu dans le slide 72 : Objet JS)
function f2() {
  const etudiant = { nom: "John", prenom: "DOE", age: 30 };
  console.log(etudiant);
}

// ---------------------------------------------------------------------------
// F3 : Tableau d’objets Étudiants (affiche 3 objets sous forme textuelle)
// ---------------------------------------------------------------------------
// (Vu dans le slide 72 : Objet + Boucle for)
function f3() {
  const tabObjEtudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
  ];

  // afficher chaque étudiant sur une seule ligne sous forme "nom-prenom-age"
  for (let i = 0; i < tabObjEtudiants.length; i++) {
    console.log(
      tabObjEtudiants[i].nom +
        "-" +
        tabObjEtudiants[i].prenom +
        "-" +
        tabObjEtudiants[i].age
    );
  }
}
