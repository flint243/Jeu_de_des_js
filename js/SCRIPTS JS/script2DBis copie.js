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

if (localStorage.getItem('prenomA')) {
    // Déclarez une variable pour suivre le score du joueur A
    let scorePrenomA = 0;
    // Définissez une fonction pour incrémenter le score du joueur A et mettre à jour l'interface utilisateur
    incrementerScorePrenomA = function () {
        // Incrémentez le score du joueur A
        scorePrenomA++;
        // Mettez à jour l'affichage du score dans l'interface utilisateur
        $('#scorePrenomA').text(+ scorePrenomA + " " + "point(s)").css({ 'backgroundColor': 'green', 'color': 'red', 'padding': '10px 30px', 'borderRadius': '10px' });
        scoresPoint.style.display = 'block'
    };
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
            //this.checkConditionsAndIncrementScore;
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

        // Mettez toutes les fonctions winMsg dans une seule boucle pour vérifier toutes les conditions à la fois
        const checkConditionsAndIncrementScore = function (resultat, resultatBis/*, resultatTrois*/) {
        const messageDeWin = document.getElementById('winMessage');
        const de = document.querySelector('.leDe');
        const deBis = document.querySelector('.leDeBis');
        //const deTrois = document.querySelector('.leDeTrois');

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
        /* if (resultat === resultatTrois) {
            messageDeWin.style.display = 'block';
            de.style.backgroundColor = 'green';
            deTrois.style.backgroundColor = 'green';
            myAudio.play();
    
            // Incrémente le score du joueur A
            incrementerScorePrenomA();
    
        }  if (resultatBis === resultatTrois) {
            messageDeWin.style.display = 'block';
            deBis.style.backgroundColor = 'purple';
            deTrois.style.backgroundColor = 'purple';
            myAudio.play();
    
            // Incrémente le score du joueur A
            incrementerScorePrenomA();
    
        } if (resultat === resultatBis === resultatTrois) {
            messageDeWin.style.display = 'block';
            de.style.backgroundColor = 'purple';
            deBis.style.backgroundColor = 'purple';
            deTrois.style.backgroundColor = 'purple';
            myAudio.play();
    
            // Incrémente le score du joueur A
            incrementerScorePrenomA();
        }
        */
        };

        // Appeler la fonction pour vérifier les conditions et incrémenter le score du joueur A
        checkConditionsAndIncrementScore(resultat, resultatBis);


    }

/******************************** 3 DES S************************************************ */


//-----------------------------------------   DEBUT LANCER DE DES
    // Fonction pour afficher le résultat en HTMlocation.reload();L
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
        }

        // Mettez toutes les fonctions winMsg dans une seule boucle pour vérifier toutes les conditions à la fois
        const checkConditionsAndIncrementScore_3D = function (resultat, resultatBis/*, resultatTrois*/) {
        const messageDeWin = document.getElementById('winMessage');
        const de = document.querySelector('.leDe');
        const deBis = document.querySelector('.leDeBis');
        //const deTrois = document.querySelector('.leDeTrois');

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
        /* if (resultat === resultatTrois) {
            messageDeWin.style.display = 'block';
            de.style.backgroundColor = 'green';
            deTrois.style.backgroundColor = 'green';
            myAudio.play();
    
            // Incrémente le score du joueur A
            incrementerScorePrenomA();
    
        }  if (resultatBis === resultatTrois) {
            messageDeWin.style.display = 'block';
            deBis.style.backgroundColor = 'purple';
            deTrois.style.backgroundColor = 'purple';
            myAudio.play();
    
            // Incrémente le score du joueur A
            incrementerScorePrenomA();
    
        } if (resultat === resultatBis === resultatTrois) {
            messageDeWin.style.display = 'block';
            de.style.backgroundColor = 'purple';
            deBis.style.backgroundColor = 'purple';
            deTrois.style.backgroundColor = 'purple';
            myAudio.play();
    
            // Incrémente le score du joueur A
            incrementerScorePrenomA();
        }
        */
        };

        // Appeler la fonction pour vérifier les conditions et incrémenter le score du joueur A
        checkConditionsAndIncrementScore_3D(resultat, resultatBis, resultatTrois);
    






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

    let timer = 600; // Initialiser le timer à 15 secondes
    let intervalId = null; // Déclarer une variable pour stocker l'ID de l'intervalle
    diminuerTemps = function () {
        const seconde = document.getElementById('bandeauInfosInt');
        // Vérifier si un intervalle est déjà en cours
        if (intervalId === null) {
            intervalId = setInterval(() => {
                seconde.innerText = "Tu as " + `${timer}` + " secondes pour nous montrer que t'es un vrai joueur !";
                timer--;

                if (timer < 5) {
                    seconde.innerHTML = `Tu as <span style="color:red">${timer}</span> secondes pour nous montrer que t'es un vrai joueur !`;
                }
                if (timer < 1) {
                    clearInterval(intervalId);
                    intervalId = null; // Réinitialiser l'ID de l'intervalle
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
//let timer = 5; // Initialiser le timer à 15 secondes
//let intervalId = null; // Déclarer une variable pour stocker l'ID de l'intervalle
const diminuerTemps2 = function () {
    let timer = 5;
    let intervalId = null;
    const seconde = document.getElementById('bandeauInfosInt');
    intervalId = setInterval(() => {
        timer--
        seconde.innerHTML = `A ton tours ` + localStorage.prenomB + ` , Le prochain jeu commence dans <span style="color:red">${timer} secondes</span> !`;
        if (timer < 1) {
            clearInterval(intervalId);
            intervalId = null; // Réinitialiser l'ID de l'intervalle
            btnChance.style.display = 'block';
            btnFin.style.display = 'none';
            $("#time_out").text("TIME OUT !").css({ 'display': 'none' });
            diminuerTemps3()
        }
        //------------------------- INITIALISER JOUEUR 2 ---------------------------------------------
    }, 1000)
}



//------------------------- DECOMPTE JOUEUR 2 ---------------------------------------------
const diminuerTemps3 = function () {
    nomB = localStorage.getItem('prenomB');
    seconde = document.getElementById('bandeauInfosInt');
    timer = 9;
    intervalId = null;

    //if (intervalId === null) {
    intervalId = setInterval(() => {
        timer--;
        seconde.innerHTML = `Bonjour ${nomB}, à ton tour tu as ${timer} secondes pour faire un max de doublé !`;
        if (timer < 1) {
            clearInterval(intervalId);
            intervalId = null;
            $('#bandeauInfosInt').text(`Temps écoulé pour ${nomB}, tu as fais de ton mieux, félicitations !`).css({ 'backgroundColor': 'grey' });

            // Mettre fin au tour du joueur ici
            $("#time_out").text("TIME OUT !").css({ 'display': 'block' });
            btnChance.style.display = 'none';
            btnFin.style.display = 'block';
            clearTimeout(intervalId);
        }
    }, 1000);
    //}
};

//------------------- INITIALISER COMPUTER --------------------------------//

//-----------------------------------------------------------------------------------------------
let timerD = 9; // Initialiser le timer à 9 secondes
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

//-------------------------------------------------------------------------------------------
let timerE = 9; // Initialiser le timer à 9 secondes
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
    let timer0 = 10; // Initialiser le timer à 10 secondes
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

//-----------------------------------------------------------------------------------------------------------

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

btnChance.addEventListener('click', resultats3D_HTML);
//-------------------//


let scoresPoint = document.getElementById('scores');
$('#scores').css({ 'backgroundColor': 'orange', 'padding': '2px 10px 20px', 'borderRadius': '10px', 'color': 'white' })
scoresPoint.style.display = 'none'

const btnFin = document.getElementById('btFin');

const bouton2 = document.getElementById('btRecommence');
bouton2.addEventListener('click', resetHTML);

const btnChangeJoueur = document.getElementById('btChangerJoueur');
btnChangeJoueur.addEventListener('click', changeJoueurHTML);

const btnReglage = document.getElementById('btReglage');
btnReglage.addEventListener('click', reglageHTML);