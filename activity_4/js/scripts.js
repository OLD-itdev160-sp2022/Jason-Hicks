var user = ' Jason';
var salutation = ' Hi';
var greeting = salutation + user + '! Here are the latest Melomania 1 reviews.';
var greetingEL = document.getElementById('greeting');

greetingEL.textContent = greeting;

var price = 99.00,
    studentDiscountPercentage = .15,
    studentPrice = price - (price * studentDiscountPercentage),
    priceEL = document.getElementById('price'),
    studentPriceEL = document.getElementById('student-price');

priceEL.textContent = price.toFixed(2);
studentPriceEL.textContent = studentPrice.toFixed(2);
