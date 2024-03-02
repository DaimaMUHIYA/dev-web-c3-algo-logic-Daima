// Filtrer les utilisateurs par âge
// Écrire une fonction qui filtre les personnes dont l'âge est supérieur à une certaine valeur donnée.
// ________________________________

const utilisateurs = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 },
  { nom: "Charlie", age: 20 },
];
const ageMinimum = 25;

/**
 * Ex : Utilisateurs de 25 ans et plus : [{ nom: 'Alice', age: 25 }, { nom: 'Bob', age: 30 }]
 */

function filtre(utilisateurs, ageMinimum) {
  return utilisateurs.filter((utilisateurs) => utilisateurs.age > ageMinimum);
}

const utilisateursFiltres = filtre(utilisateurs, ageMinimum);
console.log(utilisateursFiltres);
