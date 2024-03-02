// Trouver les doublons
// Écrire une fonction qui trouve et retourne les objets en double dans le tableau en se basant sur cette propriété identificatrice.
// ________________________________

const elements = [
  { id: 1, nom: "Alice" },
  { id: 2, nom: "Bob" },
  { id: 3, nom: "Alice" },
];

/**
 * Ex : [{ id: 3, nom: 'Alice' }]
 */

function trouverDoublons(elements) {
  const doublons = [];
  const seen = {};

  elements.forEach((element) => {
    if (seen.hasOwnProperty(element.nom)) {
      if (!doublons.some((doublon) => doublon.nom === element.nom)) {
        doublons.push(element);
      }
    } else {
      seen[element.nom] = true;
    }
  });

  return doublons;
}

const objetsEnDouble = trouverDoublons(elements);
console.log(objetsEnDouble);
