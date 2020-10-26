setInterval(() => {

    var oneBut = document.getElementById("1imposter");
    var twoBut = document.getElementById("2imposter");
    var imposterAmt = document.getElementById("imposterAmt");

    if((getCookie("imposterAmt") == 2) || getCookie("imposterAmt") == null) {

        oneBut.disabled = false;
        } else {

        oneBut.disabled = true;
    }

    if(getPlayerAmt() > 6 && getCookie("imposterAmt") == 1) {

        twoBut.disabled = false;
        } else {

        twoBut.disabled = true;
    }

    if(getCookie("imposterAmt")) {

    imposterAmt.innerHTML = "Imposter Amount: " + getCookie("imposterAmt");
    } else {

    imposterAmt.innerHTML = "Imposter Amount: 0";
    }
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
