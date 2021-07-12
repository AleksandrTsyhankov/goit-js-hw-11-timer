const body = document.querySelector('body');

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;

        this.timerScreen = document.querySelector(this.selector);
        this.daysCount = this.timerScreen.querySelector('span[data-value="days"]');
        this.hoursCount = this.timerScreen.querySelector('span[data-value="hours"]');
        this.minutesCount = this.timerScreen.querySelector('span[data-value="mins"]');
        this.secondsCount = this.timerScreen.querySelector('span[data-value="secs"]');

        this.start();
    };

    pad(value) {
         return String(value).padStart(2, '0');
};

    calcTimer(time) {
        const daysCalculated = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hoursCalculated = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const minutesCalculated = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secondsCalculated = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
        return { daysCalculated, hoursCalculated, minutesCalculated, secondsCalculated };
};

    start() {     
        const currentDate = new Date();
        let time = currentDate - this.targetDate;

        setInterval(() => {
            time -= 1000;
            if (time < 0) {
                return;
            }

            const { daysCalculated, hoursCalculated, minutesCalculated, secondsCalculated } = this.calcTimer(time);
            
            this.daysCount.textContent = `${daysCalculated}`
            this.hoursCount.textContent = `${hoursCalculated}`
            this.minutesCount.textContent = `${minutesCalculated}`
            this.secondsCount.textContent = `${secondsCalculated}`
        }, 1000);
    };
};

const timer = new CountdownTimer({
    selector: '#timer-1',
    // targetDate: new Date('Jul 17, 2019'),
    targetDate: new Date('Jul 12, 2021 20:28:40'),
});

