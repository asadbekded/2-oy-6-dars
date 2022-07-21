var elLink = document.querySelector(".bottom-link");
var elModal = document.querySelector(".modal");
var elModalSentlink = document.querySelector(".sent-link");

console.log(elLink, elModal, elModalSentlink);

elLink.addEventListener("click", function () {
   elModal.classList.add("modal-open")
})

elModalSentlink.addEventListener("click", function () {
   elModal.classList.remove("modal-open")
})