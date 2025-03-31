const body = document.querySelector("body")
const clock = document.querySelector(".clock")
const second = document.querySelector(".second")
const minute = document.querySelector(".minute")
const hour = document.querySelector(".hour")
const switchMode = document.querySelector(".mode-switch")

const updateTime = () => {
    let date = new Date()
    let setToDegSec = ((date.getSeconds() / 60) * 360)
    let setToDegMin = ((date.getMinutes() / 60) * 360)
    let setToDegHr = ((date.getHours() / 12) * 360)

    second.style.transform = `rotate(${setToDegSec}deg)`;
    minute.style.transform = `rotate(${setToDegMin}deg)`;
    hour.style.transform = `rotate(${setToDegHr}deg)`;

}

const handleMode = () => {
    switchMode.addEventListener('click', () => {
        body.classList.toggle("body-dark")
        switchMode.classList.toggle("white-btn")
        clock.classList.toggle("clock-dark")
        minute.classList.toggle("minute-dark")

        !switchMode.classList.contains("white-btn") ? switchMode.innerText = "Dark Mode" : switchMode.innerText = "Light Mode"
    })
}

setInterval(updateTime, 1000)