const form = document.getElementById("form");
const selectWork = document.getElementById("select-work");
const promoCode = document.getElementById("promo-code");
console.log(form);
console.log(selectWork);
console.log(promoCode);

form.addEventListener("submit", function (event) {
    event.preventDefault();
});