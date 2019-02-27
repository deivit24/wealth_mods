// Date for Header

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];

let today = new Date();
let date = (monthNames[today.getMonth()]) + '-' + today.getDate() + '-' + today.getFullYear();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  setTimeout(showTime, 1000);

}
showTime();

document.getElementById('date').innerHTML = date;


// making cards in start here page a link!

document.getElementById("about").onclick = function () {
  location.href = "start-here.html";
};
document.getElementById("tool").onclick = function () {
  location.href = "tool.html";
};
document.getElementById("blog").onclick = function () {
  location.href = "wealth-mods-101.html";
};