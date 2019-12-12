// var tenPerBtn = document.getElementById("tenPercent");
// // var tfifteenPerBtn = document.getElementById("fifteenPercent");
// // var twentyPerBtn = document.getElementById("twentyPercent");
// var bill = document.getElementById('billInput');
// var tipEquals = document.getElementById("tipAmount");



// function calculateTen()
// {
//     var billInput = bill.value;
//     var tipAmount = billInput * .1;
//     tipAmount.innerHTML = '10% tip is $' + tipAmount;
// }

// tenPerBtn.addEventListener("click", calcTen);
// document.getElementsByClassName('tenPerBtn').addEventListener('click', calcTen());

window.onload = function() {
    $("calculateButton").onclick = ClickHandler;
};

var $ = function(id) {
    return document.getElementById(id);
}


function ClickHandler() {
    var billAmount = parseFloat($("billAmount").value);
    var tipPercentage = parseFloat($("serviceQuality").value);
    var numOfPeople = parseInt($("numOfPeople").value);

    var tipAmount = tipPercentage * billAmount;
    var totalAmount = tipAmount + billAmount;
    var perPersonTotal = totalAmount / numOfPeople;

    $("resultsParagraph").innerHTML =
    "Per person total: $" + perPersonTotal;
}