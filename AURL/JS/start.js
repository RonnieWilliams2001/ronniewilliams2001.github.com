function startAll() {

    setCookie("gameLive", true, 1);
    setCookie("playerAmt", getPlayerAmt(), 1);
    setCookie("imposterOne", "", 1);
    setCookie("imposterTwo", "", 1);
    setImposter();
    setCookie("O2", true, 1);

}