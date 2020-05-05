const container = document.getElementById('main')
const demo = document.getElementById('demo')

function change() {
  const col1 = random();
  const col2 = random();
  const col3 = random();
  const col4 = random();
  const col5 = random();
  const col6 = random();
  const colorString = `rgb(${col1}, ${col2}, ${col3})`
  const otherColorString = `rgb(${col4}, ${col5}, ${col6})`
  container.style.background = "linear-gradient(" + colorString + ", " + otherColorString +")";
  demo.innerText = "linear-gradient(" + colorString + ", " + otherColorString +");";
}

function random() {
  return Math.floor(Math.random() * 256);
}
