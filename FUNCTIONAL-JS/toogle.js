let BodyT = document.querySelector("body");
let modeT = document.getElementById("container");
let fasT = document.querySelector(".fa-sun");

modeT.addEventListener("click", () => {
    BodyT.classList.toggle("active");
    
    if(BodyT.classList.contains("active")) {
        fasT.classList.remove("fa-sun");
        fasT.classList.add("fa-moon");
    }
    else {
        fasT.classList.add("fa-sun");
        fasT.classList.remove("fa-moon");
    }
} )