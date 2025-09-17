// -----------------------------Desktop------------------------
let signup_button = document.querySelector(".sign_up_button");
let signin_button = document.querySelector(".sign_up_button1");
let signup_page = document.querySelector(".for_signup");
let signin_page = document.querySelector(".for_signin");
let body1_signup = document.querySelector("#sign_up");
let body2_signin = document.querySelector("#sign_in1");
let signup_main_page = document.querySelector(".sign_in_button");
let signin_main_page = document.querySelector(".sign_in_button1");


signup_button.addEventListener("click",(event)=>{
    signup_page.style.display = "flex";
    signin_page.style.display = "none";
    signin_page_mobile.style.display = "none";
    signup_page_mobile.style.display = "nosignin_main_pagene";
    display_of_mobile.style.display = "none";

})


signup_main_page.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.querySelector("#signin-email").value.trim();
  const password = document.querySelector("#signin-password").value.trim();

  if (!email || !password) {
    alert("⚠️ Please fill out all fields for Login");
  } else {
    alert(`Welcome back`);
    window.location.href = "index.html";
  }
});


signin_main_page.addEventListener("click", function (event) {
  event.preventDefault();

  const username = document.querySelector("#signin-username").value.trim();
  const email1 = document.querySelector("#signin-email1").value.trim();
  const phone = document.querySelector("#signin-phone").value.trim();
  const password1 = document.querySelector("#signin-password1").value.trim();

  if (!email1 || !password1 || !username || !phone) {
    alert("⚠️ Please fill out all fields for Registration ");
  } else {
    alert(`Welcome ${username}`);
    window.location.href = "index.html";
  }
});



signin_button.addEventListener("click",(event)=>{
    signin_page.style.display = "flex";
    signup_page.style.display = "none";
    signin_page_mobile.style.display = "none";
    signup_page_mobile.style.display = "none";
    display_of_mobile.style.display = "none";
})


// -----------------------------Mobile Events----------------------------

let signin_button_mobile = document.querySelector(".fix_part1_signin");
let signup_button_mobile= document.querySelector(".fix_part1_signup");
let signin_button_mobile_backgroundcolor = getComputedStyle(signin_button_mobile).backgroundColor;
let signup_button_mobile_backgroundcolor = getComputedStyle(signup_button_mobile).backgroundColor;
let fix_part_mobile = document.querySelector(".fix_part_mobile");
let signin_page_mobile = document.querySelector(".for_signin_mobile");
let signup_page_mobile = document.querySelector(".body2_mobile");
signup_button_mobile.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log("clicked");
    signup_page_mobile.style.display = "flex";
    signin_page_mobile.style.display = "none";
    signup_button_mobile.style.backgroundColor = "#976464";
    signin_button_mobile.style.backgroundColor = "transparent";

})
if(signin_button_mobile_backgroundcolor == "rgb(151, 100, 100)" ) {
    signin_button_mobile.style.pointerEvents = "none";
    signup_button_mobile.style.pointerEvents = "auto";
}
signin_button_mobile.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log("clicked");
    signup_page_mobile.style.display = "none";
    signin_page_mobile.style.display = "flex";
    signup_button_mobile.style.backgroundColor = "transparent";
    signin_button_mobile.style.backgroundColor = "#976464";
})
if(signup_button_mobile_backgroundcolor == "rgb(151, 100, 100)" ) {
    signup_button_mobile.style.pointerEvents = "none";
    signin_button_mobile.style.pointerEvents = "auto";
}


const signin_main_button_mobile = document.querySelector(".sign_in_button_mobile");
const signup_main_button_mobile = document.querySelector(".sign_in_button1_mobile");

signin_main_button_mobile.addEventListener("click", function (event) {
  event.preventDefault();

  const email_mobile = document.querySelector("#signin-email_mobile").value.trim();
  const password_mobile = document.querySelector("#signin-password_mobile").value.trim();

  if (!email_mobile || !password_mobile) {
    alert("⚠️ Please fill out all fields for Login");
  } else {
    alert(`Welcome back`);
    window.location.href = "index.html";
  }
});


signup_main_button_mobile.addEventListener("click", function (event) {
  event.preventDefault();

  const username_ = document.querySelector("#signin-username").value.trim();
  const email_ = document.querySelector("#signin-email1_mobile").value.trim();
  const phone_ = document.querySelector("#signin-phone_mobile").value.trim();
  const password_ = document.querySelector("#signin-password1_mobile").value.trim();

  if (!email_ || !password_ || !username_ || !phone_) {
    alert("⚠️ Please fill out all fields for Registration ");
  } else {
    alert(`Welcome ${username_}`);
    window.location.href = "index.html";
  }
});