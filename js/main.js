var elOftenImg = document.querySelector(".often-img");
var elGrindBox = document.querySelector(".grind-box");

elOftenImg.addEventListener("click", function() {
   elGrindBox.classList.toggle("open")
})


var elPhoneImg = document.querySelector(".phone-img");
var elPhoneBox = document.querySelector(".phone-box");

elPhoneImg.addEventListener("click", function() {
   elPhoneBox.classList.toggle("open")
})


var elLikeImg = document.querySelector(".like-img");
var elLikeBox = document.querySelector(".like-box");

elLikeImg.addEventListener("click", function() {
   elLikeBox.classList.toggle("open")
})

var elThemImg = document.querySelector(".them-img");
var elThemBox = document.querySelector(".them-box");

elThemImg.addEventListener("click", function() {
   elThemBox.classList.toggle("open")
})

var elShouldImg = document.querySelector(".should-img");
var elShouldBox = document.querySelector(".should-box");

elShouldImg.addEventListener("click", function() {
   elShouldBox.classList.toggle("open")
})