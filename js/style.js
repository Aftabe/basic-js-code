// 'for loops' in javaScript
let index = 'This is a string value';
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
    
    el.style.backgroundColor = 'grey';
  };
  
}());

// parseInt and parsFloat function
var txt = parseInt('44', 10);
var float = parseFloat('55.32', 10);


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
