//created by abdelkarim aswan //

function send() {

sessionStorage.setItem("a",document.getElementById("take").value);

}
function check() {
  
ch = document.getElementById("take").value;
if (ch==sessionStorage.getItem("a")){
console.log("you do not have any message right now");
}else{

document.getElementById("inner").innerText= sessionStorage.getItem("a");
}
}
