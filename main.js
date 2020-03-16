'use strict'

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

let secConf = document.querySelector('#sec');
let minConf = document.querySelector('#min');
let hourConf = document.querySelector('#hour');


function confinaTime() {
    const initDate = new Date(2020, 2, 15);
    const today = new Date();
    let diff = today - initDate
    let sec = diff / 1000;
    let min = sec / 60;
    let hour = min / 60;
    let hours = Math.floor(hour)
    let minutes = Math.floor(min % 60);
    let seconds = Math.floor(sec % 60)
    diff = diff - (hour - min);
    secConf.innerHTML = seconds.toString();
    minConf.innerHTML = minutes.toString();
    hourConf.innerHTML = hours.toString();
}
function setDate() {
    const now = new Date()
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    const hours = now.getHours();
    console.log(hours)
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);
setInterval(confinaTime, 1000);
