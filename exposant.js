function exposant(base, exp) {
    if (exp === 0) {
        return 1;  
    }
    return base * exposant(base, exp - 1); 
}


console.log(exposant(2, 3));  
console.log(exposant(5, 4));  
console.log(exposant(10, 0)); 
