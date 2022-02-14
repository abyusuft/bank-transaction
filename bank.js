// Deposit Ammount Handler
document.getElementById('deposit-button').addEventListener('click', function () {


    const depositInput = document.getElementById('deposit-input');
    const newDepositAmmount = depositInput.value;
    if (newDepositAmmount <= 0) {
        alert('you cant deposit less than 1$');
        return;

    }
    const depositField = document.getElementById('deposit');

    const previousDepositAmmount = depositField.innerText;
    const newDepositTotal = parseFloat(previousDepositAmmount) + parseFloat(newDepositAmmount);

    depositField.innerText = newDepositTotal;

    // Transaction History Add 

    const depositHistoryAdd = document.createElement('li');
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    depositHistoryAdd.innerText = 'You have Deposited : $' + newDepositAmmount + ' at ' + time;
    document.getElementById('item-list').appendChild(depositHistoryAdd);
    depositInput.value = 0;

    // update balace 
    const balanceTotal = document.getElementById('balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmmount);
    balanceTotal.innerText = newBalanceTotal;

})
// Withdrew Ammount Handler 
document.getElementById('withdrew-button').addEventListener('click', function () {
    const withdrewInput = document.getElementById('withdrew-input');
    const newWithdrewAmmount = withdrewInput.value;
    if (newWithdrewAmmount <= 0) {
        alert('you cant withdrew less than 1$');
        return;

    }


    const withdrewField = document.getElementById('withdrew');

    const previousWithdrewAmmount = withdrewField.innerText;
    const newWithdrewTotal = parseFloat(previousWithdrewAmmount) + parseFloat(newWithdrewAmmount);

    // update balace 
    const balanceTotal = document.getElementById('balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - parseFloat(newWithdrewAmmount);


    if (previousBalanceTotal < newWithdrewAmmount) {
        alert('You dont have sufficent Balance. Your Current Balance is : ' + previousBalanceTotal);
        return;
    }
    balanceTotal.innerText = newBalanceTotal;

    withdrewField.innerText = newWithdrewTotal;

    // Transaction History Add 
    const withdrewHistoryAdd = document.createElement('li');
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    withdrewHistoryAdd.innerText = 'You have Withdrewn : $' + newWithdrewAmmount + ' at ' + time;
    document.getElementById('item-list').appendChild(withdrewHistoryAdd);
    withdrewInput.value = 0;


})