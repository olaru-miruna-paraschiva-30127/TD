var counterD = 10;

 function printValue ( divId , value ){
 document.getElementById ( divId ).innerHTML = value ;
 }
printValue ("counterD", counterD) ;

 document.getElementById ("incD").addEventListener("click",increment ) ;

 function increment () {
 if(counterD>=1&&counterD<=10)counterD--;
 printValue ("counterD", counterD );
 }