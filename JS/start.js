
function getPlayerAmt() [

    var playerAmt = 0;

    for(var i = 1; i <16; i++) {

        if(getCookie("player" + String(i))) playerAmt++;
    }

    return playerAmt;
]

function startAll() {

    setCookie("gameLive", true, 1)
    setCookie("playerAmt", getPlayerAmt(), 1);
    setCookie("imposterAmt", getImposterAmt(), 1);
    setCookie("O2", true, 1);

}

