// new line of js code
var num = 7;

var str = num.toString(); // '7'

alert(str);

// To khow the data type using 'typeof'.
var num = 7;

var str = num.toString(); // '7'

alert(typeof str);


// 'for loops' in javaScript

for (var i = 0; i < 1; i = i + 1) {
  alert(i);
};

var names = ["ALi", "Khaliq",];
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

(function(){
  var sl = document.getElementsByTagName('h3').innerHTML;

  var ml = document.getElementsByTagName('h3').innerHTML = sl.toUppercase();
}());
