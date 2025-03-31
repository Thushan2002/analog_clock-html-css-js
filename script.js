const body = document.querySelector("body")
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

    console.log("min", setToDegMin);
    console.log("sec", setToDegSec);
    console.log("hr", setToDegHr);

}

setInterval(updateTime, 1000)