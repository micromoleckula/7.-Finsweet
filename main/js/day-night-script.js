let dayNight = document.getElementById('style-css');
let btnTheme = document.getElementById('btn-dark');

btnTheme.onclick = function () {
  if (dayNight.getAttribute("href") == "/main/styles/day/style.css") {
    dayNight.href = "/main/styles/night/style.css";
    console.log('night')
  } else {
    dayNight.href = "/main/styles/day/style.css";
    console.log('day')
  }
  console.log('day-night')
}
