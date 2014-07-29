
window.onload = function () {
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
    var cat = document.getElementById("cat");
    var meow = document.getElementById("meow");
    cat.addEventListener('click', function () {
        meow.play();
    });
};
