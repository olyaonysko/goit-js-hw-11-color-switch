import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startButton: document.querySelector('[data-action="start"]'),
  stopButton: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

const changeColor = {
  isActive: false,
  intervalId: null,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    // refs.startButton.disabled = true;
    // refs.stopButton.disabled = false;
    this.intervalId = setInterval(() => {
      refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    // refs.stopButton.disabled = true;
    // refs.startButton.disabled = false;
    this.intervalId = null;
    this.isActive = false;
  },
};

refs.startButton.addEventListener('click', changeColor.start.bind(changeColor));
refs.stopButton.addEventListener('click', changeColor.stop.bind(changeColor));
