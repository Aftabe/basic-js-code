// 'for loops' in javaScript
let index = 'This is a string value';
for (var i = 0, len = index.length; i < len; i = i + 1) {
  alert(i);
};

var names = ["Welcome", "Jigars",];
for (var i = 0; i < names.length; i = i + 1) {
  var name = names[i];

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
var txt = parseInt('44', 10);
var float = parseFloat('55.32', 10);


alert(txt);
alert(float);




(function(){
  let sE = document.getElementsByTagName('h3').innerHTML;
  let md = sE.toUppercase();
  let mE = document.getElementsByTagName('h3').innerHTML = md;
}());

