//created by abdelkarim aswan //

function send() {
  function populateStorage(){
localStorage.setItem("a",document.getElementById("take").value);
}

}
function check() {
  
ch = document.getElementById("take").value;
if (ch==localStorage.getItem("a")){
console.log("you do not have any message right now");
}else{
   function populateStorage(){
document.getElementById("inner").innerText= localStorage.getItem("a");
   }
}
}
