// # of dice blocks

// # of dice in block

function select1() {
  let select = document.getElementById("inputMultiply");
  return parseInt(select.options[select.selectedIndex].value);
}

// type of dice

function select2() {
  let select2 = document.getElementById("inputDieType");
  return parseInt(select2.options[select2.selectedIndex].value);
}

function random(number) {
  return Math.floor(Math.random() * number) + 1;
}

// # of dice multiplied by type of dice

function rollB() {
  let rolly = select1() * random(select2());
  console.log(rolly);
  const output = document.getElementById("outputB");
  output.prepend(rolly + ", ");
  const zoom = document.getElementById("zoomB");
  zoom.textContent = rolly;
}

// export to result
