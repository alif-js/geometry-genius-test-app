function getInputFieldValueById(inputFieldId){
    const inputFieldElement = document.getElementById(inputFieldId);
    const inputFieldValueStr = inputFieldElement.value;
    const inputFieldValue = parseFloat(inputFieldValueStr);
    return inputFieldValue;
}

function getTextFieldValueById(textFieldId){
    const textFieldElement = document.getElementById(textFieldId);
    const textFieldValue = textFieldElement.innerText;
    return textFieldValue;
}