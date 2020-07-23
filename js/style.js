
// js switch statement
var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
//  Variables
var el = document.getElementById('div-class');
let normal = document.querySelector('.normal');


 // js event handler
  (function () {
    el.onclick = function(){
      el.style.backgroundColor = 'red';
      el.innerHTML = 'let us see';
      el.style.padding = '30px';
    }
    
    

  }());

// parseInt and parsFloat function
var txt = parseInt('53', 10); // Changing string to intigar number
var float = parseFloat('77.32', 10); // changing string to decimal number


// alert(txt);
// alert(float);


// This is how jv math object works
document.getElementById("demo1").innerHTML =
  Math.min(0, 150, 73, 20, -21, -200);

// How to add 'unorder' or 'order' lists to html page.
var cars, cLen, text, i;
cars = ['BM', 'Benz', 'Ford', 'Toyota'];
cLen = cars.length;

text = '<ol>';
for (i = 0; i < cLen; i++) {
  text += '<li>' + cars[i] + '</li>';
}
document.getElementById("demo").innerHTML = "Today is " + day;
// new date and using getDay method
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.write(days[d.getDay()]);
document.getElementById('demo').innerHTML = text;

(function(){
var buttons = document.getElementsByTagName("button");
document.getElementById('demo-clock').innerHTML = days[d.getDay()];

console.log(days[d.getDay()]);
    document.body.className = className;
  };
}
}());

(function(){
var text1 = doSomeColculation(2, 2);


var text2 = doSomeColculation(3, 2);



function doSomeColculation(paramOne, paramTwo){
  paramOne = paramOne + 1;
  paramOne = paramOne + 5;
  paramOne = paramOne * 8;
  return paramOne + paramTwo;
}



alert(text1);
alert(text2);

});

// This is a new js block
(function(){
 let tryBtn =  document.querySelector('.try');
 tryBtn.onclick = function(){
   document.querySelector('.alert').textContent = Math.min(12, 33, 99, -7);
 }

})();

// let divClass = document.getElementById('div-class');

normal.onclick = function(){

  el.style.backgroundColor = 'white';
  // divClass.innerHTML = 'let us see';
  el.style.padding = '1px';
}
