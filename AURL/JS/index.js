setInterval(() => {

    var playerAmt = document.getElementById("playerAmt");
    var game = document.getElementById("gameLive");

    playerAmt.innerHTML = "PLayer Amount: " + getPlayerAmt();

    if(getCookie("gameLive") == null) {

    game.innerHTML = "Game Live: No"
    } else if(getCookie(gameLive)) {
        game.innerHTML = "Game Live: Yes"
    } else {
        game.innerHTML = "Game Live: No"
    }
 }, 5)