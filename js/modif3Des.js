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
const btnFin = document.getElementById('btFin');

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

const prenomA = localStorage.getItem('prenomA');
const prenomB = localStorage.getItem('prenomB');


let scoresPointA = document.getElementById('scorePrenomA');
let scoresPointB = document.getElementById('scorePrenomB');
scoresPointA.style.display = 'none'
scoresPointB.style.display = 'none'

// Déclarez une variable pour suivre le score du joueur A
let scorePrenomA = 0;

// Définissez une fonction pour incrémenter le score du joueur A et mettre à jour l'interface utilisateur
incrementerScorePrenomA = function () {
    //PointsA_Invisible()
    // Incrémentez le score du joueur A
    scorePrenomA++;
    // Mettez à jour l'affichage du score dans l'interface utilisateur
    $('#scorePrenomA').text(`${scorePrenomA} point(s)`).css({ 'backgroundColor': 'green', 'color': 'red', 'padding': '10px 30px', 'borderRadius': '10px' });
    //scores.style.display = 'block';
    scoresPointA.style.display = 'block'
};

const deVisible3 = document.querySelector('.leDeTrois');
deVisible3.style.display = 'none';

// Fonction pour afficher les résultats pour deux dés
const resultats2D_HTML = function () {
    // Rendre tous les dés invisibles au début
    rendreDesInvisibles();
    rendreDesBis_Invisibles();
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

    // Mettez toutes les fonctions winMsg dans une seule boucle pour vérifier toutes les conditions à la fois
    const checkConditionsAndIncrementScore = function (resultat, resultatBis) {
        const messageDeWin = document.getElementById('winMessage');
        const de = document.querySelector('.leDe');
        const deBis = document.querySelector('.leDeBis');

        const myAudio = document.createElement('audio');
        myAudio.src = "/sounds/soundFX/mario1.mp3"

        if (resultat === resultatBis) {
            messageDeWin.style.display = 'block';
            de.style.backgroundColor = 'red';
            deBis.style.backgroundColor = 'red';
            myAudio.play();

            // Incrémente le score du joueur A
            incrementerScorePrenomA();
        }
    };

    // Appeler la fonction pour vérifier les conditions et incrémenter le score du joueur A
    checkConditionsAndIncrementScore(resultat, resultatBis);
}

// Fonction pour afficher les résultats pour trois dés
const resultats3D_HTML = function () {
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


// Vérification de `deNumero3` dans le localStorage et appel de la fonction appropriée
const btnChance = document.getElementById('btnChance');
const deNumero3 = localStorage.getItem('DeNumero3');

if (deNumero3) {
    btnChance.addEventListener('click', resultats3D_HTML);
} else {
    btnChance.addEventListener('click', resultats2D_HTML);
}
//----------------------------------------------------------------------
const resetHTML = function () {
    location.reload();
    $('#tuRecommences').text("Tu recommences?");
}



if (location.reload) {
    /*if (prenomA) {
        $('#bandeauInfosInt').text("Bonjour" + " " + localStorage.prenomA + ", le décompte débute dès ton premier clique!").css({ 'backgroundColor': 'grey', 'padding': '10px' });
    } else if
        (prenomB) {
        $('#bandeauInfosInt').text("Bonjour" + " " + localStorage.prenomB + ", le décompte débute dès ton premier clique!").css({ 'backgroundColor': 'grey', 'padding': '10px' });
    }*/
}
$("#time_out").text("TIME OUT !").css({ 'display': 'none' });

//-------------------- DECOMPTE --------------------------------------------------
let timerI = 10
let intervalIdI = null;
diminuerTempsI = function () {
    const seconde = document.getElementById('bandeauInfosInt');
    // Vérifier si un intervalle est déjà en cours
    if (intervalIdI === null) {
        intervalIdI = setInterval(() => {

            seconde.innerText = `${prenomA}`+ " prépare toi, ta partie commence dans " + `${timerI}` + " " + "secondes";
            timerI--;

            if (timerI < 1) {
                clearInterval(intervalIdI);
                intervalIdI = null; // Réinitialiser l'ID de l'intervalle
                diminuerTempsA();
            }
        }, 1000)
    }
}
//----------------------------------------------------------------------------------
let timerA = 10;
let intervalIdA = null;
diminuerTempsA = function () {
    if (intervalIdA === null) {
        intervalIdA = setInterval(() => {
            const seconde = document.getElementById('bandeauInfosInt');
            seconde.innerHTML = `"${prenomA}`+ " " +`${timerA} `+ " secondes pour nous montrer que t'es un vrai joueur !";
            timerA--
            if (timerA < 1) {
                clearInterval(intervalIdA);
                intervalIdA = null; // Réinitialiser l'ID de l'intervalle
                // Code à exécuter une fois que le compte à rebours est terminé
                $("#time_out").text("TIME OUT !").css({ 'display': 'block' });
                btnChance.style.display = 'none';
                btnFin.style.display = 'block';

                $('#bandeauInfosInt').text("Temps écoulé" + " " + prenomA + ", tu as fais de ton mieux, féllicitations !").css({ 'backgroundColor': 'grey' });
                if (prenomB) {
                    scoresPointA.style.display = 'none'
                    diminuerTemps2();
                } else {
                    diminuerTemps4();
                }
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
            diminuerTemps3()
        }
    }, 1000)
}
//----------------------------------------------------------------------------------
let timer3 = 10;
let intervalId3 = null;
const diminuerTemps3 = function () {
    seconde = document.getElementById('bandeauInfosInt');

    intervalId3 = setInterval(() => {
        timer3--;
        seconde.innerHTML = ` ${prenomB}, le temps s'égraine, ${timer3} secondes pour faire un max de doublé !`;
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
    //}
};

//----------------------------- COMPUTER -----------------------------------------------------
const diminuerTemps4 = function (timer4, intervalId4) {
    timer4 = 10;
    intervalId4 = null;

    const seconde = document.getElementById('bandeauInfosInt');
    if (intervalId4 === null) {
        intervalId4 = setInterval(() => {
            timer4--
            seconde.innerHTML = `Bonjour Computer, tu commences dans ${timer4} secondes </span> !`;
            if (timer4 < 1) {
                clearInterval(intervalId4);
                intervalId4 = null; // Réinitialiser l'ID de l'intervalle
                btnChance.style.display = 'none';
                btnFin.style.display = 'none';
                $("#time_out").text("TIME OUT !").css({ 'display': 'none' });
            }
            else if (timer4 < 1) {
                clearInterval(intervalId4);
                intervalId4 = null; // Réinitialiser l'ID de l'intervalle
                /*btnChance.style.display = 'block';
                btnFin.style.display = 'none';
                $("#time_out").text("TIME OUT !").css({ 'display': 'none' });*/
                diminuerTemps5();
            }
        }, 1000)
    }
}

//-------------------------------------------------------------------------------------------
const diminuerTemps5 = function (timer5, intervalId5) {
    timer5 = 15;
    intervalId5 = null;
    const seconde = document.getElementById('bandeauInfosInt');
    if (intervalId5 === null) {
        intervalId5 = setInterval(() => {
            timer5--
            seconde.innerHTML = `Computer ` + `à ton tours tu as ` + ` ${timer5}` + ` secondes pour faire un max de doublé </span> !`;
            if (timer5 < 1) {
                clearInterval(intervalId5);
                intervalId5 = null; // Réinitialiser l'ID de l'intervalle
                /*btnChance.style.display = 'block';
                btnFin.style.display = 'none';
                $("#time_out").text("TIME OUT !").css({ 'display': 'none' });*/
            }
            if (timer5 === 0) {
                btnChance.style.display = 'block';
                btnFin.style.display = 'none';
                $("#time_out").text("TIME OUT !").css({ 'display': 'none' });
            }
        }, 1000)
    }
}

//-----------------------------------------------------------------------------------------------------------
window.onload(diminuerTempsI());

const changeJoueurHTML = function () {
    location.reload();
    localStorage.clear();
}

const reglageHTML = function () {
    localStorage.removeItem('DeNumero2');
    localStorage.removeItem('DeNumero3');
}

//-------------------//
const bouton2 = document.getElementById('btRecommence');
bouton2.addEventListener('click', resetHTML);

const btnChangeJoueur = document.getElementById('btChangerJoueur');
btnChangeJoueur.addEventListener('click', changeJoueurHTML);

const btnReglage = document.getElementById('btReglage');
btnReglage.addEventListener('click', reglageHTML);