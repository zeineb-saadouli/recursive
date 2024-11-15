//exercice 2
function VerifierAge(age){
    if(age<=12){
        console.log(`vous etes agés de ${age} votre ticket coute 10 $`);
    }else if(age<=17 && age>=13) {
        console.log(`vous etes agés de ${age} votre ticket coute 15 $`);
    }else if(age>=18) {
        console.log(`vous etes agés de ${age} votre ticket coute 20 $`);
    }
}
VerifierAge(15);
  