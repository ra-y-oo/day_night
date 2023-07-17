let time = document.getElementById('time');
const body = document.body;
const night = document.getElementById('night');
const day = document.getElementById('day');

function updateTime() {
    const currentTime = new Date().toLocaleTimeString();

    time.innerHTML = currentTime;
}

setInterval(updateTime, 1000);
function changeTime() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 0 && currentHour < 18) {
        body.style.backgroundImage = 'url(./img/day.jpg)';
    } else {
        body.style.backgroundImage = 'url(./img/night.jpg)';
    }
  }

  changeTime();

day.addEventListener('click', () => {
    body.style.backgroundImage = 'url(./img/day.jpg)';
    body.classList.replace('night', 'day');
})
night.addEventListener('click', () => {
    body.classList.replace('day', 'night');
    body.style.backgroundImage = 'url(./img/night.jpg)';
})
