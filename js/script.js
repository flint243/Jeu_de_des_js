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


//----------- concerver les ID dans le formulaire -----------------------//
   if (localStorage.getItem('prenomA')){
    $('#joueurA').val(localStorage.getItem('prenomA'));
    $("#bandeauInfos").text(" Bonjour" +" " +localStorage.prenomA+ " " +"tu as ........... secondes pour faire un max de doublés");
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

    rendreMessageInvisiblesBis();
    rendreMessageInvisiblesTrois();
    
    const deVisible1 = document.querySelector('.leDe');
    deVisible1.style.display = 'block';
    deVisible1.style.backgroundColor = 'white ';

    const deVisible2 = document.querySelector('.leDeBis');
    deVisible2.style.display = 'block';
    deVisible2.style.backgroundColor = 'white ';

    if (localStorage.getItem('DeNumero2')){
        rendreDesTrois_Invisibles();
    
        const deVisible3 = document.querySelector('.leDeTrois');
        deVisible3.style.display = 'none';
        const resultatDivTrois = document.getElementById('resultatTrois');
        resultatDivTrois.style.display = 'none';

    
        $("#bandeauInfos").text(" Bonjour" +" " +localStorage.prenomA+ " " +"tu as ........... secondes pour faire un max de doublés");
        console.log('Dé N°2 présent');
        
     }else{
    const deVisible3 = document.querySelector('.leDeTrois');
    deVisible3.style.display = 'block';
    deVisible3.style.backgroundColor = 'white ';
     }
     if(!localStorage.getItem('prenomA')){
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

    const winMsg1 = function (resultat, resultatBis) {
        const winerMsg = document.getElementById('winMessage');
        const de = document.querySelector('.leDe');
        const deBis = document.querySelector('.leDeBis');
    
        if (resultat === resultatBis) {
            winerMsg.style.display = 'block';
            deBis.style.backgroundColor = 'blue';
            de.style.backgroundColor = 'blue';
        } 
    }
/**************************************************** */
if (localStorage.getItem('DeNumero2')){
const winMsg2 = function (resultat, resultatTrois) {
    const winerMsg = document.getElementById('winMessage');
    const de = document.querySelector('.leDe');
    const deTrois = document.querySelector('.leDeTrois');
        if (resultat === resultatTrois) {
            winerMsg.style.display = 'none';
            deTrois.style.backgroundColor = 'white';
            de.style.backgroundColor = 'white';
        } 
    }
    /*
}else{
    const winMsg2 = function (resultat, resultatTrois) {
        const winerMsg = document.getElementById('winMessage');
        const de = document.querySelector('.leDe');
        const deTrois = document.querySelector('.leDeTrois');
            if (resultat === resultatTrois) {
                winerMsg.style.display = 'block';
                deTrois.style.backgroundColor = 'green';
                de.style.backgroundColor = 'green';
            } 
        }
        */
}

    /**************************************************** */
    if (localStorage.getItem('DeNumero3')){
const winMsg3 = function (resultatBis, resultatTrois) {
    const winerMsg = document.getElementById('winMessage');
    const deBis = document.querySelector('.leDeBis');
    const deTrois = document.querySelector('.leDeTrois');
        if (resultatBis === resultatTrois) {
            winerMsg.style.display = 'block';
            deBis.style.backgroundColor = 'orange';
            deTrois.style.backgroundColor = 'orange';
        } 
    }
}

  if (resultat === resultatBis) {
        winMsg1(resultat, resultatBis);
    }
    if (resultat === resultatTrois) {
        winMsg2(resultat, resultatTrois);
    }

    if (resultatBis === resultatTrois) {
        winMsg3(resultatBis, resultatTrois);
    }
}



// Fonction pour afficher le résultat en HTMlocation.reload();L
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
    //deVisible3.style.backgroundColor = 'white ';

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

/**************************************************** */
const winMsg2 = function (resultat, resultatTrois) {
    const winerMsg = document.getElementById('winMessage');
    const de = document.querySelector('.leDe');
    const deTrois = document.querySelector('.leDeTrois');
        if (resultat === resultatTrois) {
            winerMsg.style.display = 'block';
            deTrois.style.backgroundColor = 'red';
            de.style.backgroundColor = 'red';
        } 
    }

    /**************************************************** */
const winMsg3 = function (resultatBis, resultatTrois) {
    const winerMsg = document.getElementById('winMessage');
    const deBis = document.querySelector('.leDe');
    const deTrois = document.querySelector('.leDeTrois');
        if (resultatBis === resultatTrois) {
            winerMsg.style.display = 'block';
            deBis.style.backgroundColor = 'red';
            deTrois.style.backgroundColor = 'red';
        } 
    }


  if (resultat === resultatBis) {
        winMsg1(resultat, resultatBis);
    }
    if (resultat === resultatTrois) {
        winMsg2(resultat, resultatTrois);
    }

    if (resultatBis === resultatTrois) {
        winMsg3(resultatBis, resultatTrois);
    }
}

/************************************************************* */

const resetHTML = function () {
    location.reload();
    //localStorage.clear();
}

const changeJoueurHTML = function () {
    location.reload();
    localStorage.clear();
}

const reglageHTML = function () {
    location.reload();
    localStorage.getItem('DeNumero2').clear();
    localStorage.getItem('DeNumero3').clear();
}

// Ajouter un gestionnaire d'événement pour le bouton
const bouton = document.getElementById('btChance');
bouton.addEventListener('click', afficherResultatHTML);

/*
// Ajouter un gestionnaire d'événement pour le bouton trois dés
const bouton3Des = document.getElementById('btnChoixDe2');
bouton3Des.addEventListener('click', deuxDesHTML);
*/
const bouton2 = document.getElementById('btRecommence');
bouton2.addEventListener('click', resetHTML);

const btnChangeJoueur = document.getElementById('btRecommence');
btnChangeJoueur.addEventListener('click', changeJoueurHTML);

const btnReglage = document.getElementById('btReglage');
btnReglage.addEventListener('click', reglageHTML);