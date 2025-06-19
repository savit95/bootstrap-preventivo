const form = document.getElementById("form");
const selectWork = document.getElementById("select-work");
const promoCode = document.getElementById("promo-code");
const hour = 10;
const promoCollection = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

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

// Formatting and displaying work cost with Euro currency and decimal separation
function finalPrice(resultCalculateWorkCost) {
    let fixedRate = resultCalculateWorkCost.toFixed(2);
    let result = fixedRate.split(".");
    document.getElementById("integer-part").innerHTML = `€ ${result[0]}`;
    document.getElementById("decimal-part").innerHTML = `,${result[1]} `;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const work = selectWork.value;
    const promo = promoCode.value;

    // Calls the function to calculate the total cost work
    let resultCalculateWorkCost = calculateWorkCost(work, hour);

    // Check if the entered promo code is valid
    // If valid, apply a 25% discount to the total cost and display a green success message
    // If not valid, display a regular message indicating no discount applied
    if (promoCollection.includes(promo)) {
        resultCalculateWorkCost -= (resultCalculateWorkCost * 0.25);
        document.getElementById("error-message").innerHTML = "il prezzo finale é calcolato con codice promo.";
        document.getElementById("error-message").style.color = 'green';
    } else {
        document.getElementById("error-message").innerHTML = "il prezzo finale é calcolato senza codice promo.";
        document.getElementById("error-message").style.color = 'black';
    }

    //Calls the function to Formatting and displaying work cost
    finalPrice(resultCalculateWorkCost);
   
});

