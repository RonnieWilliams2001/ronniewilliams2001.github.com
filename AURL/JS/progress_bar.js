function taskProgress() {

var progressBar = document.getElementById("taskProgress");

  if(!getCookie("amtTasks") && !getCookie("totalTasks")) {
    progressBar.innerHTML = "Task Progress: No Tasks";
  } else {

    progressBar.innerHTML = "Task Progress: No Tasks";progressBar.innerHTML = "Task Progress: " +  getCookie("amtTasks") + " / " + getCookie("totalTasks");
  }
}

const progressBar = document.getElementsByClassName('progress-bar')[0]
	setInterval(() => {

      taskProgress();
      const computedStyle = getComputedStyle(progressBar);
      const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0);
      progressBar.style.setProperty('--width', getCookie("totalTasks")/getCookie("amtTasks")*100 || 0)

    }, 5)