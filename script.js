let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${quarterHour(hour, minute)}deg)`;
     
    function quarterHour(hour, minute) {
        let hDeg = ((360 / 12) * hour) - 90;
       
        let Quarter;
        if(minute >= 15 && minute < 30) {
            Quarter = hDeg + 7.5;
        } else if(minute >= 30 && minute < 45) {
            Quarter = hDeg + 15;
        } else if(minute >= 45) {
            Quarter = hDeg + 22.5;
        } else {
            Quarter = hDeg;
        }
        return Quarter;
    };
    
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();