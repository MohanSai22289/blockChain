function leapYearCheck(year) {

  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      alert(year + ' is a leap year');
  } else {
      alert(year + ' is not a leap year');
  }
}
const year = prompt('Enter a year:');

leapYearCheck(year);

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    alert(message);
}
cToF(10);
function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    alert(message);
}
fToC(23);

function factorial(){
  const number = prompt('Enter a Number:');
  let  i,fact=1;        
    for(i=1;i<=number;i++){    
      fact=fact*i;    
  }    
  alert("Factorial is:"+fact); 
}

factorial();