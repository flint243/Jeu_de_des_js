let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;
let timeLeft = 20;
let timerX;
let useCustomDie = false; // Variable pour suivre l'utilisation du dé personnalisé

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

let prenomA = localStorage.getItem('prenomA');
let prenomB = localStorage.getItem('prenomB');

let deNumero2 = localStorage.getItem('DeNumero2');

let scoresPoint = document.getElementById('scores');
$('#scores').css({ 'backgroundColor': 'orange', 'padding': '2px 10px 20px', 'borderRadius': '10px', 'color': 'white', 'display': 'none' })

const btnFin = document.getElementById('btFin');

let scores1 = document.getElementById('scores1');
let scores2 = document.getElementById('scores2');
$('#scores1').css({ 'display': 'none' });

//----------- les ID sont présent sinon retour en page de selection des joueurs -----------------------//
if (prenomA) {
    console.log(prenomA + " " + "présent")
} 
 if (prenomB) {
    console.log(prenomB + " " + "présent")
}
 if(!prenomA && !prenomB) {
    $("#btRetour2").css({ 'display': 'block', 'height': '60px' })
    $("#pseudoManque").text("Pas de nom? Cliquez sur CHoix de joueur!").css({ 'backgroundColor': 'white', 'color': 'red', 'top': '0px', 'top': '35%', 'zIndex': '1000' });
    $("#btnChance").css({ 'display': 'none'})
}

    // Déclarez une variable pour suivre le score du joueur A
    let scorePrenomA = 0;
    // Définissez une fonction pour incrémenter le score du joueur A et mettre à jour l'interface utilisateur
    incrementerScorePrenomA = function () {
        
        // Incrémentez le score du joueur A
        scorePrenomA++;
        // Mettez à jour l'affichage du score dans l'interface utilisateur
        $('#nomJoueurA').text(`Score de ` + " " + `${prenomA}`)
        $('#scorePrenomA').text(+ scorePrenomA + " " + "point(s)").css({ 'backgroundColor': 'green', 'color': 'red', 'padding': '10px 30px', 'borderRadius': '10px' });
        scores1.style.display = "block";
    };

    // Déclarez une variable pour suivre le score du joueur B
    let scorePrenomB = 0;
    // Définissez une fonction pour incrémenter le score du joueur B et mettre à jour l'interface utilisateur
    incrementerScorePrenomB = function () {
        // Incrémentez le score du joueur B
        scorePrenomB++;
        // Mettez à jour l'affichage du score dans l'interface utilisateur
        $('#nomJoueurB').text(`Score de ` + " " + `${prenomB}`)
        $('#scorePrenomB').text(+ scorePrenomB + " " + "point(s)").css({ 'backgroundColor': 'green', 'color': 'red', 'padding': '10px 30px', 'borderRadius': '10px' });
    };

const incrementScores = incrementerScorePrenomA(prenomA) || incrementerScorePrenomB(prenomB);

if (deNumero2 || !deNumero2) {
    const deVisible3 = document.querySelector('.leDeTrois');
    deVisible3.style.display = 'none';
}


//-----------------------------------------   DEBUT LANCER DE DES
// Fonction pour afficher le résultat en HTMlocation.reload();L
resultats2D_HTML = function () {
    // Rendre tous les dés invisibles au début
    rendreDesInvisibles();
    rendreDesBis_Invisibles();
    rendreDesTrois_Invisibles();
    rendreTitreInvisibles();
    rendreTripleWinInvisible();
    rendreMessageInvisible();

    diminuerTemps()

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

    // Mettez toutes les fonctions winMsg dans une seule boucle pour vérifier toutes les conditions à la fois
    const checkConditionsAndIncrementScore = function (resultat, resultatBis) {
        const messageDeWin = document.getElementById('winMessage');
        const de = document.querySelector('.leDe');
        const deBis = document.querySelector('.leDeBis');

        const myAudio = document.createElement('audio');
        myAudio.src = "/sounds/soundFX/mario1.mp3"

        if (resultat === resultatBis) {
            messageDeWin.style.display = 'block';
            if (resultat === resultatBis) {
                de.style.backgroundColor = 'red';
                deBis.style.backgroundColor = 'red';
            }
            myAudio.play();

            // Incrémente le score du joueur A
            incrementerScorePrenomA();
        }
    };

    // Appeler la fonction pour vérifier les conditions et incrémenter le score du joueur A
    checkConditionsAndIncrementScore(resultat, resultatBis);
}

// Fonction pour afficher les résultats pour trois dés
resultats3D_HTML = function () {
    // Rendre tous les dés invisibles au début
    rendreDesInvisibles();
    rendreDesBis_Invisibles();
    rendreDesTrois_Invisibles();
    rendreTitreInvisibles();
    rendreTripleWinInvisible();
    rendreMessageInvisible();

    diminuerTemps()

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

    // Mettez toutes les fonctions winMsg dans une seule boucle pour vérifier toutes les conditions à la fois
    const checkConditionsAndIncrementScore = function (resultat, resultatBis, resultatTrois) {
        const messageDeWin = document.getElementById('winMessage');
        const messageTripleWin = document.getElementById('tripleWinMessage');
        const de = document.querySelector('.leDe');
        const deBis = document.querySelector('.leDeBis');
        const deTrois = document.querySelector('.leDeTrois');

        const myAudio = document.createElement('audio');
        myAudio.src = "/sounds/soundFX/mario1.mp3"

        const myAudio2 = document.createElement('audio');
        myAudio2.src = "/sounds/soundFX/gunX3.mp3"

        if (resultat === resultatBis && resultat === resultatTrois) {
            messageTripleWin.style.display = 'block';
            de.style.backgroundColor = 'red';
            deBis.style.backgroundColor = 'red';
            deTrois.style.backgroundColor = 'red';
            myAudio2.play();

            // Incrémente le score du joueur A
            incrementerScorePrenomA();

        } else if (resultat === resultatBis || resultat === resultatTrois || resultatBis === resultatTrois) {
            messageDeWin.style.display = 'block';
            if (resultat === resultatBis) {
                de.style.backgroundColor = 'red';
                deBis.style.backgroundColor = 'red';
            }
            if (resultat === resultatTrois) {
                de.style.backgroundColor = 'red';
                deTrois.style.backgroundColor = 'red';
            }
            if (resultatBis === resultatTrois) {
                deBis.style.backgroundColor = 'red';
                deTrois.style.backgroundColor = 'red';
            }
            myAudio.play();
            // Incrémente le score du joueur A
            incrementerScorePrenomA();
        }
    };
    // Appeler la fonction pour vérifier les conditions et incrémenter le score du joueur A
    checkConditionsAndIncrementScore(resultat, resultatBis, resultatTrois);
}



//-------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------

//$('#bandeauInfosInt').css({ 'backgroundColor': 'grey', 'padding': '10px', 'display': 'none' });
$("#time_out").text("TIME OUT !").css({ 'display': 'none' });

if (location.reload) {
    if (prenomA) {
        $('#bandeauInfosInt').text("Bonjour" + " " + prenomA + ", le décompte débute dès ton premier clique!").css({ 'backgroundColor': 'grey', 'padding': '10px' });
    } 
}

//-------------------- DECOMPTE JOUEUR 1 --------------------------------------------------
    let timer = 15; // Initialiser le timer à 15 secondes
    let intervalId = null; // Déclarer une variable pour stocker l'ID de l'intervalle
    const diminuerTemps = function () {
        const seconde = document.getElementById('bandeauInfosInt');
        // Vérifier si un intervalle est déjà en cours
        if (intervalId === null) {
            intervalId = setInterval(() => {
                seconde.style.display = 'block'
                seconde.innerText = `Tu as ${timer} secondes pour nous montrer que t'es un vrai joueur !`;
                timer--;

                if (timer < 5) {
                    seconde.innerHTML = `Tu as <span style="color:red">${timer}</span> secondes pour nous montrer que t'es un vrai joueur !`;
                }
                if (timer < 1 && prenomB) {
                    clearInterval(intervalId);
                    intervalId = null; // Réinitialiser l'ID de l'intervalle
                    // Code à exécuter une fois que le compte à rebours est terminé
                    $("#time_out").text("TIME OUT !").css({ 'display': 'block' });
                    btnChance.style.display = 'none';
                    btnFin.style.display = 'block';
                    location.onload();
                    $('#bandeauInfosInt').text("Temps écoulé" + " " + prenomA + ", tu as fais de ton mieux, féllicitations !").css({ 'backgroundColor': 'grey' });
                    diminuerTemps3();
                }
            }, 1000)
        }
    }


//------------------------- DECOMPTE PROCHAINNE PARTIE ---------------------------------------------
let timer2 = 10; // Initialiser le timer à 15 secondes
let intervalId2 = null; // Déclarer une variable pour stocker l'ID de l'intervalle
const diminuerTemps2 = function () {

    const seconde = document.getElementById('bandeauInfosInt');
    intervalId2 = setInterval(() => {
        timer2--
        seconde.innerHTML = `A ton tours ` + prenomB + ` , Le prochain jeu commence dans <span style="color:red">${timer2} secondes</span> !`;
        if (timer2 < 1) {
            clearInterval(intervalId2);
            intervalId2 = null; // Réinitialiser l'ID de l'intervalle
            btnChance.style.display = 'block';
            btnFin.style.display = 'none';
            $("#time_out").text("TIME OUT !").css({ 'display': 'none' });
            if(prenomB)
                diminuerTemps3();
        }
        //------------------------- INITIALISER JOUEUR 2 ---------------------------------------------
    }, 1000)
}

//------------------------- DECOMPTE JOUEUR 2 ---------------------------------------------
let timer3 = 15;
let intervalId3 = null;
 const diminuerTemps3 = function () {    
    seconde = document.getElementById('bandeauInfosInt');

    //if (intervalId === null) {
    intervalId3 = setInterval(() => {
        timer3--;
        seconde.innerHTML = `Tu as ${timer3} secondes pour faire un max de doublé !`;
        if (timer3 < 1) {
            clearInterval(intervalId3);
            intervalId3 = null;
            $('#bandeauInfosInt').text(`Temps écoulé pour ${prenomB}, tu as fais de ton mieux, félicitations !`).css({ 'backgroundColor': 'grey' });

            // Mettre fin au tour du joueur ici
            $("#time_out").text("TIME OUT !").css({ 'display': 'block' });
            btnChance.style.display = 'none';
            btnFin.style.display = 'block';
            clearTimeout(intervalId3);
        }
    }, 1000);
};


//-----------------------------------------------------------------------------------------------
let timerD = 5; // Initialiser le timer à 9 secondes
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
                location.onload();
                diminuerTemps5();
            }
        }, 1000)
    }
}

//-------------------------------------------------------------------------------------------
let timerE = 10; // Initialiser le timer à 9 secondes
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

                //prenomA
            }
        }, 1000)
    }
}

//-----------------------------------------------------------------------------------------------------------

// Vérification de `deNumero3` dans le localStorage et appel de la fonction appropriée
const btnChance = document.getElementById('btnChance');
const deNumero3 = localStorage.getItem('DeNumero3');

if (deNumero3) {
    btnChance.addEventListener('click', resultats3D_HTML);
} else {
    btnChance.addEventListener('click', resultats2D_HTML);
}

const changeJoueurHTML = function () {
    localStorage.removeItem('prenomA');
    localStorage.removeItem('prenomB');
}

const reglageHTML = function () {
    localStorage.removeItem('DeNumero2');
    localStorage.removeItem('DeNumero3');
    location.href = 'reglage.html';
}
//-------------------//

const resetHTML = function () {
    location.reload();
    $('#tuRecommences').text("Tu recommences?");
}
const btn2 = document.getElementById('btRecommence');
btn2.addEventListener('click', resetHTML);

const btnChangeJoueur = document.getElementById('btChangerJoueur');
btnChangeJoueur.addEventListener('click', changeJoueurHTML);

const btnReglage = document.getElementById('btReglage');
btnReglage.addEventListener('click', reglageHTML);