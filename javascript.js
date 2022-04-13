let lastAngle = 1;

function d4_roll() {
  let roll_4 = Math.floor(Math.random() * 4) + 1;
  const d4Log = document.getElementById("log");
  let d4Output = document.createElement("span");
  d4Output.textContent = roll_4 + ",";
  d4Log.prepend(d4Output);

  let x4 = roll_4;
  console.log(x4);
  const d4Center = document.getElementById("center");
  d4Center.innerHTML = x4;

  function crit() {
    if (roll_4 == 4) {
      document.getElementById("imgYellow").style.backgroundImage =
        "radial-gradient(circle, var(--yellowLite), var(--yellow) 50%)";
      document.getElementById("imgYellow").style.boxShadow =
        "2px 2px 30px var(--yellowLite)";
      console.log("4");
    } else {
      document.getElementById("imgYellow").style.backgroundImage =
        "radial-gradient(1circle, var(--yellowLite), var(--yellow) 50%)";
      document.getElementById("imgYellow").style.backgroundColor =
        "transparent";
      document.getElementById("imgYellow").style.boxShadow =
        "0px 0px 0px var(--yellowLite)";
    }
  }
  crit();
  lastAngle += x4 * 90;
  // Move the image:
  document.getElementById("imgYellow").style.transform =
    "rotate(" + lastAngle + "deg)";
  lastAngle = 1;
}

function d6_roll() {
  let roll_6 = Math.floor(Math.random() * 6) + 1;
  const d6Log = document.getElementById("log");
  let d6Output = document.createElement("span");
  d6Output.textContent = roll_6 + ",";
  d6Log.prepend(d6Output);

  let x6 = roll_6;
  console.log(x6);
  const d6Center = document.getElementById("center");
  d6Center.innerHTML = x6;

  function crit() {
    if (roll_6 == 6) {
      document.getElementById("imgOrange").style.backgroundImage =
        "radial-gradient(circle, var(--orangeLite), var(--orange) 50%)";
      document.getElementById("imgOrange").style.boxShadow =
        "2px 2px 30px var(--orangeLite)";
      console.log("6");
    } else {
      document.getElementById("imgOrange").style.backgroundImage =
        "radial-gradient(1circle, var(--orangeLite), var(--orange) 50%)";
      document.getElementById("imgOrange").style.backgroundColor =
        "transparent";
      document.getElementById("imgOrange").style.boxShadow =
        "0px 0px 0px var(--orangeLite)";
    }
  }
  crit();
  lastAngle += x6 * 60;
  // Move the image:
  document.getElementById("imgOrange").style.transform =
    "rotate(" + lastAngle + "deg)";
  lastAngle = 1;
}

function d8_roll() {
  let roll_8 = Math.floor(Math.random() * 8) + 1;
  const d8Log = document.getElementById("log");
  let d8Output = document.createElement("span");
  d8Output.textContent = roll_8 + ",";
  d8Log.prepend(d8Output);

  let x8 = roll_8;
  console.log(x8);
  const d8Center = document.getElementById("center");
  d8Center.innerHTML = x8;

  function crit() {
    if (roll_8 == 8) {
      document.getElementById("imgRed").style.backgroundImage =
        "radial-gradient(circle, var(--redLite), var(--red) 50%)";
      document.getElementById("imgRed").style.boxShadow =
        "2px 2px 30px var(--redLite)";
      console.log("8");
    } else {
      document.getElementById("imgRed").style.backgroundImage =
        "radial-gradient(1circle, var(--redLite), var(--red) 50%)";
      document.getElementById("imgRed").style.backgroundColor = "transparent";
      document.getElementById("imgRed").style.boxShadow =
        "0px 0px 0px var(--redLite)";
    }
  }
  crit();
  lastAngle += x8 * 45;
  // Move the image:
  document.getElementById("imgRed").style.transform =
    "rotate(" + lastAngle + "deg)";
  lastAngle = 1;
}

function d10_roll() {
  let roll_10 = Math.floor(Math.random() * 10) + 1;
  const d10Log = document.getElementById("log");
  let d10Output = document.createElement("span");
  d10Output.textContent = roll_10 + ",";
  d10Log.prepend(d10Output);

  let x10 = roll_10;
  console.log(x10);
  const d10Center = document.getElementById("center");
  d10Center.innerHTML = x10;

  function crit() {
    if (roll_10 == 10) {
      document.getElementById("imgBlue").style.backgroundImage =
        "radial-gradient(circle, var(--blueLite), var(--blue) 50%)";
      document.getElementById("imgBlue").style.boxShadow =
        "2px 2px 30px var(--blueLite)";
      console.log("10");
    } else {
      document.getElementById("imgBlue").style.backgroundImage =
        "radial-gradient(1circle, var(--blueLite), var(--blue) 50%)";
      document.getElementById("imgBlue").style.backgroundColor = "transparent";
      document.getElementById("imgBlue").style.boxShadow =
        "0px 0px 0px var(--blueLite)";
    }
  }
  crit();
  lastAngle += x10 * 36;
  // Move the image:
  document.getElementById("imgBlue").style.transform =
    "rotate(" + lastAngle + "deg)";
  lastAngle = 1;
}

function d12_roll() {
  let roll_12 = Math.floor(Math.random() * 12) + 1;
  const d12Log = document.getElementById("log");
  let d12Output = document.createElement("span");
  d12Output.textContent = roll_12 + ",";
  d12Log.prepend(d12Output);

  //second funtion//
  let x12 = roll_12;
  console.log(x12);
  const d12Center = document.getElementById("center");
  d12Center.innerHTML = x12;

  function crit() {
    if (roll_12 == 12) {
      document.getElementById("imgIndigo").style.backgroundImage =
        "radial-gradient(circle, var(--indigoLite), var(--indigo) 50%)";
      document.getElementById("imgIndigo").style.boxShadow =
        "2px 2px 30px var(--indigoLite)";
      console.log("12");
    } else {
      document.getElementById("imgIndigo").style.backgroundImage =
        "radial-gradient(1circle, var(--indigoLite), var(--indigo) 50%)";
      document.getElementById("imgIndigo").style.backgroundColor =
        "transparent";
      document.getElementById("imgIndigo").style.boxShadow =
        "0px 0px 0px var(--indigoLite)";
    }
  }
  crit();
  lastAngle += x12 * 30;
  // Move the image:
  document.getElementById("imgIndigo").style.transform =
    "rotate(" + lastAngle + "deg)";
  lastAngle = 1;
}

function d20_roll() {
  let roll_20 = Math.floor(Math.random() * 20) + 1;
  const d20Log = document.getElementById("log");
  let d20Output = document.createElement("span");
  d20Output.textContent = roll_20 + ",";
  d20Log.prepend(d20Output);

  let x20 = roll_20;
  console.log(x20);
  const d20Center = document.getElementById("center");
  d20Center.innerHTML = x20;

  function crit() {
    if (roll_20 == 20) {
      document.getElementById("imgViolet").style.backgroundImage =
        "radial-gradient(circle, var(--violetLite), var(--violet) 50%)";
      document.getElementById("imgViolet").style.boxShadow =
        "2px 2px 30px var(--violetLite)";
      console.log("20");
    } else {
      document.getElementById("imgViolet").style.backgroundImage =
        "radial-gradient(1circle, var(--violetLite), var(--violet) 50%)";
      document.getElementById("imgViolet").style.backgroundColor =
        "transparent";
      document.getElementById("imgViolet").style.boxShadow =
        "0px 0px 0px var(--violetLite)";
    }
  }
  crit();
  lastAngle += x20 * 18;
  // Move the image:
  document.getElementById("imgViolet").style.transform =
    "rotate(" + lastAngle + "deg)";
  lastAngle = 1;
}

function d100_roll() {
  let roll_100 = Math.floor(Math.random() * 100) + 1;
  const d100Log = document.getElementById("log");
  let d100Output = document.createElement("span");
  d100Output.textContent = roll_100 + ",";
  d100Log.prepend(d100Output);

  let x100 = roll_100;
  console.log(x100);
  const d100Center = document.getElementById("center");
  d100Center.innerHTML = x100;

  function crit() {
    if (roll_100 == 100) {
      document.getElementById("imgGreen").style.backgroundImage =
        "radial-gradient(circle, var(--greenLite), var(--green) 50%)";
      document.getElementById("imgGreen").style.boxShadow =
        "2px 2px 30px var(--greenLite)";
      console.log("100!");
    } else {
      document.getElementById("imgGreen").style.backgroundImage =
        "radial-gradient(1circle, var(--greenLite), var(--green) 50%)";
      document.getElementById("imgGreen").style.backgroundColor = "transparent";
      document.getElementById("imgGreen").style.boxShadow =
        "0px 0px 0px var(--greenLite)";
    }
  }
  crit();
  lastAngle += x100 * 3.6;
  // Move the image:
  document.getElementById("imgGreen").style.transform =
    "rotate(" + lastAngle + "deg)";
  lastAngle = 1;
}
