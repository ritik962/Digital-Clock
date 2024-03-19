const hourEl = document.querySelector("#hours");
const minuteEl = document.querySelector("#minutes");
const secondEl = document.querySelector("#seconds");

const ampmEl = document.querySelector("#am-pm");

const updataClock = () => {
  let hrs = new Date().getHours();
  let mins = new Date().getMinutes();
  let sec = new Date().getSeconds();

  let ampm = "AM";

  if (hrs > 12) {
    hrs = hrs - 12;
    ampm = "PM";
  }
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  sec = sec < 10 ? "0" + sec : sec;

  hourEl.innerText = hrs;
  minuteEl.innerText = mins;
  secondEl.innerText = sec;
  ampmEl.innerText = ampm;

  setTimeout(() => {
    updataClock();
  }, 1000);
};
updataClock();
