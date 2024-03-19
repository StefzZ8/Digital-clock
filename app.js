const clock = () => {
  let hrDots = document.getElementById('hrDots');
  let minDots = document.getElementById('minDots');
  let secDots = document.getElementById('secDots');

  let date = new Date();
  let hours = date.getHours() % 12;

  let amPm = date.getHours() >= 12 ? 'PM' : 'AM';
  hours = hours === 0 ? 12 : hours;

  let minutes = date.getMinutes();
  let seconds = date.getSeconds();


  let secondsDots = ''
  for (let i = 1; i < 61; i++) {
    let rotation = i * 6;

    if (i === seconds) {
      secondsDots += '<div class="dot active" style="transform: rotate(' + rotation + 'deg)"></div>'
    } else {
      secondsDots += '<div class="dot" style="transform: rotate(' + rotation + 'deg)"></div>'
    }
  }

  let minutesDots = ''
  for (let i = 1; i < 61; i++) {
    let rotation = i * 6;

    if (i === minutes) {
      minutesDots += '<div class="dot active" style="transform: rotate(' + rotation + 'deg)"></div>'
    } else {
      minutesDots += '<div class="dot" style="transform: rotate(' + rotation + 'deg)"></div>'
    }
  }

  let hoursDots = ''
  for (let i = 1; i < 13; i++) {
    let rotation = i * 30;

    if (i === hours) {
      hoursDots += '<div class="dot active" style="transform: rotate(' + rotation + 'deg)"></div>'
    } else {
      hoursDots += '<div class="dot" style="transform: rotate(' + rotation + 'deg)"></div>'
    }
  }

  hrDots.innerHTML = hoursDots + '<b>' + amPm + '</b>' +
    '<h2>' + addZeroInSigleDigits(hours) + '<br><span>Hours</span></h2 > ';
  minDots.innerHTML = minutesDots + '<h2>' + addZeroInSigleDigits(minutes) +
    '<br><span>Minutes</span></h2 > ';
  secDots.innerHTML = secondsDots + '<h2>' + addZeroInSigleDigits(seconds) +
    '<br><span>Seconds</span></h2 > ';
}

const addZeroInSigleDigits = (number) => {
  if (number < 10) {
    return '0' + number
  }
  return number;
}

setInterval(clock, 1000);