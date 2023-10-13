function printTime(){
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let mins = currentDate.getMinutes();
  let secs = currentDate.getSeconds();

  document.write(hours + ":" + mins + ":" + secs +"\n");
}

setInterval(printTime, 1000); // prints current time each second