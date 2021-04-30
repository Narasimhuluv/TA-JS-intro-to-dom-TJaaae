setInterval(setClock, 1000);

let hourHand = document.querySelector(".hour")
let minuteHand = document.querySelector(".minute")
let secondHand = document.querySelector(".second")


function setClock(){
    let currentDate = new Date();
    let Seconds = currentDate.getSeconds() / 60;
    let minutes = (Seconds + currentDate.getMinutes()) /60;
    let hours = (minutes + currentDate.getHours()) / 12

    setRotation(secondHand,Seconds)
    setRotation(minuteHand,minutes);
    setRotation(hourHand, hours);
   
}

function setRotation(elem, rotationRatio){
    elem.style.setProperty(`--rotation`, rotationRatio * 360)
}
setClock()