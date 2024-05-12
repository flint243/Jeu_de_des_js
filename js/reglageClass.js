class ReglageClass {
  constructor() {

    let btn = document.getElementById('makeChoice');
    // Modifiez le style du bouton pour le rendre visible
    btn.style.display = 'none'; // ou 'inline-block' selon votre mise en page

    // click dé n°2
    const btnD2 = document.getElementById('btnChoixDe2');
    btnD2.addEventListener('click', this.game2D.bind(this));

    if (localStorage.getItem('DeNumero2')) {
      this.game2DVisible();
    }

    //-------------------------------------------------------------//
     // click dé 3
     const btnD3 = document.getElementById('btnChoixDe3');
     btnD3.addEventListener('click', this.game3D.bind(this));
     
    if (localStorage.getItem('DeNumero3')) {
      game3DVisible();
    }
  }

 /************************************* DEUX DES  ******************************/
  // Fonction pour rendre le dé n°3 invisible
  game2D() {     
      this.btnD2 = true;
      this.storageInfosDeN2();
  }

  storageInfosDeN2() {
    if (this.btnD2) {
      localStorage.setItem('DeNumero2', $('#btnChoixDe2'));

      let btn = document.getElementById('makeChoice');
      btn.style.display = 'block';
      console.log('dé n°2 stocké');
    }
  }

  /************************************* TROIS DES  ******************************/
  // Fonction pour rendre le dé n°3 visible
  game3D() {
      this.btnD3 = true;
      this.storageInfosDeN3();
  }

  storageInfosDeN3() {
    if (this.btnD3) {
      localStorage.setItem('DeNumero3', $('#btnChoixDe3'));

      let btn = document.getElementById('makeChoice');
      btn.style.display = 'block';
      console.log('dé n°3 stocké');
    }
  }
}
new ReglageClass();