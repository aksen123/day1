const night = document.querySelector(".night");
const body = document.querySelector("body")

night.onclick = () => {
  body.classList.toggle("dayNight")
  if(body.classList.contains("dayNight")) {
    night.innerHTML = "day"
  } else {
    night.innerHTML = "night"
  }
}