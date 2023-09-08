function getElementInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString)
    inputField.value = '';

    return inputValue;
}

function getElementStringAmount(stringId){
    const stringField = document.getElementById(stringId);
    const stringAmount = stringField.innerText;
    const stringAmountToNumber = parseFloat(stringAmount);

    return stringAmountToNumber;
}

function getAddAmount(totalId, totalAmount) {
    const amountFind = document.getElementById(totalId);
    amountFind.innerText = totalAmount;
}
