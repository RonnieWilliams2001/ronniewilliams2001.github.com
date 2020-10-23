setInterval(() => {

    var playerAmt = document.getElementsById("playerAmt");
    var game = document.getElementsById("gameLive");

    playerAmt.innerHTML = "PLayer Amount: " + getPlayerAmt();

    if(getCookie("gameLive") == null) {

    game.innerHTML = "Game Live: No"
    } else if(getCookie(gameLive)) {
        game.innerHTML = "Game Live: Yes"
    } else {
        game.innerHTML = "Game Live: No"
    }
 }, 5)