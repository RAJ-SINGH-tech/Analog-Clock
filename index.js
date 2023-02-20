const hEl = document.querySelector('.hour');
const mEl = document.querySelector('.minute');
const sEl = document.querySelector('.second');

function updateClock() {
    const cDate = new Date();

    const h = cDate.getHours();
    const m = cDate.getMinutes();
    const s = cDate.getSeconds();

    const hDeg = (h/12)*360;
    hEl.style.transform = `rotate(${hDeg}deg)`;
    const mDeg = (m/60)*360;
    mEl.style.transform = `rotate(${mDeg}deg)`;
    const sDeg = (s/60)*360;
    sEl.style.transform = `rotate(${sDeg}deg)`;
}

setInterval(updateClock, 1000);