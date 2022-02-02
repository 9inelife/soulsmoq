const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);


function countdown() {
  const valDate = new Date('feb 6, 2022 18:00:00').getTime();

  //getTime helps to convert date to min seconds
  const curentDate = new Date().getTime();
  const diff = valDate - curentDate;
  // console.log(diff);

  const seconds = 1000;
  const minute = seconds * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // calculate time
  const valDay = Math.floor(diff / day);
  const valHour = Math.floor((diff % day) / hour);
  const valminute = Math.floor((diff % hour) / minute);
  const valSeconds = Math.floor((diff % minute ) / seconds)

  document.querySelector('#day').innerText = valDay;
  document.querySelector('#hours').innerText = valHour;
  document.querySelector('#minute').innerText = valminute;
  document.querySelector('#seconds').innerText = valSeconds;

  

}

setInterval(countdown, 1000);
