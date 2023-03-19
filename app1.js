var counter = 0;

 function printValue ( divId , value ){
 document.getElementById ( divId ).innerHTML = value ;
 }
printValue ("counter", 0) ;

 document.getElementById ("inc").addEventListener("click",increment ) ;

 function increment () {
if(counter>=0&&counter<=9) counter ++;
 printValue ("counter", counter );
 }