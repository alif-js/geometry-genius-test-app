// TRIANGLE
document.getElementById('btn-triangle').addEventListener('click', function () {
    const shapeName = getTextFieldValueById('name-triangle');
    const firstInput = getInputFieldValueById('triangle-input-1');
    const secondInput = getInputFieldValueById('triangle-input-2');
    
    const area = 0.5*firstInput*secondInput;

    let element = document.createElement('p');
    element.innerText = shapeName+' - '+area+' cm2';
    
    let elementContainer = document.getElementById('results-container');
    elementContainer.appendChild(element);
})

// RECTANGLE
document.getElementById('btn-rectangle').addEventListener('click', function () {
    const shapeName = getTextFieldValueById('name-rectangle');
    const firstInput = getInputFieldValueById('rectangle-input-1');
    const secondInput = getInputFieldValueById('rectangle-input-2');
    
    const area = firstInput*secondInput;

    let element = document.createElement('p');
    element.innerText = shapeName+' - '+area+' cm2';
    
    let elementContainer = document.getElementById('results-container');
    elementContainer.appendChild(element);
})

// PARALLELOGRAM
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const shapeName = getTextFieldValueById('name-parallelogram');
    const firstInput = getInputFieldValueById('parallelogram-input-1');
    const secondInput = getInputFieldValueById('parallelogram-input-2');
    
    const area = firstInput*secondInput;

    let element = document.createElement('p');
    element.innerText = shapeName+' - '+area+' cm2';
    
    let elementContainer = document.getElementById('results-container');
    elementContainer.appendChild(element);
})

// RHOMBUS
document.getElementById('btn-rhombus').addEventListener('click', function () {
    const shapeName = getTextFieldValueById('name-rhombus');
    const firstInput = getInputFieldValueById('rhombus-input-1');
    const secondInput = getInputFieldValueById('rhombus-input-2');
    
    const area = 0.5*firstInput*secondInput;

    let element = document.createElement('p');
    element.innerText = shapeName+' - '+area+' cm2';
    
    let elementContainer = document.getElementById('results-container');
    elementContainer.appendChild(element);
})

// PENTAGON
document.getElementById('btn-pentagon').addEventListener('click', function () {
    const shapeName = getTextFieldValueById('name-pentagon');
    const firstInput = getInputFieldValueById('pentagon-input-1');
    const secondInput = getInputFieldValueById('pentagon-input-2');
    
    const area = 0.5*firstInput*secondInput;

    let element = document.createElement('p');
    element.innerText = shapeName+' - '+area+' cm2';
    
    let elementContainer = document.getElementById('results-container');
    elementContainer.appendChild(element);
})

// ELLIPSE
document.getElementById('btn-ellipse').addEventListener('click', function () {
    const shapeName = getTextFieldValueById('name-ellipse');
    const firstInput = getInputFieldValueById('ellipse-input-1');
    const secondInput = getInputFieldValueById('ellipse-input-2');
    
    const areaDecimal = Math.PI*firstInput*secondInput;
    const area = areaDecimal.toFixed(2);

    let element = document.createElement('p');
    element.innerText = shapeName+' - '+area+' cm2';
    
    let elementContainer = document.getElementById('results-container');
    elementContainer.appendChild(element);
})