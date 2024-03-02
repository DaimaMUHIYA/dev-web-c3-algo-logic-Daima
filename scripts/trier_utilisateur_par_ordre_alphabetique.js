// Trier les utilisateurs par ordre alphabétique
// ________________________________

const listsDesPersonnes = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 },
  { nom: "Charlie", age: 20 },
];

function trierParNom(listsDesPersonnes) {
  return listsDesPersonnes.slice().sort((a, b) => a.nom.localeCompare(b.nom));
}

const personnesTrierParNom = trierParNom(listsDesPersonnes);
console.log(personnesTrierParNom);
