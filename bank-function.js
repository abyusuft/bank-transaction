// Get input Data 
function getInputAmmount(inputField) {

    const inputData = document.getElementById(inputField);
    const newInputAmmount = parseFloat(inputData.value);
    // clear Input Field 
    inputData.value = '';
    return newInputAmmount;

}

// update input to Field 
function updateDataField(fieldId, input) {
    const depositField = document.getElementById(fieldId);
    const previousDepositAmmount = depositField.innerText;
    const newDepositTotal = parseFloat(previousDepositAmmount) + parseFloat(input);

    depositField.innerText = newDepositTotal;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(input, isAdd) {
    // update balace 
    const balanceTotal = document.getElementById('balance');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + parseFloat(input);
        balanceTotal.innerText = newBalanceTotal;
    }
    if (isAdd == false) {
        const newBalanceTotal = previousBalanceTotal - parseFloat(input);
        balanceTotal.innerText = newBalanceTotal;
    }
}

function addHistory(inputAmmount, what) {
    const withdrewHistoryAdd = document.createElement('li');
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let whatIs = '';
    if (what == 'diposit') {
        whatIs = "Diposited";
    }
    if (what == 'withdrew') {
        whatIs = "Withdrewn";
    }
    withdrewHistoryAdd.innerText = 'You have' + what + ' : $' + inputAmmount + ' at ' + time;
    document.getElementById('item-list').appendChild(withdrewHistoryAdd);
}


// Deposit Ammount Handler
document.getElementById('deposit-button').addEventListener('click', function () {

    const getInput = getInputAmmount('deposit-input');
    if (getInput > 0) {
        const updateData = updateDataField('deposit', getInput);
        const balance = updateBalance(getInput, true);
        const historyAdd = addHistory(getInput, 'Diposit');
    }
    else {
        alert('You cant deposit less than 1$!');
    }



})
// Withdrew Ammount Handler 
document.getElementById('withdrew-button').addEventListener('click', function () {

    const getInput = getInputAmmount('withdrew-input');
    const currentBalance = getCurrentBalance();
    if (currentBalance < getInput) {
        const errorMessage1 = 'You Dont Have Sufficent Balance!!!!';
        const errorMessage = ' Your Current Balance is : ';

        alert(errorMessage1 + errorMessage + currentBalance);
        return;
    }
    if (getInput > 0) {
        const updateData = updateDataField('withdrew', getInput);
        const balance = updateBalance(getInput, false);
        const historyAdd = addHistory(getInput, 'Withdrew');
    }

    else {
        alert('You cant withdrew less than 1$!');

    }

})