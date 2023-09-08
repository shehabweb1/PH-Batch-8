document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInputValue =  getElementInputValue('input-withdraw')
    
    if(isNaN(withdrawInputValue)){
        alert("Input must be a number")
        return;
    }

    const withdrawString = getElementStringAmount('withdraw-amount')
    
    const withdrawTotal = withdrawInputValue + withdrawString;

    getAddAmount('withdraw-amount', withdrawTotal)

    const balanceString = getElementStringAmount('balance-amount');
    const totalBalance = balanceString - withdrawInputValue;
    getAddAmount('balance-amount', totalBalance)

})