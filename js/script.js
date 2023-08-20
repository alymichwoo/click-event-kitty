//Selects the buton and figure where the image will show
var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

//Reveals or hides image when button is clicked
button.addEventListener("click", function() {
    if (cat.classList.contains("show")) {
        cat.classList.remove("show");
        button.innerText = "Wait, come back!";
        button.classList.add("disappear");
    } else {
        cat.classList.add("show");
        button.innerText = "Shoo, cat!";
        button.classList.remove("disappear");
    }
});