const incrementbtn = document.getElementById("incrementbtn");
const decrementbtn = document.getElementById("decrementbtn");
const resetbtn = document.getElementById("resetbtn");
const btn = document.getElementById("btn");
let count = 0;

incrementbtn.onclick = function(){
    count++;
    mylable.textContent = count;
}
decrementbtn.onclick = function(){
    count--;
    mylable.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    mylable.textContent = count;
}