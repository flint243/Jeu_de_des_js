class ReglageClass {
  constructor() {

    let btn = document.getElementById('makeChoice');
    // Modifiez le style du bouton pour le rendre visible
    btn.style.display = 'none'; // ou 'inline-block' selon votre mise en page

    // click dé n°1
    const choix1 = document.getElementById('btnChoixDe2');
    choix1.addEventListener('click', this.rendreDeN3_Invisible.bind(this));

    if (localStorage.getItem('DeNumero2')) {
      rendreDesTrois_Invisibles();

      const deVisible3 = document.querySelector('.leDeTrois');
      deVisible3.style.display = 'none';
      const resultatDivTrois = document.getElementById('resultatTrois');
      resultatDivTrois.style.display = 'none';

      $("#bandeauInfos").text(localStorage.DeNumero2);
      console.log('Dé N°2 présent');
    }

    //-------------- STOCKAGE PRENOM A ---------------------
    if (localStorage.getItem('prenomA')) {
      $('#joueurA').val(localStorage.getItem('prenomA'));
      $("#bandeauInfos").text(localStorage.prenomA).css({ 'backgroundColor': 'white', 'color': 'red' });
      console.log('Joueur A présent');
    }

    //-------------------------------------------------------------//
     // click dé 3
     const choix2 = document.getElementById('btnChoixDe3');
     choix2.addEventListener('click', this.rendreDeN3_Visible.bind(this));
     
    if (localStorage.getItem('DeNumero3')) {
      rendreDesTrois_Visibles();

      const deVisible3 = document.querySelector('.leDeTrois');
      deVisible3.style.display = 'block';

      const resultatDivTrois = document.getElementById('resultatTrois');
      resultatDivTrois.style.display = 'block';

      //$("#bandeauInfos").text(localStorage.DeNumero3);
      console.log('Dé N°3 présent');
    }

    if (localStorage.getItem('prenomA')) {
      $('#joueurA').val(localStorage.getItem('prenomA'));
      $("#bandeauInfos").text(localStorage.prenomA).css({ 'backgroundColor': 'white', 'color': 'red' });
      console.log('Joueur A présent');
    }

  }


  // Fonction pour rendre le dé n°3 invisible
  rendreDeN3_Invisible(e) {
    const desTrois = document.querySelectorAll('.leDeTrois .leDeTroisWrap div[class^="deTrois"]');
     if (this.deTrois = true) {
      e.preventDefault();
      this.choix1 = true;
      this.storageInfosDeN2();
    }
  }

  storageInfosDeN2() {
    if (this.choix1) {
      localStorage.setItem('DeNumero2', $('#btnChoixDe2'));

      let btn = document.getElementById('makeChoice');
      btn.style.display = 'block';
      console.log('dé n°2 stocké');
    }
  }

  /************************************* TROIS DES  ******************************/

  // Fonction pour rendre le dé n°3 visible
  rendreDeN3_Visible(e) {
    const desBis = document.querySelectorAll('.leDeBis .leDeBisWrap div[class^="deBis"]');
    if (this.deBis = true) {
      e.preventDefault();
      this.choix2 = true;
      this.storageInfosDeN3();
    }
  }

  storageInfosDeN3() {
    if (this.choix2) {
      localStorage.setItem('DeNumero3', $('#btnChoixDe3'));

      let btn = document.getElementById('makeChoice');
      btn.style.display = 'block';
      console.log('dé n°3 stocké');
    }
  }

  /*
  if(storageInfosDeN2){
    localStorage.clear();
  }else
  if(storageInfosDeN3){
    localStorage.clear();
  }
*/
}

new ReglageClass();
