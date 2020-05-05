const container = document.getElementById('main')
const demo = document.getElementById('demo')
const copybtn = document.getElementById('copybtn')

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
  demo.value = "linear-gradient(" + colorString + ", " + otherColorString +");";
}

function random() {
  return Math.floor(Math.random() * 256);
}

function copy() {
demo.select();
demo.setSelectionRange(0, 99999);

 if ( document.execCommand( 'copy' ) ) {
     copybtn.classList.add( 'copied' );

     var temp = setInterval( function(){
       copybtn.classList.remove( 'copied' );
       clearInterval(temp);
     }, 600 );

 } else {
   console.info( 'document.execCommand went wrong…' )
 }

 return;
}
