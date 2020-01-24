                         


function send() {
localStorage.setItem("a",document.getElementById("take").value);
}
function check() {
ch = document.getElementById("take").value;
if (ch==localStorage.getItem("a")){
console.log("you do not have any message right now");
}else{
document.getElementById("inner").innerText= localStorage.getItem("a");
}
}


