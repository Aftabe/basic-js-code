// 'for loops' in javaScript
let index = 'This a string';
for (var i = 0, len = index.length; i < len; i = i + 1) {
  alert(i);
};

var persons = ["Welcome", "Jigars",];
for (var i = 0, len = names.length; i < len ; i = i + 1) {
  var name = persons[i];

  alert(name);
};

// js event handler
(function () {
  var el = document.getElementById('div-class');
  el.onclick = function() {
    
    el.style.backgroundColor = 'white';
  };
  
}());

// parseInt and parsFloat function
var txt = parseInt('53', 10);
var float = parseFloat('77.32', 10);


alert(txt);
alert(float);




(function(){
  let sE = document.getElementsByTagName('h3').innerHTML;
  let md = sE.toUppercase();
  let mE = document.getElementsByTagName('h3').innerHTML = md;
}());


// This is how jv math object works
document.getElementById("demo").innerHTML =
Math.min(0, 150, 30, 20, -8, -200);

document.getElementById("test").innerHTML =
Math.max(0, 150, 30, 20, -8, -200);


document.getElementById("demo").innerHTML =
Math.min(-30, -20, -10, 0, 10, 20, 30);

// How to add 'unorder' or 'order' lists to html page.
var cars, cLen, text, i;
cars = ['BM','Benz','Ford', 'Toyota'];
cLen = cars.length;

text = '<ol>';
for(i = 0; i < cLen; i++) {
    text += '<li>' + cars[i] + '</li>';
}
text += '</ol>';

document.getElementById('demo').innerHTML = text;
