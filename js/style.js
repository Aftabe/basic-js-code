(function () {
    var buttons = document.getElementsByTagName("button");

    for (var i = 0, len = buttons.length; i < len; i = i + 1) {
        buttons[i].onclick = function () {
            var className = this.innerHTML.toUpperCase();

            document.body.className = className;
        };
    }
}());    

(function(){
    function changeSomeThing(pra){
        var text;
        if(pra == 1){
            
        }
    }
}());