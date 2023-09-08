function getInputField(inputValue){
    const inputField = document.getElementById(inputValue);
    const inputValueText = inputField.value;
    const inputValueNumber = parseFloat(inputValueText);
    inputField.value = "";

    return inputValueNumber;
}

function getAddResult(resultSpan, resultValue){
    const resultTag = document.getElementById(resultSpan);
    resultTag.innerHTML = resultValue;
}

function getAddCalculation(name, result){
    const resultBox = document.getElementById('resultBox');

    const count = resultBox.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-5')
    p.innerHTML = `${count + 1}.  <span>${name}</span> <span class="mx-2">${result} cm <sup>2</sup></span>
    <button class="btn btn-sm btn-primary">Calculate</button>`

    resultBox.appendChild(p);
}