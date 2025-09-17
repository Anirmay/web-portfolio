const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const signin_button = document.querySelector("#signin");

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileNav.classList.toggle('open');
});

signin_button.addEventListener("click", function() {
  window.location.href = "login_page(mobile).html";
});

const document_button = document.querySelector("#document");
const get_button = document.querySelector("#get");
document_button.addEventListener("click", function() {
  window.location.href = "error_page.html";
});
get_button.addEventListener("click", function() {
  window.location.href = "error_page.html";
});

const about_button = document.querySelector("#about_button");
const work_button = document.querySelector("#work_button");
const features_button = document.querySelector("#features_button");
const contact_button = document.querySelector("#contact_button");

about_button.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "about_page.html#border_1";
});

work_button.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "about_page.html#border_2";
});

features_button.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "about_page.html#border_3";
});

contact_button.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "about_page.html#border_4";
});

const about_button_mobile = document.querySelector("#about_button_mobile");
const work_button_mobile = document.querySelector("#work_button_mobile");
const features_button_mobile = document.querySelector("#features_button_mobile");
const contact_button_mobile = document.querySelector("#contact_button_mobile");

about_button_mobile.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "about_page.html#border_1";
});

work_button_mobile.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "about_page.html#border_2";
});

features_button_mobile.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "about_page.html#border_3";
});

contact_button_mobile.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.href = "about_page.html#border_4";
});


