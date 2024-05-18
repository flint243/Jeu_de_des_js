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
   if (sessionStorage.getItem('prenomA')){
    $('#joueurA').val(sessionStorage.getItem('prenomA'));

    console.log('Joueur A présent');
 }

 

// Fonction pour afficher le résultat en HTMlocation.reload();L
const afficherResultatHTML = function () {
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

    const deVisible2 = document.querySelector('.leDeBis');
    deVisible2.style.display = 'block';
    deVisible2.style.backgroundColor = 'white ';

    if (sessionStorage.getItem('DeNumero2')){
        rendreDesTrois_Invisibles();
    
        const deVisible3 = document.querySelector('.leDeTrois');
        deVisible3.style.display = 'none';
        const resultatDivTrois = document.getElementById('resultatTrois');
        resultatDivTrois.style.display = 'none';

        diminuerTemps();
        
        console.log('Dé N°2 présent');

     }else{
    const deVisible3 = document.querySelector('.leDeTrois');
    deVisible3.style.display = 'block';
    deVisible3.style.backgroundColor = 'white ';
     }
     if(!sessionStorage.getItem('prenomA')){
        //alert("Veuillez saisir un joueur valide !")
        $("#pseudoManque").text("Vous devez saisir un nom pour jouer!  Vous allez etre rediriger...").css({'backgroundColor':'brown', 'top':'0px'});

        setTimeout(function(){
        location.href="ChoixJoueurs.html";
        }, 4000);
     }

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
/*
    //----------------------------- DES TROIS ----------------------------------------//
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
*/
/*****************************************************
const winMsg4 = function (resultat, resultatBis, resultatTrois) {
    const tripleWinMessage = document.getElementById('tripleWinMessage');
     const de = document.querySelector('.leDe');
     const deBis = document.querySelector('.leDeBis');
     const deTrois = document.querySelector('.leDeTrois');

    if (de && deBis === resultatTrois) {
            tripleWinMessage.style.display = 'block';
            de.style.backgroundColor = 'orange ';
            deBis.style.backgroundColor = 'orange';
            deTrois.style.backgroundColor = 'orange';
            messageDeWin.style.display = 'none';
            resultatTrois = false;
        }
    }

    if (resultat === resultatBis === resultatTrois) {
        winMsg4(resultat, resultatBis, resultatTrois);
    }


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
    if (resultat === resultatBis && resultat  === resultatTrois && resultatBis === resultatTrois) {
        tripleWinMsg(resultat, resultatBis, resultatTrois);
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
    

/*
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
*/









/*

const deuxDesHTML = function () {

    // Rendre tous les dés invisibles au début
    rendreDesInvisibles();
    rendreDesBis_Invisibles();
    rendreDesTrois_Invisibles();

    rendreTitreInvisibles();
    rendreTripleWinInvisible();

    rendreMessageInvisiblesBis();
    rendreMessageInvisiblesTrois();
    
    const deVisible1 = document.querySelector('.leDe');
    deVisible1.style.display = 'block';
    deVisible1.style.backgroundColor = 'white ';

    const deVisible2 = document.querySelector('.leDeBis');
    deVisible2.style.display = 'block';
    deVisible2.style.backgroundColor = 'white ';

    const deVisible3 = document.querySelector('.leDeTrois');
    deVisible3.style.display = 'none';

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
}
*/

}
/************************************************************* */
const resetHTML = function () {
    //sessionStorage.clear();

    $('#tuRecommences').text("Tu recommences?");
    $('#bandeauInfosInt').css({'display':'none', 'color':'red'})
}

const changeJoueurHTML = function () {
    location.reload();
    sessionStorage.clear();
}

const reglageHTML = function () {
    sessionStorage.removeItem('DeNumero2');
    sessionStorage.removeItem('DeNumero3');
}


let timer = 3; // Initialiser le timer à 60 secondes
let intervalId = null; // Déclarer une variable pour stocker l'ID de l'intervalle
$('#bandeauInfosInt').text("Bonjour" + " " + sessionStorage.prenomA + ", le décompte débute dès ton premier clique!");

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
            }
        }, 1000);
    }
};







       


// Écouter les clics sur le bouton pour démarrer le compte à rebours
document.getElementById('btChance').addEventListener('click', diminuerTemps);

// Ajouter un gestionnaire d'événement pour le bouton
const bouton = document.getElementById('btChance');
bouton.addEventListener('click', afficherResultatHTML);

const bouton2 = document.getElementById('btRecommence');
bouton2.addEventListener('click', resetHTML);

const btnChangeJoueur = document.getElementById('btChangerJoueur');
btnChangeJoueur.addEventListener('click', changeJoueurHTML);

const btnReglage = document.getElementById('btReglage');
btnReglage.addEventListener('click', reglageHTML);