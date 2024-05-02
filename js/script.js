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

// Fonction pour rendre les dés invisibles
const rendreDesInvisibles = function () {
    const des = document.querySelectorAll('.leDe .leDeWrap div[class^="de"]');
    des.forEach(de => {
        de.style.display = 'none';
    });
}
// Fonction pour rendre les dés invisibles
const rendreDesBis_Invisibles = function () {
    const desBis = document.querySelectorAll('.leDeBis .leDeBisWrap div[class^="deBis"]');
    desBis.forEach(deBis => {
        deBis.style.display = 'none';
    });
}

// Fonction pour rendre le titre invisible
const rendreTitreInvisibles = function () {
    const titreJeuDe = document.getElementById('titreJeu');
    titreJeuDe.style.display = 'none';
}
// Fonction pour rendre le message invisible
const rendreMessageInvisiblesBis = function () {
    const messageDeWin = document.getElementById('winMessage');
    messageDeWin.style.display = 'none';
}

const winMsg = function (resultat, resultatBis) {
    const winerMsg = document.getElementById('winMessage');
    const resultatDiv = document.getElementById('resultat');
    const resultatDivBis = document.getElementById('resultatBis');

    if (resultat === resultatBis) {
        winerMsg.style.display = 'block';
        resultatDiv.style.color = 'red';
        resultatDiv.style.fontSize = '4rem';
        resultatDivBis.style.color = 'red';
        resultatDivBis.style.fontSize = '4rem';
    }
}

// Fonction pour afficher le résultat en HTML
const afficherResultatHTML = function () {
    // Rendre tous les dés invisibles au début
    rendreDesInvisibles();
    rendreDesBis_Invisibles();
    rendreMessageInvisiblesBis();
    rendreTitreInvisibles();

    const deVisible1 = document.querySelector('.leDe');
    deVisible1.style.display = 'block';

    const deVisible2 = document.querySelector('.leDeBis');
    deVisible2.style.display = 'block';

    const resultat = lancerDe();
    const resultatTexte = deTexte[resultat.toString()];

    // Afficher le résultat
    const resultatDiv = document.getElementById('resultat');
    resultatDiv.textContent = ` ${resultat} (${resultatTexte})`;
    resultatDiv.style.color = 'white';
    resultatDiv.style.fontSize = '2rem';

    // Afficher le dé correspondant au résultat
    const deVisible = document.querySelector('.leDe .leDeWrap .de' + resultat);
    deVisible.style.display = 'block';

    const resultatBis = lancerDe();
    const resultatTexteBis = deTexte[resultatBis.toString()];

    // Afficher le résultat
    const resultatDivBis = document.getElementById('resultatBis');
    resultatDivBis.textContent = ` ${resultatBis} (${resultatTexteBis})`;
    resultatDivBis.style.color = 'white';
    resultatDivBis.style.fontSize = '2rem';

    // Afficher le dé correspondant au résultat
    const deVisibleBis = document.querySelector('.leDeBis .leDeBisWrap .deBis' + resultatBis);
    deVisibleBis.style.display = 'block';

    winMsg(resultat, resultatBis);
}

const afficherDebisHTML = function () {
    afficherResultatHTML();
}

const afficherDeHTML = function () {
    // Rendre tous les dés invisibles au début
    rendreDesInvisibles();
    rendreDesBis_Invisibles();
    rendreMessageInvisiblesBis();
    rendreTitreInvisibles();


    const resultat = lancerDe();
    const resultatTexte = deTexte[resultat.toString()];

    document.querySelector('.leDeBis').hidden = true;
    document.getElementById('resultatBis').hidden = true;

    // Afficher le résultat
    const resultatDiv = document.getElementById('resultat');
    resultatDiv.textContent = ` ${resultat} (${resultatTexte})`;
    resultatDiv.style.color = 'white';
    resultatDiv.style.fontSize = '2rem';

    // Afficher le dé correspondant au résultat
    const deVisible = document.querySelector('.leDe .leDeWrap .de' + resultat);
    deVisible.style.display = 'block';
}

const resetHTML = function () {
    location.reload();
}

// Ajouter un gestionnaire d'événement pour le bouton
const bouton = document.getElementById('btChance');
bouton.addEventListener('click', afficherResultatHTML);

// afficher deux dés
const boutonChoix2 = document.getElementById('btnChoixDe2');
boutonChoix2.addEventListener('click', afficherDebisHTML);

// afficher un dé1
const boutonChoix1 = document.getElementById('btnChoixDe1');
boutonChoix1.addEventListener('click', afficherDeHTML);

const bouton2 = document.getElementById('btRecommence');
bouton2.addEventListener('click', resetHTML);





