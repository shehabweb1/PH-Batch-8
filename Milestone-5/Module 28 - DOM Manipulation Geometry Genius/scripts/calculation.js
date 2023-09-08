function getAddTriangle(){
    const base = getInputField('triangle-base')
    const height = getInputField('triangle-height')
    const triangleResult = 0.5 * base * height;

    getAddResult('triangle-result', triangleResult);

    getAddCalculation("Triangle", triangleResult)
}

function getAddRectangle(){
    const width = getInputField('rectangle-width')
    const length = getInputField('rectangle-length')
    const rectangleResult = width * length;

    getAddResult('rectangle-result', rectangleResult);

    getAddCalculation("Rectangle", rectangleResult)
}

function getAddParallelogram(){
    const base = getInputField('parallelogram-base')
    const height = getInputField('parallelogram-height')
    const parallelogramResult = base * height;

    getAddResult('parallelogram-result', parallelogramResult);

    getAddCalculation("Parallelogram", parallelogramResult)
}

function getAddRhombus(){
    const rhombusD1 = getInputField('rhombus-d1')
    const rhombusD2 = getInputField('rhombus-d2')
    const rhombusResult = 0.5 * rhombusD1 * rhombusD2;

    getAddResult('rhombus-result', rhombusResult);

    getAddCalculation("Rhombus", rhombusResult)
}

function getAddPentagon(){
    const pentagonP = getInputField('pentagon-p')
    const pentagonB = getInputField('pentagon-b')
    const pentagonResult = 0.5 * pentagonP * pentagonB;

    getAddResult('pentagon-result', pentagonResult);

    getAddCalculation("Pentagon", pentagonResult)
}

function getAddEllipse(){
    const ellipseA = getInputField('ellipse-a')
    const ellipseB = getInputField('ellipse-b')
    const ellipseResult = Math.PI * ellipseA * ellipseB;

    const finalEllipseResult = ellipseResult.toFixed(2)

    getAddResult('ellipse-result', finalEllipseResult);

    getAddCalculation("Ellipse", finalEllipseResult)
}
