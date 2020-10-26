var LogInModal = document.getElementById("LogInModal");
var SettingsModal = document.getElementById("SettingsModal");
var UsernameModal = document.getElementById("UsernameModal");
var startBut = document.getElementById("startButton");
var settingsBut = document.getElementById("settingsButton");

setInterval(() => {

    var username = localStorage.getItem("username");
    var id = localStorage.getItem("id");

    //SETTING USERNAME FROM LOCAL STORAGE

    if(username != null && id != null && username != getCookie("player" + id)) {

        setCookie("player" + id, username, 1);
    }

    //SET USERNAME INPUT FROM LOCAL STORAGE
    if(id == null) {

        if(username != null) document.getElementById("username").setAttribute("value", localStorage.getItem("username"));
        LogInModal.style.display = "block";
    }

    //DISABLE/ENABLE START BUTTON

    if(getPlayerAmt() > 4) {

        startBut.disabled = false;
    } else {

        startBut.disabled = true;
    }

    //ALLOW SETTINGS CHANGE

    if(username == "Ronaldi2001") {

        settingsBut.disabled = false;
    } else {

        settingsBut.disabled = true;
    }
}, 5)

var settingsBtn = document.getElementById("settingsButton");
var leaveBtn = document.getElementById("leaveButton");
var span = document.getElementsByClassName("close")[0];

ChangeUsername = function() {

    localStorage.setItem("username", document.getElemtById("NewUsername"));

}


LeaveGame = function() {

    var id = localStorage.getItem("playerId");

    deleteCookie("player" + id);
    localStorage.removeItem("id");
}