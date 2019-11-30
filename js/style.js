// 'for loops' in javaScript

for (var i = 0; i < 10; i = i + 1) {
  alert(i);
};

var names = ["ALi", "Khaliq", "Hassan", "Sadiq"];
for (var i = 0; i < names.length; i = i + 1) {
  var name = names[i];

  alert(name);
};

// js event handler

(function () {
  var el = document.getElementById('div-class');

  el.onclick = function () {
    this.style.backgroundColor = 'green';
  };

}());