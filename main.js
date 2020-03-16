'use strict'
console.log('funcionando ;D')
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

let secConf = document.querySelector('#sec');
let minConf = document.querySelector('#min');
let hourConf = document.querySelector('#hour');


function confinaTime() {
    const initDate = new Date(2020, 2, 15);
    const now = new Date();
    let diff = now.getTime() - initDate.getTime()
    let sec = diff / 1000;
    let min = sec / 60;
    let hour = min / 60;
    let hours = Math.floor(hour)
    let minutes = Math.floor(min);
    let seconds = Math.floor(sec)
    diff = diff - (hour - min);
    console.log(hours, minutes, seconds)
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
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    const hours = now.getHours();
    const hoursDegrees = ((hours / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);
confinaTime();
