function endAll() {

    setCookie("gameLive", false, 1);
    deleteCookie("O2");
}

function deleteAll() {

    deleteCookie("gameLive");
    deleteCookie("playerAmt");
    deleteCookie("imposterAmt");
}