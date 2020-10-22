function taskProgress() {

var progressBar = document.getElementById("taskProgress");

  if(getCookie("amtTasks") == null && getCookie("totalTasks") == null) {
  	progressBar.innerHTML = "Task Progress: No Tasks";
  } else {

  	progressBar.innerHTML = "Task Progress: No Tasks";progressBar.innerHTML = "Task Progress: " +  getCookie("amtTasks") + " / " + getCookie("totalTasks");
  	setCookie("progress", totalTasks/amtTasks*100 || 0, 1);
  }
}

const progressBar = document.getElementsByClassName('progress-bar')[0]
	setInterval(() => {

  taskProgress();
	const location = getCookie("progress") || 0;
  const computedStyle = getComputedStyle(progressBar)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  progressBar.style.setProperty('--width', location)

}, 5)