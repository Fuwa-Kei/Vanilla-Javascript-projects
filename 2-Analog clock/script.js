const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds /60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`

    const minutes = now.getMinutes();
    const minuteDegree = ((minutes /60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`

    const hours = now.getHours();
    const hourDegree = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(setDate, 1000);