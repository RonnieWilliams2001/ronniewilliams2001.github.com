function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("playerList");
  switching = true;

  while (switching) {

    switching = false;
    b = list.getElementsByTagName("LI");

		for (i = 0; i < (b.length - 1); i++) {

      shouldSwitch = false;

      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {

        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {

      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

	setInterval(() => {

        for(var i = 1; i < 16; i++) {

        document.getElementById("player" + i).innerHTML = getCookie("player" + i) || "";
        }

        sortList();

    }, 5)