function join() {

    var id = 1;

    while(id<15) {

        if(getCookie("gameLive")) {

        alert("There is a game in progress, please wait till game is done");
        break;
        }

        if(getCookie("player" + id)) {

        id++;
        setCookie("player"+ id, localStorage.getItem("username"), 1);
        localStorage.setItem("playerId", id);
        location.href("/Pages/hub.html");
        break;
        }
    }

    if(id == 15) alert("The game is full");
}