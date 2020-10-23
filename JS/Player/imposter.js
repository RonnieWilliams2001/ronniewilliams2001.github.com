setInterval(() => {

    var one = document.getElementsById("1imposter");
    var two = document.getElementsById("2imposter");
    var imposterAmt = document.getElementsByClassName("imposterAmt");

    if(getPlayerAmt() > 6 && (getCookie("imposterAmt") = 1) || !getCookie("imposterAmt")) {

        setOneImposter();
        two.disabled = false;
        } else {

        two.disabled = true;
    }

    if(getCookie("imposterAmt") = 2) {

        setTwoImposter();
        one.disabled = false;
        } else {

        one.disabled = true;
    }

    imposterAmt[0].innerHTML = "Imposter Amount: " + getCookie("imposterAmt") || 0;
    imposterAmt[1].innerHTML = "Imposter Amount: " + getCookie("imposterAmt") || 0;
 }, 5)

function setOneImposter() {

    setCookie("imposterAmt", 1, 1);
}

function setTwoImposter() {

    setCookie("imposterAmt", 2, 1);
}

function setImposter() {

    var playerAmt = getCookie("playerAmt");
    var oneNum = Math.floor((Math.random() * playerAmt) + 1);
    var twoNum;
    var oneName = getCookie("player" + oneNum);

    if(getCookie("imposterAmt") == 2 && getCookie("gameLive")) {

		var name = true;
        while(name) {

            twoNum = Math.floor((Math.random() * playerAmt) + 1);
            if(oneNum != twoNum) name = false;
        }
        var twoName = getCookie("player" + twoNum);
        setCookie("imposterTwo", twoName, 1);
    }

    setCookie("imposterOne", oneName, 1);

}