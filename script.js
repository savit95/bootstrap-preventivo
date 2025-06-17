const form = document.getElementById("form");
const selectWork = document.getElementById("select-work");
const promoCode = document.getElementById("promo-code");
console.log(form);
console.log(selectWork);
console.log(promoCode);

const hour = 10;
const promoCollection = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
console.log(hour);
console.log(promoCollection);


// Calculates the total cost based on the selected work type and number of hours.
function calculateWorkCost(work, hour) {
    if (work === '1') {
        return hour * 20.50;
    } else if (work === '2') {
        return hour * 15.30;
    } else {
        return hour * 33.60;
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const work = selectWork.value;
    const promo = promoCode.value;
    console.log(work);
    console.log(promo);

    // Calls the function to calculate the total cost work
    let resultCalculateWorkCost = calculateWorkCost(work, hour);
    console.log(resultCalculateWorkCost);

    // promo code

    //printed price


});

