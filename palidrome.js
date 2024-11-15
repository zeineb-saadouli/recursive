function isPalindrome(str) {
    // Nettoyer la chaîne (enlever les espaces, ponctuation et majuscules)
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Cas de base : si la chaîne a une longueur de 0 ou 1, elle est un palindrome
    if (str.length <= 1) {
        return true;
    }

    // Vérifier les caractères aux extrémités
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.substring(1, str.length - 1));  // Appel récursif
    } else {
        return false;  // Si les caractères ne correspondent pas
    }
}

// Exemple d'utilisation
console.log(isPalindrome("A man, a plan, a canal, Panama"));  // Sortie: true
console.log(isPalindrome("Hello, World!"));  // Sortie: false
