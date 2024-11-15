function LeapYearChecker(year) {
    if((year % 4 === 0 && year % 100 !== 0)|| (year % 400 === 0)){
        console.log(`${year} est bissextile`);
    }else{
        console.log(`${year} non bissextile`);
    }
    
}
LeapYearChecker(2024);
