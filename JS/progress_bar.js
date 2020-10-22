const progressBar = document.getElementsByClassName('progress-bar')[0]
setInterval(() => {

setCookie("progress", 65, 1);

	const location = getCookie("progress") || 0;
  const computedStyle = getComputedStyle(progressBar)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  progressBar.style.setProperty('--width', location)

}, 5)