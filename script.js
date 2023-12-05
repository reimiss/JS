var userData = {};

function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    var diameter = parseInt(document.getElementById('diameter').value);

    if (isNaN(diameter) || diameter < 0) {
        alert("Diametras turi būti teigiamas skaičius!");
        return;
    }

    userData = {
        firstname: firstName,
        lastname: lastName,
        number1: number1,
        number2: number2,
        diameter: diameter
    };

    console.log(userData);

    displayUserInfo();
}

function displayUserInfo() {
    var resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';

    for (var key in userData) {
        var infoLine = document.createElement('p');
        infoLine.textContent = key + ": " + userData[key];
        resultContainer.appendChild(infoLine);
    }

    var sum = userData.number1 + userData.number2;
    var romanSum = convertToRomanNumeral(sum);


    var sumResult = document.createElement('p');
    sumResult.textContent = "Skaičių suma romėniškais skaičiais: " + romanSum;
    sumResult.style.color = getTextColorForDiameter(userData.diameter);
    resultContainer.appendChild(sumResult);
}

function convertToRomanNumeral(number) {
    var key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
               "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
               "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    var digits = String(number).split("");
    var roman = "";
    var i = 3;

    while (i--) {
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    }

    return Array(+digits.join("") + 1).join("M") + roman;
}

function getTextColorForDiameter(diameter) {
    if (diameter <= 7) {
        return "red";
    } else if (diameter > 7 && diameter <= 14) {
        return "orange";
    } else {
        return "green";
    }
}
