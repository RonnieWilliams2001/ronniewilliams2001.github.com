function getPlayerAmt() {

    var playerAmt = 0;

    for(var i = 1; i <16; i++) {

        if(getCookie("player" + String(i))) playerAmt++;
    }

    return playerAmt;
}