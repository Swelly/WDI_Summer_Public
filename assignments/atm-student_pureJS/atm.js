var checkingBalance = 0;
var savingsBalance = 0;

window.onload = function(){

  $('input#checkingDeposit').onclick = function getChecking(event){
    var amount = $('input#checkingAmount').val();
    amount = parseInt(amount);
    checkingBalance = amount + checkingBalance;
    updateDisplay();
  };

  $('input#savings-deposit').onclick = function(event){
    var amount = $('input#savings-amount').val();
    amount = parseInt(amount);
    savingsBalance = amount + savingsBalance;
    updateDisplay();
  };

  $('input#checking-withdraw').onclick = function(event){
    var amount = $('input#checking-amount').val();
    amount = parseInt(amount);
    balances = withdrawFunds(amount, checkingBalance, savingsBalance);
    checkingBalance = balances[0];
    savingsBalance = balances[1];
    updateDisplay();
  };

  $('input#savings-withdraw').onclick = function(event){
    var amount = $('input#savings-amount').val();
    amount = parseInt(amount);
    balances = withdrawFunds(amount, savingsBalance, checkingBalance);
    savingsBalance = balances[0];
    checkingBalance = balances[1];
    updateDisplay();
  };

  updateDisplay();

};

function withdrawFunds(amount, primary, secondary) {
  if (amount <= primary) {
    primary = primary - amount;
  } else if ((amount > primary) && (amount <= (secondary + primary))) {
    secondary = (primary + secondary) - amount;
    primary = 0;
  }
  return [primary, secondary];
}

function updateDisplay() {

  var element = $('div#checking-balance')[0];

  if (checkingBalance <= 0) {
    element.classList.add('zero');
  } else {
    element.classList.remove('zero');
  }

  var element2 = $('div#savings-balance.balance')[0];

  if (savingsBalance <= 0) {
    element2.classList.add('zero');
  } else {
    element2.classList.remove('zero');
  }
  $('div#checking-balance')[0].innerHTML = '$' + checkingBalance;
  $('div#savings-balance')[0].innerHTML = '$' + savingsBalance;
  $('div#checking-amount')[0].val() = '';
  $('div#savings-amount')[0].val() = '';
}
