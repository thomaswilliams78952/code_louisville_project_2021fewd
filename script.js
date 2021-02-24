document.getElementById("email").addEventListener("click", function(){
    document.querySelector(".email").style.display = "flex";
})

document.getElementById("join").addEventListener("click", function(){
    document.querySelector(".email").style.display = "none";
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".email").style.display = "none";
})