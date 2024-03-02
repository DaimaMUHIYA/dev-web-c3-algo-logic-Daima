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

function personnePlusAgee(personnes) {
  let plusAgee = personnes[0];

  for (let i = 1; i < personnes.length; i++) {
    if (personnes[i].age > plusAgee.age) {
      plusAgee = personnes[i];
    }
  }

  return plusAgee;
}

function personnePlusJeune(personnes) {
  let plusJeune = personnes[0];

  for (let i = 1; i < personnes.length; i++) {
    if (personnes[i].age < plusJeune.age) {
      plusJeune = personnes[i];
    }
  }

  return plusJeune;
}

const plusAgee = personnePlusAgee(personnes);
const plusJeune = personnePlusJeune(personnes);

console.log("La personne la plus âgée est :", plusAgee);
console.log("La personne la plus jeune est :", plusJeune);
