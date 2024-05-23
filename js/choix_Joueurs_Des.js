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
    let nom_v = /^[a-zA-ZéèîïËÊÏ][a-zéèêëçîï]+([-'\s][a-zA-ZéèîïËÊÏ][a-zéèêëçîï]+)?/;
    let nom_m = document.getElementById('joueurA_manquant');
    //------------ Sécuriser le prenom et messages d'erreur ------------//
    if (nom.validity.valueMissing) {
      e.preventDefault();
      nom_m.textContent = 'Saisissez votre Prénom';
      nom_m.style.color = 'red';
      nom_m.style.fontSize = '100%';
      this.checkFormName = false;
    } else {
      if (nom_v.test(nom.value) == false) {
        e.preventDefault();
        nom_m.textContent = 'Format incorrect';
        nom_m.style.color = 'red';
        nom_m.style.fontSize = '100%';
      } else {
        this.checkFormNameA = true;
        nom_m.style.display = 'none';
        //nom_m.textContent = '';
        this.storageInfosA(); // Appel de storageInfosA uniquement si le formulaire est rempli
      }
    }
  }


  checkFormB(e) {
    let nomB = document.getElementById('joueurB');
    let nomB_v = /^[a-zA-ZéèîïËÊÏ][a-zéèêëçîï]+([-'\s][a-zA-ZéèîïËÊÏ][a-zéèêëçîï]+)?/;
    let nomB_m = document.getElementById('joueurB_manquant');
    //------------ Sécuriser le prenom et messages d'erreur ------------//
      if (nomB_v.test(nomB.value) == false) {
        e.preventDefault();
        nomB_m.textContent = 'Format incorrect';
        nomB_m.style.color = 'red';
        nomB_m.style.fontSize = '80%';
        this.checkFormName = false;
      } else {
        this.checkFormNameB = true;
        nomB_m.style.display = 'none';
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
      if (nom_v.test(nom.value) == false) {
        e.preventDefault();
        nom_m.textContent = 'Format incorrect';
        nom_m.style.color = 'red';
        nom_m.style.fontSize = '80%';
        this.checkFormName = false;
      } else {
        this.checkFormNameC = true;
        this.storageComputer(); // Appel de storageInfosB uniquement si le formulaire est rempli
        location = "jeux.html";
      }
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
