 // js event handler
  (function () {
    var el = document.getElementById('div-class');
    el.onclick = function() {

      el.textContent = 'Click me!';
      el.style.backgroundColor = 'blue';
    };
    

  }());

// parseInt and parsFloat function
var txt = parseInt('53', 10); // Changing string to intigar number
var float = parseFloat('77.32', 10); // changing string to decimal number


// alert(txt);
// alert(float);


// This is how jv math object works
document.getElementById("demo").innerHTML =
  Math.min(0, 150, 73, 20, -21, -200);

document.getElementById("test").innerHTML =
  Math.max(0, 150, 85, 20, -8, -200);


document.getElementById("demo").innerHTML =
  Math.min(-30, -20, -10, 0, 10, 20, 30);

// How to add 'unorder' or 'order' lists to html page.
var cars, cLen, text, i;
cars = ['BM', 'Benz', 'Ford', 'Toyota'];
cLen = cars.length;

text = '<ol>';
for (i = 0; i < cLen; i++) {
  text += '<li>' + cars[i] + '</li>';
}
text += '</ol>';

document.getElementById('demo').innerHTML = text;
(function(){
var buttons = document.getElementsByTagName("button");

for(var i = 0, len = buttons.length; i < len; i = i +1) {
  buttons[i].onclick = function(){
    var className = this.innerHTML.toLowerCase();

    document.body.className = className;
  };
}
}());