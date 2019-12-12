var tenPercentBtn = document.getElementsByClassName('tenPercent');
var tfifteenPercentBtn = document.getElementsByClassName('fifteenPercent');
var twentyPercentBtn = document.getElementsByClassName('twentyPercent');
var bill = document.getElementById('billInput');
var tip = document.getElementById('tipAmount');


function calcTen()
{
    var billInput = bill.value;
    var tipAmount = billinput * .1;
    tip.innerHTML = '10% tip is $' + tipAmount;
}


tenPercentBtn.onclick = function(calcTen);
