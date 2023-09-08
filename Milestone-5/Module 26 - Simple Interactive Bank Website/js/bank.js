// Deposit
document.getElementById('depositBtn').addEventListener('click', function() {
    const depositFlied = document.getElementById('depositAmount');
    const depositAmount = depositFlied.value;
    const newDepositAmount = parseFloat(depositAmount)

    depositFlied.value = '';

    if(isNaN(newDepositAmount)){
        alert("Enter a valid deposit amount")
        return;
    }

    const totalDepositElement = document.getElementById('total-deposit');
    const totalDeposit = totalDepositElement.innerText
    const newTotalDeposit = parseFloat(totalDeposit)

    const currentDepositAmount = newTotalDeposit + newDepositAmount
    totalDepositElement.innerText = currentDepositAmount

    const currentBalanceElement = document.getElementById('currentBalance');
    const currentBalance = currentBalanceElement.innerText
    const newCurrentBalance = parseFloat(currentBalance)

    const totalCurrentBalance = newCurrentBalance + newDepositAmount;
    currentBalanceElement.innerText = totalCurrentBalance
    
    
})


// Withdraw
document.getElementById('withdrawBtn').addEventListener('click', function() {
    const withdrawFlied = document.getElementById('withdrawAmount');
    const withdrawAmount = withdrawFlied.value;
    const newWithdrawAmount = parseFloat(withdrawAmount)
    
    withdrawFlied.value = '';

    if(isNaN(newWithdrawAmount)){
        alert("Enter a valid withdraw amount")
        return;
    }

    const totalWithdrawElement = document.getElementById('total-withdraw');
    const totalWithdraw = totalWithdrawElement.innerText
    const newTotalWithdraw = parseFloat(totalWithdraw)

    const currentBalanceElement = document.getElementById('currentBalance');
    const currentBalance = currentBalanceElement.innerText
    const newCurrentBalance = parseFloat(currentBalance)


    if(newCurrentBalance < newWithdrawAmount){
        alert("Check have your current balance")
        return;
    }

    const currentWithdrawAmount = newTotalWithdraw + newWithdrawAmount
    totalWithdrawElement.innerText = currentWithdrawAmount;

    const totalBalance = newCurrentBalance - newWithdrawAmount;
    currentBalanceElement.innerText = totalBalance

})