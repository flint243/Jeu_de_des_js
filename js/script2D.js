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
const rendreMessageInvisible = function () {
    const messageDeWin = document.getElementById('winMessage');
    messageDeWin.style.display = 'none';
}

// Fonction pour rendre le message3 invisible
const rendreTripleWinInvisible = function () {
    const tripleWinMsg = document.getElementById('tripleWinMessage');
    tripleWinMsg.style.display = 'none';
}

//----------- concerver les ID dans le formulaire -----------------------//
if(localStorage.getItem('prenomA')){
    lancerDe();
    console.log('Joueur A actif')
}else if (localStorage.getItem('prenomB')){
    lancerDe();
    console.log('Joueur B actif')

}else{
    $("#btRetour2").css({'display':'block', 'height':'60px'})
    $("#pseudoManque").text("Vous devez saisir un nom pour jouer!").css({'backgroundColor':'white','color':'red', 'top':'0px', 'top':'35%', 'zIndex':'1000'});
    resultats2D_HTML() === false;

 }

 /*********************************************************** DEBUT LANCER DE DES ********************************************************** */

// Fonction pour afficher le résultat en HTMlocation.reload();L
const resultats2D_HTML = function () {
// Rendre tous les dés invisibles au début
    rendreDesInvisibles();
    rendreDesBis_Invisibles();
    rendreDesTrois_Invisibles();
    
    rendreTitreInvisibles();

    rendreTripleWinInvisible();
    rendreMessageInvisible();
    
    const deVisible1 = document.querySelector('.leDe');
    deVisible1.style.display = 'block';
    deVisible1.style.backgroundColor = 'white ';

    const resultat = lancerDe();
    const resultatTexte = deTexte[resultat.toString()];

    // Afficher le résultat
    const resultatDiv = document.getElementById('resultat');
    resultatDiv.textContent = ` ${resultat} (${resultatTexte})`;
    resultatDiv.style.color = 'white';
    resultatDiv.style.fontSize = '2rem';

    // Afficher le dé correspondant au résultat
    const pointsDeVisible = document.querySelector('.leDe .leDeWrap .de' + resultat);
    pointsDeVisible.style.display = 'block';

    //----------------------------- DES DEUX ----------------------------------------//
    const deVisible2 = document.querySelector('.leDeBis');
    deVisible2.style.display = 'block';
    deVisible2.style.backgroundColor = 'white ';

    const resultatBis = lancerDe();
    const resultatTexteBis = deTexte[resultatBis.toString()];

    // Afficher le résultat
    const resultatDivBis = document.getElementById('resultatBis');
    resultatDivBis.textContent = ` ${resultatBis} (${resultatTexteBis})`;
    resultatDivBis.style.color = 'white';
    resultatDivBis.style.fontSize = '2rem';

    // Afficher le dé correspondant au résultat
    const pointsDeVisibleBis = document.querySelector('.leDeBis .leDeBisWrap .deBis' + resultatBis);
    pointsDeVisibleBis.style.display = 'block';


/***************************************************************** */
    //const deVisible3 = document.querySelector('.leDeTrois');
    //deVisible3.style.display = 'none'

    //const resultatTrois = lancerDe();
   // const pointsDeVisibleTrois = document.querySelectorAll('.leDeTrois .leDeTroisWrap .deTrois' + resultatTrois);    
  //  pointsDeVisibleTrois.style.display = 'none';

    if (localStorage.getItem('DeNumero3')){
        console.log("dé 3 actif")
        //----------------------------- DES TROIS ----------------------------------------//
        const deVisible3 = document.querySelector('.leDeTrois');
        deVisible3.style.display = 'block';
        deVisible3.style.backgroundColor = 'white ';
    
    const resultatTrois = lancerDe();
    const resultatTexteTrois = deTexte[resultatTrois.toString()];

    // Afficher le résultat
    const resultatDivTrois = document.getElementById('resultatTrois');
    resultatDivTrois.textContent = ` ${resultatTrois} (${resultatTexteTrois})`;
    resultatDivTrois.style.color = 'white';
    resultatDivTrois.style.fontSize = '2rem';

    // Afficher le dé correspondant au résultat
    const pointsDeVisibleTrois = document.querySelector('.leDeTrois .leDeTroisWrap .deTrois' + resultatTrois);
    pointsDeVisibleTrois.style.display = 'block';
    }


/************************************************************ */
const winMsg1 = function (resultat, resultatBis) {
    const messageDeWin = document.getElementById('winMessage');
   const de = document.querySelector('.leDe');
    const deBis = document.querySelector('.leDeBis');

    if (resultat === resultatBis){
        messageDeWin.style.display = 'block';
        de.style.backgroundColor = 'red';
        deBis.style.backgroundColor = 'red';
    }
}
    if (resultat === resultatBis) {
        winMsg1(resultat, resultatBis);
    }
    


const winMsg2 = function (resultat, resultatTrois) {
    const messageDeWin = document.getElementById('winMessage');
    de = document.querySelector('.leDe');
    deTrois = document.querySelector('.leDeTrois');

    if (resultat === resultatTrois) {
        messageDeWin.style.display = 'block';
        de.style.backgroundColor = 'green';
        deTrois.style.backgroundColor = 'green';
    }
    }
    if (resultat == resultatTrois) {
        winMsg2(resultat, resultatTrois);
    }

    const winMsg3 = function (resultatBis, resultatTrois) {
        const winerMsg = document.getElementById('winMessage');
        deBis = document.querySelector('.leDeBis');
        deTrois = document.querySelector('.leDeTrois');
    
        if (resultatBis === resultatTrois) {
            winerMsg.style.display = 'block';
            deBis.style.backgroundColor = 'purple';
            deTrois.style.backgroundColor = 'purple';
        }
    }
    if (resultatBis === resultatTrois) {
        winMsg3(resultatBis, resultatTrois);
    }
}

/************************************************************* */

const resetHTML = function () {
    location.reload();
    $('#tuRecommences').text("Tu recommences?");
    //$('#bandeauInfosInt').css({'display':'none', 'color':'red'})
    
}

if(location.reload){
    if(localStorage.getItem('prenomA')){
        $('#bandeauInfosInt').text("Bonjour" + " " + localStorage.prenomA + ", le décompte débute dès ton premier clique!").css({'backgroundColor':'grey', 'padding': '10px'});
    }else if
    (localStorage.getItem('prenomB')){
        $('#bandeauInfosInt').text("Bonjour" + " " + localStorage.prenomB + ", le décompte débute dès ton premier clique!").css({'backgroundColor':'grey', 'padding': '10px'});
    }
}

const changeJoueurHTML = function () {
    location.reload();
    localStorage.clear();
}

const reglageHTML = function () {
    localStorage.removeItem('DeNumero2');
    localStorage.removeItem('DeNumero3');
}


let timer = 3; // Initialiser le timer à 60 secondes
let intervalId = null; // Déclarer une variable pour stocker l'ID de l'intervalle

if(localStorage.getItem('prenomA')){
    $('#bandeauInfosInt').text("Bonjour" + " " + localStorage.prenomA + ", le décompte débute dès ton premier clique!").css({'backgroundColor':'grey'});
}else if
(localStorage.getItem('prenomB')){
    $('#bandeauInfosInt').text("Bonjour" + " " + localStorage.prenomB + ", le décompte débute dès ton premier clique!").css({'backgroundColor':'grey'});
}

const diminuerTemps = function() {
    const seconde = document.getElementById('bandeauInfosInt');
    // Vérifier si un intervalle est déjà en cours
    if (intervalId === null) {
        intervalId = setInterval(() => {
            seconde.innerText ="Tu as " + `${timer}` + " secondes pour nous montrer que t'es un vrai joueur !";
            timer--;

            if (timer < 0) {
                clearInterval(intervalId);
                intervalId = null; // Réinitialiser l'ID de l'intervalle
                // Code à exécuter une fois que le compte à rebours est terminé
                $("#time_out").text("TIME OUT !")
                btnChance.style.display = 'none';
                btnFin.style.display = 'block';
            }
        }, 1000);
    }
};




// Écouter les clics sur le bouton pour démarrer le compte à rebours
document.getElementById('btChance').addEventListener('click', diminuerTemps);

// Ajouter un gestionnaire d'événement pour le bouton
const btnChance = document.getElementById('btChance');
btnChance.addEventListener('click', resultats2D_HTML);

const btnFin= document.getElementById('btFin');

const bouton2 = document.getElementById('btRecommence');
bouton2.addEventListener('click', resetHTML);

const btnChangeJoueur = document.getElementById('btChangerJoueur');
btnChangeJoueur.addEventListener('click', changeJoueurHTML);

const btnReglage = document.getElementById('btReglage');
btnReglage.addEventListener('click', reglageHTML);