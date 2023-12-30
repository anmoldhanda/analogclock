const hourhand = document.getElementById("hourhand");
const minutehand = document.getElementById("minutehand");
const secondhand = document.getElementById("secondhand");
// =============== update time ===============
setInterval(() => {
  const currentdatetime = new Date();
  const hours = currentdatetime.getHours();
  const minutes = currentdatetime.getMinutes();
  const seconds = currentdatetime.getSeconds();
  const hourrotation = 30 * hours + minutes / 2;
  const minuterotation = 6 * minutes;
  const secondrotation = 6 * seconds;
  // =============== rotate bars with respective to current time ===============
  hourhand.style.transform = `rotate(${hourrotation}deg)`;
  minutehand.style.transform = `rotate(${minuterotation}deg)`;
  secondhand.style.transform = `rotate(${secondrotation}deg)`;
}, 1000);
