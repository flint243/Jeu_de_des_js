/*
// Fonction qui génère un nombre aléatoire
// Retourne le nombre
const lancerDe = function (){
    // Gérer un nombre entre 1 et 6
    const nombreDecimal = (Math.random() * 6) + 1
    const nombre = Math.trunc(nombreDecimal)
    // Retourner ce nombre
    return nombre
}

const deTexte = {
    '1': 'Un',
    '2': 'Deux',
    '3': 'Trois',
    '4': 'Quatre',
    '5': 'Cinq',
    '6': 'Six',
}


const affcherDe = {
    '1': 'de1',
}
let btn = document.getElementById('btChance');
 btn.addEventListener('click', () => {
affcherDe.style.display = "block";
})
// Afficher le résultat sous forme de nombre
// Afficher le résultat sous forme de texte
const resultat = lancerDe()
console.log(resultat + '(' + deTexte[resultat] + ')') 
*/

// Fonction qui génère un nombre aléatoire entre 1 et 6
// Retourne le nombre
const lancerDe = function () {
    // Gérer un nombre entre 1 et 6
    const nombreDecimal = Math.floor(Math.random() * 6) + 1;
    // Retourner ce nombre
    return nombreDecimal;
}

// Tableau associatif pour mapper les nombres à leur texte correspondant
const deTexte = {
    '1': 'Un',
    '2': 'Deux',
    '3': 'Trois',
    '4': 'Quatre',
    '5': 'Cinq',
    '6': 'Six',
}

// Fonction pour afficher le résultat en HTML
const afficherResultatHTML = function () {
    const resultat = lancerDe();
    const resultatTexte = deTexte[resultat.toString()];

    // Sélectionner l'élément où afficher le résultat
    const resultatContainer = document.getElementById('resultat');

    // Créer un paragraphe pour afficher le résultat en tant que nombre et texte
    const resultatParagraphe = document.createElement('p');
    resultatParagraphe.textContent = `${resultat} (${resultatTexte})`;

    // Ajouter le paragraphe au conteneur
    resultatContainer.appendChild(resultatParagraphe);
}

// Ajouter un gestionnaire d'événement pour le bouton
const bouton = document.getElementById('btChance');
bouton.addEventListener('click', afficherResultatHTML);
