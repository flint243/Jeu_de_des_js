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
if (localStorage.getItem('prenomA')) {
    lancerDe();
    console.log(localStorage.prenomA + " " + "dans le formulaire")
} else if (localStorage.getItem('prenomB')) {
    lancerDe();
    console.log(localStorage.prenomB + " " + "dans le formulaire")

} else {
    $("#btRetour2").css({ 'display': 'block', 'height': '60px' })
    $("#pseudoManque").text("Vous devez saisir un nom pour jouer!").css({ 'backgroundColor': 'white', 'color': 'red', 'top': '0px', 'top': '35%', 'zIndex': '1000' });
    resultats2D_HTML() === false;
}

//-----------------------------------------   DEBUT LANCER DE DES  

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

    //----------------------------------------------------------------------
    if (localStorage.getItem('DeNumero3')) {
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

    //----------------------------------------------------------------------
    const winMsg1 = function (resultat, resultatBis) {
        const messageDeWin = document.getElementById('winMessage');
        const de = document.querySelector('.leDe');
        const deBis = document.querySelector('.leDeBis');

        if (resultat === resultatBis) {
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
    if (resultat === resultatTrois) {
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

//----------------------------------------------------------------------
const resetHTML = function () {
    location.reload();
    $('#tuRecommences').text("Tu recommences?");
    //$('#bandeauInfosInt').css({'display':'none', 'color':'red'})

}

if (location.reload) {
    if (localStorage.getItem('prenomA')) {
        $('#bandeauInfosInt').text("Bonjour" + " " + localStorage.prenomA + ", le décompte débute dès ton premier clique!").css({ 'backgroundColor': 'grey', 'padding': '10px' });
    } else if
        (localStorage.getItem('prenomB')) {
        $('#bandeauInfosInt').text("Bonjour" + " " + localStorage.prenomB + ", le décompte débute dès ton premier clique!").css({ 'backgroundColor': 'grey', 'padding': '10px' });
    }
}
$("#time_out").text("TIME OUT !").css({ 'display': 'none' });

//-------------------- DECOMPTE JOUEUR 1 --------------------------------------------------
if (localStorage.getItem('prenomA')) {
    $('#bandeauInfosInt').text("Bonjour" + " " + localStorage.prenomA + ", le décompte débute dès ton premier clique!").css({ 'backgroundColor': 'grey' });

    let timer1 = 5; // Initialiser le timer à 60 secondes
    let intervalId1 = null; // Déclarer une variable pour stocker l'ID de l'intervalle
    diminuerTemps = function () {
        const seconde = document.getElementById('bandeauInfosInt');
        // Vérifier si un intervalle est déjà en cours
        if (intervalId1 === null) {
            intervalId1 = setInterval(() => {
                seconde.innerText = "Tu as " + `${timer1}` + " secondes pour nous montrer que t'es un vrai joueur !";
                timer1--;

                if (timer1 < 5) {
                    seconde.innerHTML = `Tu as <span style="color:red">${timer1}</span> secondes pour nous montrer que t'es un vrai joueur !`;
                }
                if (timer1 < 1) {
                    clearInterval(intervalId1);
                    intervalId1 = null; // Réinitialiser l'ID de l'intervalle
                    // Code à exécuter une fois que le compte à rebours est terminé
                    $("#time_out").text("TIME OUT !").css({ 'display': 'block' });
                    btnChance.style.display = 'none';
                    btnFin.style.display = 'block';

                    $('#bandeauInfosInt').text("Temps écoulé" + " " + localStorage.prenomA + ", tu as fais de ton mieux, féllicitations !").css({ 'backgroundColor': 'grey' });
                    if (localStorage.getItem('prenomB')) {
                        diminuerTemps2();
                    } else {
                        diminuerTemps4();
                    }
                }
            }, 1000)
        }
    }
}


//------------------------- DECOMPTE PROCHAINNE PARTIE ---------------------------------------------
let timerB = 5; // Initialiser le timer à 60 secondes
let intervalId2 = null; // Déclarer une variable pour stocker l'ID de l'intervalle
const diminuerTemps2 = function () {
    const seconde = document.getElementById('bandeauInfosInt');
        intervalId2 = setInterval(() => {
            timerB--
            seconde.innerHTML = `A ton tours ` + localStorage.prenomB + ` , Le prochain jeu commence dans <span style="color:red">${timerB} secondes</span> !`;
            if (timerB < 1) {
                clearInterval(intervalId2);
                intervalId2 = null; // Réinitialiser l'ID de l'intervalle
            }
            if (timerB < 1 && (localStorage.getItem('prenomB'))) {
                console.log("Formulaire " + localStorage.getItem('prenomB') + " " + "actif")
                /*localStorage.prenomA === null;
                btnChance.style.display = 'block';
                btnFin.style.display = 'none';
                $("#time_out").text("TIME OUT !").css({ 'display': 'none' });*/

                //------------------------- INITIALISER JOUEUR 2 ---------------------------------------------
                diminuerTemps3();
            }
        }, 1000)
    }


//------------------------- DECOMPTE JOUEUR 2 ---------------------------------------------
this.timer = 5; // Initialiser le timer à 60 secondes
this.intervalId = null; // Déclarer une variable pour stocker l'ID de l'intervalle
const diminuerTemps3 = function () {
    const seconde = document.getElementById('bandeauInfosInt');
    if (intervalId === null) {
        intervalId = setInterval(() => {
            timer--
            seconde.innerHTML = `Bonjour ` + localStorage.prenomB + `, à ton tours tu as ${timer} secondes pour faire un max de doublé </span> !`;
            localStorage.prenomA === null;
                btnChance.style.display = 'block';
                btnFin.style.display = 'none';
                $("#time_out").text("TIME OUT !").css({ 'display': 'none' });

            if (timer < 1) {
                clearInterval(intervalId);
                intervalId = null; // Réinitialiser l'ID de l'intervalle
            }
            if (timer < 1 && (localStorage.getItem('prenomB'))) {
                intervalId = null; // Réinitialiser l'ID de l'intervalle
                btnChance.style.display = 'none';
                btnFin.style.display = 'block';
                $("#time_out").text("TIME OUT !").css({ 'display': 'block' });
                $('#bandeauInfosInt').text("Temps écoulé" + " " + localStorage.prenomB + ", tu as fais de ton mieux, féllicitations !").css({ 'backgroundColor': 'grey' });
            }
            if (timer < 1) {
                clearInterval(intervalId);
                intervalId = null; // Réinitialiser l'ID de l'intervalle
            }
        }, 1000)
        //------------------- INITIALISER COMPUTER --------------------------------//
        if (timer < 1 && (localStorage.getItem('prenomA') && !localStorage.getItem('prenomB'))) {
            
            console.log("Computer actif")

            btnChance.style.display = 'block';
            btnFin.style.display = 'none';
            $("#time_out").text("TIME OUT !").css({ 'display': 'none' });
        }
    }
}


//----------------------------------------------------------------------
let timerD = 9; // Initialiser le timer à 60 secondes
let intervalId4 = null; // Déclarer une variable pour stocker l'ID de l'intervalle
const diminuerTemps4 = function () {
    const seconde = document.getElementById('bandeauInfosInt');
    if (intervalId4 === null) {
        intervalId4 = setInterval(() => {
            timerD--
            seconde.innerHTML = `Bonjour Computer, tu commences dans ${timerD} secondes </span> !`;
            if (timerD < 1) {
                clearInterval(intervalId4);
                intervalId4 = null; // Réinitialiser l'ID de l'intervalle
                btnChance.style.display = 'none';
                btnFin.style.display = 'block';
                $("#time_out").text("TIME OUT !").css({ 'display': 'block' });
            }
            if (timerD < 1) {
                btnChance.style.display = 'block';
                btnFin.style.display = 'none';
                $("#time_out").text("TIME OUT !").css({ 'display': 'none' });
                diminuerTemps5();
            }
        }, 1000)
    }
}

//----------------------------------------------------------------------
let timerE = 9; // Initialiser le timer à 60 secondes
let intervalId5 = null; // Déclarer une variable pour stocker l'ID de l'intervalle
const diminuerTemps5 = function () {
    const seconde = document.getElementById('bandeauInfosInt');
    if (intervalId5 === null) {
        intervalId5 = setInterval(() => {
            timerE--
            seconde.innerHTML = `Computer ` + `à ton tours tu as ` + ` ${timerE}` + ` secondes pour faire un max de doublé </span> !`;
            if (timerE < 1) {
                clearInterval(intervalId5);
                intervalId5 = null; // Réinitialiser l'ID de l'intervalle
            }
            if (timerE < 1) {
                btnChance.style.display = 'none';
                btnFin.style.display = 'block';
                $("#time_out").text("TIME OUT !").css({ 'display': 'block' });

                //localStorage.getItem('prenomA')
            }
        }, 1000)
    }
}

noPlayer = function () {
    let timer0 = 10; // Initialiser le timer à 60 secondes
    let intervalId0 = null; // Déclarer une variable pour stocker l'ID de l'intervalle

    if (localStorage.getItem('prenomA') && !localStorage.getItem('prenomB')) {
        $('#bandeauInfosInt').text("la prochaine manche commence dans" + `${timer0}` + "seconde").css({ 'backgroundColor': 'grey' });
        timer0--
        // Vérifier si un intervalle est déjà en cours
        intervalId0 = setInterval(() => {
            lancerDe();
            if (timer0 < 1) {
                clearInterval(intervalId0);
                intervalId0 = null; // Réinitialiser l'ID de l'intervalle
            }
        }, 500)
    }
}


let humanScore = 0;
let humanGameOver = 0

let computerScore = 0;
let computerGameOver = 0

//----------------------------------------------------------------------

const changeJoueurHTML = function () {
    location.reload();
    localStorage.clear();
}

const reglageHTML = function () {
    localStorage.removeItem('DeNumero2');
    localStorage.removeItem('DeNumero3');
}

// Écouter les clics sur le bouton pour démarrer le compte à rebours
document.getElementById('btChance').addEventListener('click', diminuerTemps);


/******* LANCE DE ***********/
// Ajouter un gestionnaire d'événement pour le bouton
const btnChance = document.getElementById('btChance');
btnChance.addEventListener('click', resultats2D_HTML);
//-------------------//

const btnFin = document.getElementById('btFin');

const bouton2 = document.getElementById('btRecommence');
bouton2.addEventListener('click', resetHTML);

const btnChangeJoueur = document.getElementById('btChangerJoueur');
btnChangeJoueur.addEventListener('click', changeJoueurHTML);

const btnReglage = document.getElementById('btReglage');
btnReglage.addEventListener('click', reglageHTML);