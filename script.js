const form = document.getElementById("form");
const selectWork = document.getElementById("select-work");
const promoCode = document.getElementById("promo-code");
const promoCodes = ['YHDNU32','JANJC63','PWKCN25','SJDPO96','POCIE24'];
const hour = 10;
console.log(form);
console.log(selectWork);
console.log(promoCode);
console.log(promoCodes);
console.log(hour);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let work = selectWork.value;
    let promo = promoCode.value;
    console.log(work);
    console.log(promo);



});