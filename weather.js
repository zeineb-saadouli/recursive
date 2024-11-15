//exercice3
function Weather(temp,weather){
    if (temp<0 && weather===true ){ 
        weather? console.log('il pleut')  : console.log('il ne pleut pas' )
        console.log(`la temperature est ${temp} il est trop froid et je vous conseille de ne pas sortir`);
    } else if  (temp>0 && temp<=15 && weather===true ){
        weather? console.log('il pleut')  : console.log('il ne pleut pas' )
        console.log(`la temperature est ${temp} il est trop froid et je vous conseille de bien porter`);
    }    else if (temp>=15 && weather===false){
        wearther? console.log('il pleut')  : console.log('il ne pleut pas' )
        console.log(`la temperature est ${temp} il est beauet je vous conseille de sortir`);
    }   
}
Weather(10,true);