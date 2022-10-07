/*The previous and next controls for the slide carousel*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

/*The function for close and open //with the hamburger and //the close button in the hidden nav*/
//The open with the hamburger
function hambgFunction() {
    let x = document.getElementById("hidden-nav");

    if (x.style.height === 0){
        x.style.height = "100%"
    }else{
        x.style.height = "100%"
    }
}


//The close with the close icon
function closeNavFunction() {
    let x = document.getElementById("hidden-nav");

    x.style.height = "0"
}