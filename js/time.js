const targetDate = new Date('December 19, 2025 00:00:00').getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor(distance % (1000 * 60) / 1000);

    document.getElementById('timer').innerHTML = days + 'дн. ' + hours + 'ч. ' + minutes + 'мин. ' + seconds + 'сек.';

    if(distance < 0) {
        clearInterval(timerInternal);
        document.getElementById('timer').innerHTML = 'Завершено!';
    }
}

const timerInternal = setInterval(updateTimer, 1000);