const cardNumber = document.getElementById('number');
const numberInput = document.getElementById('card-number');
const cardName = document.getElementById('name');
const nameInput = document.getElementById('card-name');
const cardMonth = document.getElementById('month');
const monthInput = document.getElementById('card-month');
const cardYear = document.getElementById('year');
const yearInput = document.getElementById('card-year');
const cardCvc = document.getElementById('cvc');
const cvcInput = document.getElementById('card-cvc');

function format(e) {
    //4 digit spacing?
    return e.toString().replace();
}

function setCardNumber(e) {
    cardNumber.innerText=format(e.target.value);
}

function setCardName(e) {
    cardName.innerText=format(e.target.value);
}

function setCardMonth(e) {
    cardMonth.innerText=format(e.target.value);
}

function setCardYear(e) {
    cardYear.innerText=format(e.target.value);
}

function setCardCvc(e) {
    cardCvc.innerText=format(e.target.value);
}



numberInput.addEventListener("keyup", setCardNumber)
nameInput.addEventListener("keyup", setCardName)
monthInput.addEventListener("keyup", setCardMonth)
yearInput.addEventListener("keyup", setCardYear)
cvcInput.addEventListener("keyup", setCardCvc)

