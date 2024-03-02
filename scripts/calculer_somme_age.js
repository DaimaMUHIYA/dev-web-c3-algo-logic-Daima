// Calculer la somme des âges
// Écrire une fonction qui calcule la somme de tous les âges dans le tableau.
// ________________________________

const listePersonnes = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 },
  { nom: "Charlie", age: 20 },
];
const ageMin = 25;

/**
 * Ex: Somme des âges : 75
 */

function sommeAges(listePersonnes, ageMin) {
  let somme = 0;

  listePersonnes.forEach((listePersonnes) => {
    if (listePersonnes.age >= ageMin) {
      somme += listePersonnes.age;
    }
  });

  return somme;
}

const sommeTotale = sommeAges(personnes, ageMin);
console.log(
  "La somme des âges des personnes ayant au moins " +
    ageMin +
    " ans est de : " +
    sommeTotale
);
