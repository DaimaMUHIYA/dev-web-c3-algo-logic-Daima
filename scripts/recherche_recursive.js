// Recherche récursive  :
// Écrire une fonction récursive qui recherche un élément spécifique dans cette structure et retourne son chemin ou sa position.
// ________________________________

const structure = {
  nom: 'A',
  enfants: [
    {
      nom: 'B',
      enfants: [
        { nom: 'C', enfants: [] },
        { nom: 'D', enfants: [] }
      ]
    },
    { nom: 'E', enfants: [] }
  ]
};
const recherche = 'D';


/**
 * Ex : [0, 1] (ce qui signifie que 'D' se trouve dans la première branche à l'indice 0, puis dans la deuxième branche à l'indice 1)
 */

function rechercherElement(structure, recherche, chemin = []) {
  if (structure.nom === recherche) {
    return chemin.concat(structure.nom);
  }

  for (let i = 0; i < structure.enfants.length; i++) {
    const resultat = rechercherElement(
      structure.enfants[i],
      recherche,
      chemin.concat(structure.nom)
    );
    if (resultat) {
      return resultat;
    }
  }

  return null;
}

const cheminElement = rechercherElement(structure, recherche);

if (cheminElement) {
  console.log(
    `Le chemin de l'élément "${recherche}" est : ${cheminElement.join(" -> ")}`
  );
} else {
  console.log(`L'élément "${recherche}" n'a pas été trouvé dans la structure.`);
}