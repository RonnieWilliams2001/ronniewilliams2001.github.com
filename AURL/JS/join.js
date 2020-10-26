function onJoin() {

    var id = 1;

    while(id<15) {

        if(getCookie("gameLive") != null) {

            alert("There is a game in progress, please wait till game is done");
            break;
        }

        if(id == 15){

            alert("The game is full");
            break;
        }

        if(getCookie("player" + id) == null) {

            setCookie("player"+ id, localStorage.getItem("username"), 1);
            localStorage.setItem("playerId", id);
            document.getElementById("LogInModal").style.display = "none";
            break;
        }

        id++;
    }
}