(function () {
    var buttons = document.getElementsByTagName("button");

    for (var i = 0, len = buttons.length; i < len; i = i + 1) {
        buttons[i].onclick = function () {
            var className = this.innerHTML.toLowerCase();

            document.body.className = className;
        };
    }
}()); 
(function () {
    var btns = document.getElementsByTagName("button");

    for (var i = 0, len = btns.length; i < len; i = i + 1) {
        btns[i].onclick = function () {
            // var className = this.innerHTML.toLowerCase();
            var inneCont = this.innerHTML.toUpperCase();

            document.body.className = inneCont;
        };
    }
}()); 

