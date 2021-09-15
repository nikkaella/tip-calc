var bill = $('#bill');
var numOfPeople = $('#numOfPeople');
var tipAmt = $('#tip-amt');
var total = $('#total');
var custom = $('#custom');

$(document).ready(clearInput);

$('#bill').change(function () {
    var bills = bill.val();
});

$('.butt').on('click', function () {
    $(this).toggleClass('clicked');

    // if there is already a button that is clicked, then remove previous one
});

$('#custom').on('click', function() {
    custom.val('');
})

$('#numOfPeople').change(function () {
    // alert(numOfPeople + bill);
});

$('#reset').on('click', clearInput);


function clearInput() {
    //clear all inputs
    bill.val('');
    numOfPeople.val('');
    tipAmt.text('$0.00');
    total.text('$0.00');
}