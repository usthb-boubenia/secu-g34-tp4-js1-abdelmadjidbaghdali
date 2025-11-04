"use strict"; // Vu dans le slide 51 : activation du mode strict

// Vu dans le slide 67 : Fonction avec un paramètre et valeur de retour
function B(note) {
  if (note >= 10) { // Vu dans le slide 46 : Structure conditionnelle if / else
    return true;    // Vu dans le slide 67 : return d'une fonction
  } else {
    return false;
  }
}

// Vu dans le slide 68 : Appel d'une fonction depuis une autre
// Vu dans le slide 38 : Déclaration d'un tableau (Array)
// Vu dans le slide 39 : Tableau multidimensionnel (tableau de tableaux)
// Vu dans le slide 50 : Boucle for
// Vu dans le slide 72 : Affichage dans la console avec console.log()
function A() {
  const students = [  
    [1000, "JOHN", "DOE", 14, 5],
    [2000, "BOB", "CARLTON", 7, 1],
    [3000, "RAYANE", "SMITH", 13, 3]
  ];

  for (let i = 0; i < students.length; i++) { 
    const matricule = students[i][0]; // Vu dans le slide 40 : accès à un élément du tableau
    const note = students[i][3];      // Vu dans le slide 40 : indexation du tableau
    const resultat = B(note);         // Vu dans le slide 68 : Appel de fonction avec argument

    if (resultat) {
      console.log(matricule + " : Admis"); // Vu dans le slide 72 : console.log()
    } else {
      console.log(matricule + " : Ajourné");
    }
  }
}
