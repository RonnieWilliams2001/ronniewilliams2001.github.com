setInterval(() => {

     var startBut = document.getElementById("startButton");
     var settingsBut = document.getElementById("settingsButton");

     if(getPlayerAmt() > 4) {

         startBut.disabled = false;
     } else {

         startBut.disabled = true;
     }

     if(localStorage.getItem("username") == "Ronaldi2001") {

        settingsBut.disabled = false;
     } else {

     settingsBut.disabled = true;
     }
 }, 5)

 var modal = document.getElementById("settingsModal");
 var settingsBtn = document.getElementById("settingsButton");
 var leaveBtn = document.getElementById("leaveButton");
 var span = document.getElementsByClassName("close")[0];

 settingsBtn.onclick = function() {
   modal.style.display = "block";
 }

  settingsBtn.onclick = function() {

    var id = localStorage.getItem("playerId");

    deleteCookie("player" + id);
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    location.href("index.html");
  }

 span.onclick = function() {
   modal.style.display = "none";
 }

 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }