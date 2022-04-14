let crit = "";
let light = "";
let dark = "";
let roll_4 = "";
let roll_6 = "";
let roll_8 = "";
let roll_10 = "";
let roll_12 = "";
let roll_20 = "";
let roll_100 = "";
let color = "";
let rollX = "";
let lastAngle = 1;
let spinAmount = "";
let lock4 = "";
let lock6 = "";
let lock8 = "";
let lock10 = "";
let lock12 = "";
let lock20 = "";
let lock100 = "";
let clicks = 0;

function d4_roll() {
  let roll_4 = Math.floor(Math.random() * 4) + 1;
  const spanOutput = document.createElement("span");
  spanOutput.textContent = roll_4 + ",";
  logBox.prepend(spanOutput);
  const span = document.getElementById("bigText");
  span.classList.add("zoom");
  span.textContent = roll_4;

  rollX = roll_4;
  crit = 4;
  light = yellowLite;
  dark = yellow;
  color = "imgYellow";
  spinAmount = 360 / 4;

  if (roll_4 == 4) {
    lock4 = true;
    console.log(lock4);
  } else {
    lock4 = false;
  }

  spin();
  colorPop();
  setTimeout(removeZoom, 800);
  unlock();
}

function d6_roll() {
  let roll_6 = Math.floor(Math.random() * 6) + 1;
  const spanOutput = document.createElement("span");
  spanOutput.textContent = roll_6 + ",";
  logBox.prepend(spanOutput);
  const span = document.getElementById("bigText");
  span.classList.add("zoom");
  span.textContent = roll_6;

  rollX = roll_6;
  crit = 6;
  light = orangeLite;
  dark = orange;
  color = "imgOrange";
  spinAmount = 360 / 6;

  if (roll_6 == 6) {
    lock6 = true;
    console.log(lock6);
  } else {
    lock6 = false;
  }

  spin();
  colorPop();
  setTimeout(removeZoom, 800);
  unlock();
}

function d8_roll() {
  let roll_8 = Math.floor(Math.random() * 8) + 1;
  const spanOutput = document.createElement("span");
  spanOutput.textContent = roll_8 + ",";
  logBox.prepend(spanOutput);
  const span = document.getElementById("bigText");
  span.classList.add("zoom");
  span.textContent = roll_8;

  rollX = roll_8;
  crit = 8;
  light = redLite;
  dark = red;
  color = "imgRed";
  spinAmount = 360 / 8;

  if (roll_8 == 8) {
    lock8 = true;
    console.log(lock8);
  } else {
    lock8 = false;
  }

  spin();
  colorPop();
  setTimeout(removeZoom, 800);
  unlock();
}

function d10_roll() {
  let roll_10 = Math.floor(Math.random() * 10) + 1;
  const spanOutput = document.createElement("span");
  spanOutput.textContent = roll_10 + ",";
  logBox.prepend(spanOutput);
  const span = document.getElementById("bigText");
  span.classList.add("zoom");
  span.textContent = roll_10;

  rollX = roll_10;
  crit = 10;
  light = blueLite;
  dark = blue;
  color = "imgBlue";
  spinAmount = 360 / 10;

  if (roll_10 == 10) {
    lock10 = true;
    console.log(lock10);
  } else {
    lock10 = false;
  }

  spin();
  colorPop();
  setTimeout(removeZoom, 800);
  unlock();
}

function d12_roll() {
  let roll_12 = Math.floor(Math.random() * 12) + 1;
  const spanOutput = document.createElement("span");
  spanOutput.textContent = roll_12 + ",";
  logBox.prepend(spanOutput);
  const span = document.getElementById("bigText");
  span.classList.add("zoom");
  span.textContent = roll_12;

  rollX = roll_12;
  crit = 12;
  light = indigoLite;
  dark = indigo;
  color = "imgIndigo";
  spinAmount = 360 / 12;

  if (roll_12 == 12) {
    lock12 = true;
    console.log(lock12);
  } else {
    lock12 = false;
  }

  spin();
  colorPop();
  setTimeout(removeZoom, 800);
  unlock();
}

function d20_roll() {
  let roll_20 = Math.floor(Math.random() * 20) + 1;
  const spanOutput = document.createElement("span");
  spanOutput.textContent = roll_20 + ",";
  logBox.prepend(spanOutput);
  const span = document.getElementById("bigText");
  span.classList.add("zoom");
  span.textContent = roll_20;

  rollX = roll_20;
  crit = 20;
  light = violetLite;
  dark = violet;
  color = "imgViolet";
  spinAmount = 360 / 20;

  if (roll_20 == 20) {
    lock20 = true;
    console.log(lock20);
  } else {
    lock20 = false;
  }

  spin();
  colorPop();
  setTimeout(removeZoom, 800);
  unlock();
}

function d100_roll() {
  let roll_100 = Math.floor(Math.random() * 100) + 1;
  const spanOutput = document.createElement("span");
  spanOutput.textContent = roll_100 + ",";
  logBox.prepend(spanOutput);
  const span = document.getElementById("bigText");
  span.classList.add("zoom");
  span.textContent = roll_100;

  rollX = roll_100;
  crit = 100;
  light = greenLite;
  dark = green;
  color = "imgGreen";
  spinAmount = 360 / 100;

  if (roll_100 == 100) {
    lock100 = true;
    console.log(lock100);
  } else {
    lock100 = false;
  }

  spin();
  colorPop();
  setTimeout(removeZoom, 800);
  unlock();
}

function colorPop() {
  document.getElementById(color).style.setProperty("--light", light);
  document.getElementById(color).style.setProperty("--dark", dark);

  let element = document.getElementById(color);
  if (crit == rollX) {
    element.classList.add("pop");
  } else {
    element.classList.remove("pop");
  }
}

function unlock() {
  if (
    lock4 &&
    lock6 &&
    lock8 &&
    lock10 &&
    lock12 &&
    lock20 &&
    lock100 == true
  ) {
    const element2 = document.getElementById("page2");
    element2.classList.remove("hide");
  }
}

function spin() {
  lastAngle += rollX * spinAmount;
  document.getElementById(color).style.transform =
    "rotate(" + lastAngle + "deg)";
  lastAngle = 1;
}

function removeZoom() {
  const span = document.getElementById("bigText");
  span.classList.remove("zoom");
}

function reset() {
  const element3 = document.getElementById("page2");
  element3.classList.add("hide");
}

function clickCounter() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}

const red = "#B31F1B";
const orange = "#BE3B13";
const yellow = "#F4DA6C";
const green = "#68A93C";
const blue = "#436CDE";
const indigo = "#1E3370";
const violet = "#310D2D";

const redLite = "#e13e39";
const orangeLite = "#eb5e33";
const yellowLite = "#f9ecb3";
const greenLite = "#8fc968";
const blueLite = "#849fe9";
const indigoLite = "#2e4eac";
const violetLite = "#6d1d65";
