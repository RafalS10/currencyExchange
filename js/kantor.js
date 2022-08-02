console.log("cześć")
let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");

let rateEUR= 4.6422;
let rateGBP= 5.4056;
let rateUSD= 4.4085;
let rateCHF= 4.5622;

formElement.addEventListener("submit", (event) => {
event.preventDefault();

let amount = +amountElement.value;
let currency = currencyElement.value;

let result;

switch (currency) {
    case "EUR":
        result = amount/rateEUR;
        break;

        case"GBP":
        result = amount/rateGBP
        break;
        
        case "USD":
            result = amount/rateUSD
            break;

            case"CHF":
            result = amount/rateCHF
            break;

}

resultElement.innerHTML=`${amount.toFixed(2)} PLN =<strong>${result.toFixed(2)}${currency}</strong>`;

});