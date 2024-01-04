function calculate() {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);

    if (validateInput(sideA, sideB, sideC)) {
        var area = calculateArea(sideA, sideB, sideC);
        var perimeter = calculatePerimeter(sideA, sideB, sideC);

        displayResult(area, perimeter);
    } else {
        alert('Invalid triangle sides. Please ensure the values satisfy the triangle inequality theorem.');
    }
}

function validateInput(a, b, c) {
    return a + b > c && b + c > a && a + c > b;
}

function calculateArea(a, b, c) {
    var s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
}

function calculatePerimeter(a, b, c) {
    return (a + b + c).toFixed(2);
}

function displayResult(area, perimeter) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<strong>Result:</strong><br>Area: ' + area + '<br>Perimeter: ' + perimeter;
}
