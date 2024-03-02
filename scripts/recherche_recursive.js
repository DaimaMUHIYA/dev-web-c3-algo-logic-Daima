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