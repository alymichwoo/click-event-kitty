//Selects the buton and figure where the image will show
var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

//Reveals kitten image when button is clicked
button.addEventListener("click", function() {
    cat.classList.add("show");
});