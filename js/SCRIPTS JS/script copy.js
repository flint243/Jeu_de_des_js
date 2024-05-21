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
    const de = document.querySelectorAll('.leDe .leDeWrap div[class^="de"]');
    de.forEach(de => {
        de.style.display = 'none';
    });
}
// Fonction pour rendre les dés2 invisibles
const rendreDesBis_Invisibles = function () {
    const desBis = document.querySelectorAll('.leDeBis .leDeBisWrap div[class^="deBis"]');
    desBis.forEach(deBis => {
        deBis.style.display = 'none';
    });
}

// Fonction pour rendre les dés3 invisibles
const rendreDesTrois_Invisibles = function () {
    const desTrois = document.querySelectorAll('.leDeTrois .leDeTroisWrap div[class^="deTrois"]');
    desTrois.forEach(deTrois => {
        deTrois.style.display = 'none';
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
// Fonction pour rendre le message3 invisible
const rendreMessageInvisiblesTrois = function () {
    const messageDeWin = document.getElementById('winMessage');
    messageDeWin.style.display = 'none';
}

// Fonction pour rendre le message3 invisible
const rendreTripleWinInvisible = function () {
    const tripleWinMsg = document.getElementById('tripleWinMessage');
    tripleWinMsg.style.display = 'none';
}

const winMsg = function (deVisible, deVisibleBis) {
    const winerMsg = document.getElementById('winMessage');
    const de = document.querySelector('.leDe');
    const deBis = document.querySelector('.leDeBis');
    //const deTrois = document.querySelector('.leDeTrois');

    if (deVisibleBis === deVisible) {
        winerMsg.style.display = 'block';
        deBis.style.backgroundColor = 'red';
        de.style.backgroundColor = 'red';
    } 
}

/*
const winMsg2 = function (resultat, resultatTrois) {
    const winerMsg = document.getElementById('winMessage');
    const de = document.querySelector('.leDe');
    //const deBis = document.querySelector('.leDeBis');
    const deTrois = document.querySelector('.leDeTrois');

    if (resultat === resultatTrois) {
        winerMsg.style.display = 'block';
        de.style.backgroundColor = 'red ';
        deTrois.style.backgroundColor = 'red';
    }
}

const winMsg3 = function (resultatBis, resultatTrois) {
    const winerMsg = document.getElementById('winMessage');
    //const de = document.querySelector('.leDe');
    const deBis = document.querySelector('.leDeBis');
    const deTrois = document.querySelector('.leDeTrois');

    if (resultatBis === resultatTrois) {
        winerMsg.style.display = 'block';
        deBis.style.backgroundColor = 'red ';
        deTrois.style.backgroundColor = 'red';
    }
}
*/


/*
const tripleWinMsg = function (resultat, resultatBis, resultatTrois) {
    const tripleWinMsg = document.getElementById('tripleWinMessage');
    const deVisible1 = document.querySelector('.leDe');
    const deVisible2 = document.querySelector('.leDeBis');
    const deVisible3 = document.querySelector('.leDeTrois');

    if (resultat === resultatBis && resultat  === resultatTrois && resultatBis === resultatTrois){
        tripleWinMsg.style.display = 'block';

        deVisible1.style.backgroundColor = 'red';
        deVisible2.style.backgroundColor = 'red';
        deVisible3.style.backgroundColor = 'red';
    }
}
*/
// Fonction pour afficher le résultat en HTMlocation.reload();L
const afficherResultatHTML = function () {
    // Rendre tous les dés invisibles au début
    rendreDesInvisibles();
    rendreDesBis_Invisibles();
    rendreDesTrois_Invisibles();
    rendreTripleWinInvisible();
    rendreMessageInvisiblesBis();
    rendreMessageInvisiblesTrois();
    rendreTitreInvisibles();

    const deVisible1 = document.querySelector('.leDe');
    deVisible1.style.display = 'block';
    deVisible1.style.backgroundColor = 'white ';

    const deVisible2 = document.querySelector('.leDeBis');
    deVisible2.style.display = 'block';
    deVisible2.style.backgroundColor = 'white ';

    const deVisible3 = document.querySelector('.leDeTrois');
    deVisible3.style.display = 'block';
    deVisible3.style.backgroundColor = 'white ';

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
    //deVisible.style.backgroundColor = 'black';

    //----------------------------------------------------------------------//
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


    const resultatTrois = lancerDe();
    const resultatTexteTrois = deTexte[resultatTrois.toString()];

    // Afficher le résultat
    const resultatDivTrois = document.getElementById('resultatTrois');
    resultatDivTrois.textContent = ` ${resultatTrois} (${resultatTexteTrois})`;
    resultatDivTrois.style.color = 'white';
    resultatDivTrois.style.fontSize = '2rem';

    // Afficher le dé correspondant au résultat
    const deVisibleTrois = document.querySelector('.leDeTrois .leDeTroisWrap .deTrois' + resultatTrois);
    deVisibleTrois.style.display = 'block';

    if (resultat === resultatBis) {
        winMsg(resultat, resultatBis);
    }
    /*
    if (resultat === resultatTrois) {
        winMsg(resultat, resultatTrois);
    }
/*
    if (deVisibleBis && resultat === resultatBis) {
        winMsg2(resultat, resultatBis);
    }
    if (deVisibleBis && resultatBis === resultatTrois) {
        winMsg2(resultatBis, resultatTrois);
    }

    if (deVisibleTrois && resultat === resultatTrois) {
        winMsg3(resultat, resultatTrois);
    }
    if (deVisibleTrois && resultatBis === resultatTrois) {
        winMsg3(resultatBis, resultatTrois);
    }
    */
}

/************************************************************* */

const resetHTML = function () {
    location.reload();
}

// Ajouter un gestionnaire d'événement pour le bouton
const bouton = document.getElementById('btChance');
bouton.addEventListener('click', afficherResultatHTML);

/*
// afficher deux dés
const boutonChoix2 = document.getElementById('btnChoixDe2');
boutonChoix2.addEventListener('click', afficherResultat2DesHTML);

// afficher un dé3
const boutonChoix3 = document.getElementById('btnChoixDe3');
boutonChoix3.addEventListener('click', afficherResultat3DesHTML);
*/
const bouton2 = document.getElementById('btRecommence');
bouton2.addEventListener('click', resetHTML);





