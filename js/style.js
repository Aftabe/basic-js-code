// 'for loops' in javaScript

for (var i = 0; i < 2; i = i + 1) {
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

(function(){
  let sE = document.getElementsByTagName('h3').innerHTML;
  let md = sE.toUppercase();
  let mE = document.getElementsByTagName('h3').innerHTML = md;
}());
