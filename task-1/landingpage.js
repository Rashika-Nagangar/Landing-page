let slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let slides = document.querySelectorAll(".slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndex - 1].style.display = "block";
}

let testimonialIndex = 0; // Initialize testimonial index
showTestimonials(); // Call function to start slideshow

function showTestimonials() {
  let testimonials = document.querySelectorAll(".slides");
  
  // Hide all testimonials
  testimonials.forEach(testimonial => testimonial.style.display = "none");
  
  // Increment index and reset if reached end
  testimonialIndex++;
  if (testimonialIndex >= testimonials.length) {
    testimonialIndex = 0;
  }
  
  // Display the current testimonial
  testimonials[testimonialIndex].style.display = "block";
  
  // Repeat every 3 seconds (3000 milliseconds)
  setTimeout(showTestimonials, 2000);
}

function scrollToAbout() 
{
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}
function scrollToMenu()
{
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}
function toggleKulfiMenu() {
    var kulfiMenu = document.getElementById("kulfi-menu");
    if (kulfiMenu.style.display === "none") {
      kulfiMenu.style.display = "block";
    } else {
      kulfiMenu.style.display = "none";
    }
  }
  function closeKulfiMenu() {
  document.getElementById("kulfi-menu").style.display = "none";
}
function toggleGelatoMenu() {
  var gelatoMenu = document.getElementById("gelato-menu");
  if(gelatoMenu.style.display === "none") {
    gelatoMenu.style.display = "block";
  } else {
    gelatoMenu.style.display = "none";
  }
}
function closeGelatoMenu() {
document.getElementById("gelato-menu").style.display = "none";
}
function toggleFrozenYogurtMenu(){
  var yogurtMenu = document.getElementById("frozen-yogurt-menu");
  if(yogurtMenu.style.display === "none") {
    yogurtMenu.style.display = "block";
  } else {
    yogurtMenu.style.display = "none";
  }
}
function closeFrozenYogurtMenu(){
  document.getElementById("frozen-yogurt-menu").style.display = "none";
}
function toggleSherbetMenu(){
  var sherbetMenu = document.getElementById("sherbet-menu");
  if(sherbetMenu.style.display === "none") {
    sherbetMenu.style.display = "block";
  } else {
    sherbetMenu.style.display = "none";
  }
}
function closeSherbetMenu(){
  document.getElementById("sherbet-menu").style.display = "none";
}
function togglePopsicleMenu(){
  var popsicleMenu = document.getElementById("ice-popsicle-menu");
  if(popsicleMenu.style.display === "none") {
    popsicleMenu.style.display = "block";
  } else {
    popsicleMenu.style.display = "none";
  }
}
function closePopsicleMenu(){
  document.getElementById("ice-popsicle-menu").style.display = "none";
}
function toggleSorbetMenu(){
  var sorbetMenu = document.getElementById("sorbet-menu");
  if(sorbetMenu.style.display === "none") {
    sorbetMenu.style.display = "block";
  } else {
    sorbetMenu.style.display = "none";
  }
}
function closeSorbetMenu(){
  document.getElementById("sorbet-menu").style.display = "none";
}
function toggleSoftServeMenu(){
  var softserve = document.getElementById("soft-serve-menu");
  if(softserve.style.display === "none") {
    softserve.style.display = "block";
  } else {
    softserve.style.display = "none";
  }
}
function closeSoftServeMenu(){
  document.getElementById("soft-serve-menu").style.display = "none";
}
function togglePhiladelphiaMenu(){
  var philadelphiaMenu = document.getElementById("philadelphia-menu");
  if(philadelphiaMenu.style.display === "none") {
    philadelphiaMenu.style.display = "block";
  } else {
    philadelphiaMenu.style.display = "none";
  }
}
function closePhiladelphiaMenu(){
  document.getElementById("philadelphia-menu").style.display = "none";
}
function toggleSnowCreamMenu(){
  var snowcreamMenu = document.getElementById("snowcream-menu");
  if(snowcreamMenu.style.display === "none") {
    snowcreamMenu.style.display = "block";
  } else {
    snowcreamMenu.style.display = "none";
  }
}
function closeSnowCreamMenu(){
  document.getElementById("snowcream-menu").style.display = "none";
}
function toggleItalianIceMenu(){
  var italianiceMenu = document.getElementById("italian-ice-menu");
  if(italianiceMenu.style.display === "none") {
    italianiceMenu.style.display = "block";
  } else {
    italianiceMenu.style.display = "none";
  }
}
function closeItalianIceMenu(){
  document.getElementById("italian-ice-menu").style.display = "none";
}
function toggleDondurmaMenu(){
  var dondurmaMenu = document.getElementById("dondurma-menu");
  if(dondurmaMenu.style.display === "none") {
    dondurmaMenu.style.display = "block";
  } else {
    dondurmaMenu.style.display = "none";
  }
}
function closeDondurmaMenu(){
  document.getElementById("dondurma-menu").style.display = "none";
}
function toggleRolledMenu(){
  var rolledMenu = document.getElementById("rolled-ice-cream-menu");
  if(rolledMenu.style.display === "none") {
    rolledMenu.style.display = "block";
  } else {
    rolledMenu.style.display = "none";
  }
}
function closeRolledMenu(){
  document.getElementById("rolled-ice-cream-menu").style.display = "none";
}