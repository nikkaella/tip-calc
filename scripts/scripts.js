var bill = $('#bill');
var numOfPeople = $('#numOfPeople');
var tipAmt = $('#tip-amt');
var total = $('#total');
var custom = $('#custom');
var percent;
var bills;
var numPeople;
$(document).ready(clearInput);

$('#bill').change(function () {
    bills = parseInt(bill.val());
});

$('.butt').on('click', function () {
    $(this).toggleClass('clicked');
    percent = parseInt($(this).text());
    percent = percent * 0.01;
    // if there is already a button that is clicked, then remove previous one
});

$('#custom').on('click', function () {
    custom.val('');
    percent = parseInt(custom.val(''));
    console.log(percent);
})

$('#numOfPeople').change(function () {
    // alert(numOfPeople + bill);
    numPeople = parseInt(numOfPeople.val());
    
    var tip = (bills * percent) / numPeople;
    var totes = (bills / numPeople) + tip;
    tipAmt.text('$' + tip);
    total.text('$' + totes);
});

$('#reset').on('click', clearInput);

function clearInput() {

    //clear all inputs
    bill.val('');
    numOfPeople.val('');
    tipAmt.text('$0.00');
    total.text('$0.00');
    $('.butt').removeClass('clicked');
}