const input = document.getElementById("input");
const show = document.querySelector(".show");

input.addEventListener("keyup", function(e){
    show.innerText = e.target.value;
});
