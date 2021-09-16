var bill = $('#bill');
var numOfPeople = $('#numOfPeople');
var tipAmt = $('#tip-amt');
var total = $('#total');
var custom = $('#custom');
var customTip;
var percent;
var bills;
var numPeople;

$(document).ready(clearInput);

$(document).on('keyup keypress', 'form input[type="text"]', function(e) {
    if(e.keyCode == 13) {
      e.preventDefault();
      return false;
    }
  });

$('#bill').change(function () {
    bills = parseInt(bill.val());
});

$('.butt').on('click', function () {
    $('.butt').removeClass('clicked');

    $(this).toggleClass('clicked');
    percent = parseInt($(this).text());
    percent = percent * 0.01;

});

$('#custom').change(function () {

    customTip = parseInt(custom.val());
    percent = customTip * 0.01;
})

$('#numOfPeople').change(function () {
    numPeople = parseInt(numOfPeople.val());
    
    var tip = (bills * percent) / numPeople;
    var totes = (bills / numPeople) + tip;
    tipAmt.text('$' + tip.toFixed(2));
    total.text('$' + totes.toFixed(2));
});

$('#reset').on('click', clearInput);

function clearInput() {

    //clear all inputs
    bill.val('');
    numOfPeople.val('');
    tipAmt.text('$0.00');
    total.text('$0.00');
    custom.val('');
    $('.butt').removeClass('clicked');
}