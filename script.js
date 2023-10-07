function updateClock() {
  var now = new Date();
  var day = now.getDate();
  var month = now.getMonth() + 1; // Months are 0-based
  var year = now.getFullYear();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  const dayIndex = now.getDay();
  const dayName = daysOfWeek[dayIndex];
  // Add leading zeros to minutes and seconds
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (hours > 12) {
    document.getElementById("hour").textContent = hours - 12 + "PM";
  } 
   else if (hours === 12) {
    document.getElementById("hour").textContent = hours  + "PM";
  } 
  else {
    document.getElementById("hour").textContent = hours + "AM";
  }
  document.getElementById("min").textContent = minutes + "M";
  document.getElementById("sec").textContent = seconds + "S";
  document.getElementById("day").textContent = day +dayName;
  document.getElementById("month").textContent = month + "M";
  document.getElementById("year").textContent = year + "Y";
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display clock immediately
updateClock();
