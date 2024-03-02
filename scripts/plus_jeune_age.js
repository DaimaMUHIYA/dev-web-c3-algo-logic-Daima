// Trouver le plus jeune/plus âgé
// Écrire une fonction qui trouve la personne la plus jeune et la plus âgée dans le tableau.
// ______________________________

const personnes = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 },
  { nom: "Charlie", age: 20 },
];

/**
   * Ex: Plus jeune : { nom: 'Charlie', age: 20 }
         Plus âgé : { nom: 'Bob', age: 30 }

   */

function personnePlusJeune(personnes) {
  let plusJeune = personnes[0];

  for (let i = 1; i < personnes.length; i++) {
    if (personnes[i].age < plusJeune.age) {
      plusJeune = personnes[i];
    }
  }

  return plusJeune;
}

function personnePlusAgee(personnes) {
  let plusAgee = personnes[0];

  for (let i = 1; i < personnes.length; i++) {
    if (personnes[i].age > plusAgee.age) {
      plusAgee = personnes[i];
    }
  }

  return plusAgee;
}

const plusAgee = personnePlusJeune(personnes);
const plusJeune = personnePlusAgee(personnes);

console.log("Plus jeune :", plusJeune);
console.log("Plus âgée :", plusAgee);
