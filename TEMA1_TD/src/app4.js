var a1,a2,a3,a4;
var second, first ;
$('#firstNumber').keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
       first =  $( '#firstNumber').val() ;
       printValue("show1",first)

  }
});

//$('#a').click(printValue("show2","+"));
$(document).ready(function()
{
$("#a").click(function()
{a1 = 1;
a2=0;
a3=0;
a4=0;
printValue("show2","+")
});

$("#s").click(function()
{a2 = 1;
a1=0;
a3=0;
a4=0;
printValue("show2","-")
});

$("#m").click(function()
{a3 = 1;
a1=0;
a2=0;
a4=0;
printValue("show2","*")
});

$("#i").click(function()
{a4 = 1;
a1=0;
a2=0;
a3=0;
printValue("show2","/")
});
});

$('#secondNumber').keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
       second =  $( '#secondNumber').val() ;
       printValue("show3",second)

  }
});
$("#e").click(function()
{if(a1==1)printValue("r",add(first,second));
if(a2==1)printValue("r",subtract(first,second));
if(a3==1)printValue("r",multiply(first,second));
if(a4==1)printValue("r",divide(first,second));
});


function add(a,b){
return parseInt(a)+parseInt(b);
}

function subtract(a,b){
return parseInt(a)-parseInt(b);
}
function multiply(a,b){
return parseInt(a)*parseInt(b);
}
function divide(a,b){
return parseInt(a)/parseInt(b);
}
function printValue ( divId , value ){
$("#"+divId).html(value);
}


//if(a1==1)printValue("show2","+")

