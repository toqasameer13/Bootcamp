
function input(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById('display').value;
    try {
        let result = eval(expression); 
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}


function roundNumber() {
    let value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value)) {
        document.getElementById('display').value = Math.round(value); // round to nerest int
    }
}  

function generateRandom() {
    document.getElementById('display').value = Math.random().toFixed(5); // generate random number between 0 and 1 ... fixed to 5 decimal places
}
