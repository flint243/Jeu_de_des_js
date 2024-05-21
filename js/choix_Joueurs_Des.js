class NameBooking {
  constructor() {
    let btnChoixNomA = document.getElementById('btConfirmerA');
    btnChoixNomA.addEventListener("click", this.checkFormA.bind(this));

    let btnChoixNomB = document.getElementById('btConfirmerB');
    btnChoixNomB.addEventListener("click", this.checkFormB.bind(this));

    let btn = document.getElementById('makeChoice');
    // Modifiez le style du bouton pour le rendre visible
    btn.style.display = 'none'; // ou 'inline-block' selon votre mise en page

    let cadreJoueurB = document.getElementById('cadreJoueurB');
    cadreJoueurB.style.display = 'none';

 /*
  // click dé n°1
    const choix2 = document.getElementById('btnChoixDe2');
    choix2.addEventListener('click', this.stokerDeN2.bind(this));
*/

    this.checkFormNameA = false;
    this.checkFormNameB = false;

  }

  //------------ Sécuriser le formulaire ------------//
  checkFormA(e) {
    let nom = document.getElementById('joueurA');
    let nom_m = document.getElementById('joueurA_manquant');

    //------------ Sécuriser le prenom et messages d'erreur ------------//
    if (nom.validity.valueMissing) {
      e.preventDefault();
      this.checkFormNameA = false;
    } else {
      this.checkFormNameA = true;
      //nom_m.textContent = '';
      this.storageInfosA(); // Appel de storageInfosA uniquement si le formulaire est rempli
    }
  }

  checkFormB(e) {
    let nomB = document.getElementById('joueurB');
    let nomB_m = document.getElementById('joueurB_manquant');
    //------------ Sécuriser le prenom et messages d'erreur ------------//
    if (nomB.validity.valueMissing) {
      e.preventDefault();
      this.checkFormNameB = false;
    } else {
      this.checkFormNameB = true;
      //nom_m.textContent = '';
      this.storageInfosB(); // Appel de storageInfosB uniquement si le formulaire est rempli
    }
  }




  // Fonction pour rendre le dé n°3 invisible
  stokerDeN2(e) {
    const desTrois = document.querySelectorAll('.leDeTrois .leDeTroisWrap div[class^="deTrois"]');
    if (this.deTrois = true) {
      e.preventDefault();
      this.choix2 = true;
      this.storageInfosDeN3();
    }
  }

  storageInfosDeN3() {
    if (this.choix2) {
      localStorage.setItem('DeNumero2', $('#btnChoixDe2'));
      console.log('dé n°2 stocké');
    }
  }

  //------------ Stockage des infos dans le localStorage ------------//
  storageInfosA() {
    // Vérification si le formulaire est rempli avant de stocker les informations
    if (this.checkFormNameA) {
      localStorage.setItem('prenomA', $('#joueurA').val());
      console.log('joueur A stocké');

      let btn = document.getElementById('makeChoice');
      let cadreJoueurB = document.getElementById('cadreJoueurB');
      // Modifiez le style du bouton pour le rendre visible
      btn.style.display = 'block'; // ou 'inline-block' selon votre mise en page
      cadreJoueurB.style.display = 'block';

    }
  }

  storageInfosB() {
    // Vérification si le formulaire est rempli avant de stocker les informations
    if (this.checkFormNameB) {
      localStorage.setItem('prenomB', $('#joueurB').val());

      let btn = document.getElementById('makeChoice');
      // Modifiez le style du bouton pour le rendre visible
      btn.style.display = 'block'; // ou 'inline-block' selon votre mise en page
      console.log('joueur B stocké');
    }
  }

  /***************** COMPUTER PLAYER */

  checkFormComputer(e) {
    let nomC = document.getElementById('computer');
    //------------ Sécuriser le prenom et messages d'erreur ------------//
    if (this.checkFormNameC) {
      e.preventDefault();
    }
    this.checkFormNameC = true;
    this.storageComputer(); // Appel de storageInfosB uniquement si le formulaire est rempli
    location = "jeux.html";
  }
  storageComputer() {
    // Vérification si le formulaire est rempli avant de stocker les informations
    if (this.btn) {
      localStorage.setItem('computer', $('#computer').val());
      console.log('joueur A stocké');
    }
}
}

new NameBooking();











/*
// Fonction pour afficher le résultat en HTMlocation.reload();L
const troisDesHTML = function () {
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
            deBis.style.backgroundColor = 'red';
            de.style.backgroundColor = 'red';
        } 
    }
/**************************************************** *
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

    /**************************************************** *
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


/************************ DEUX DES **********************************************


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

/**************************************************** *
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

    /**************************************************** *
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


//Ajouter un gestionnaire d'événement pour le bouton deux dés
const bouton2Des = document.getElementById('btnChoixDe2');
bouton2Des.addEventListener('click', deuxDesHTML);

//Ajouter un gestionnaire d'événement pour le bouton trois dés
const bouton3Des = document.getElementById('btnChoixDe2');
bouton3Des.addEventListener('click', troisDesHTML);
*/
