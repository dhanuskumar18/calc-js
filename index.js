function clr() {
  let x = document.querySelector(".con");
  x.innerHTML = "";
}
function dot() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML + ".";
}
function zero() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML + 0;
}
function zeros() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML + "00";
}
function one() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML + "1";
}
function two() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML + "2";
}
function three() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML + "3";
}
function four() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML + "4";
}
function five() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML + "5";
}
function six() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML + "6";
}
function seven() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML + "7";
}
function eight() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML + "8";
}
function nine() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML + "9";
}
function add() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML + "+";
}
function mul() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML + "*";
}
function min() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML + "-";
}
function divide() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML + "/";
}
function mod() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML + "%";
}
function back() {
  let x = document.querySelector(".con");
  x.innerHTML = x.innerHTML.slice(0,-1)
}
function equal()
{
  let x = document.querySelector(".con");
try {
    x.innerHTML=eval(x.innerHTML)
} catch (error) {
    x.innerHTML="error"
}

}