var bill = $('#bill');
var numOfPeople = $('#numOfPeople');
var tipAmt = $('#tip-amt');
var total = $('#total');
var custom = $('#custom');
var percent;

$(document).ready(clearInput);

$('#bill').change(function () {
    bill = parseInt(bill.val());
});

$('.butt').on('click', function () {
    $(this).toggleClass('clicked');
    percent = parseInt($(this).text());
    percent = percent * 0.01;
    // if there is already a button that is clicked, then remove previous one
});

$('#custom').on('click', function() {
    custom.val('');
})

$('#numOfPeople').change(function () {
    // alert(numOfPeople + bill);
    numOfPeople = parseInt(numOfPeople.val());

    tipAmt = (bill + (bill * percent)) / numOfPeople;
    alert(tipAmt);
    // tipAmt.text(tipAmt);
});

$('#reset').on('click', clearInput);


function clearInput() {
    //clear all inputs
    bill.val('');
    numOfPeople.val('');
    tipAmt.text('$0.00');
    total.text('$0.00');
}