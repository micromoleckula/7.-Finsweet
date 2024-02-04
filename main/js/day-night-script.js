let dayNight = document.getElementById('style-css');
let btnTheme = document.getElementById('btn-dark');

btnTheme.onclick = function () {
  if (dayNight.getAttribute("href") == "/main/styles/day.css") {
    dayNight.href = "/main/styles/night.css";
    console.log('night')
  } else {
    dayNight.href = "/main/styles/day.css";
    console.log('day')
  }
  console.log('day-night')
}
