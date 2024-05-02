// Fonction qui génère un nombre aléatoire
// Retourne le nombre
const lancerDer = function (){
    // Gérer un nombre entre 1 et 6
    const nombreDecimal = (Math.random() * 6) + 1
    const nombre = Math.trunc(nombreDecimal)
    // Retourner ce nombre
    return nombre
}

// Afficher le résultat