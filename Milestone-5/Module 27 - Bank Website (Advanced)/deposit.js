document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositInputValue =  getElementInputValue('input-deposit')

    if(isNaN(depositInputValue)){
        alert("Input must be a number")
        return;
    }

    const depositString = getElementStringAmount('deposit-amount')
    
    const depositTotal = depositInputValue + depositString;

    getAddAmount('deposit-amount', depositTotal)

    const balanceString = getElementStringAmount('balance-amount');
    const totalBalance = balanceString + depositInputValue;
    getAddAmount('balance-amount', totalBalance)

})