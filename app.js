function fibonacci(num) {
    let f0 = 0;
    let f1 = 1;
    let fn = 1;
    if (num < 0) {
        return -1;
    } else if ((num == 0) || (num == 1)) {
        return num;
    } else {
        for (let i = 2; i < num; i++) {
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
        }
    }
    return fn;
}

function bai1() {
    let inputNumber = parseInt(prompt("Enter amount of Fibonacci to display: "))
    let count = 0;
    let fibonacciList = "";

    while (count < inputNumber) {
        fibonacciList += fibonacci(count) + " ";
        count++;
    }
    alert(fibonacciList);
}

function bai2() {
    let inputNumber = parseInt(prompt("Enter a Positive Number: "));
    let factorial = 1;
    for (let i = inputNumber; i > 0; i--) {
        factorial *= i;
    }
    alert("Factorial of " + inputNumber + " = " + factorial);
}

function bai3() {
    let triangle = ""
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= i; j++) {
            triangle += "*";
        }
        triangle += "\n";
    }
    triangle += "\n";

    let temp1 = 5;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < temp1; j++) {
            triangle += "*";
        }
        temp1 -= 1;
        triangle += "\n";
    }
    triangle += "\n";
    alert(triangle);
}

function bai4() {
    let rectangle = "";
    for (let i = 0; i < 7; i++) {
        if (i === 0 || i === 6) {
            for (let j = 0; j < 20; j++) {
                rectangle += " * ";
            }
        } else {
            for (let j = 0; j < 20; j++) {
                if (j === 0) {
                    rectangle += " * ";
                } else if(j===19){
                    rectangle+= "           *";
                } else {
                    rectangle += "   ";
                }
            }
            rectangle+="\n";
        }

    }
    alert(rectangle);
}

function bai5() {
    let deposit = parseInt(prompt("Enter your Deposit: "));
    let timePeriod = parseInt(prompt("Enter the Time Period (month)"));
    let interestRate = parseInt(prompt("Enter your Interest Rate (%)"));
    let interest = 0;
    interest = deposit * (interestRate/100)  * ((timePeriod*30) / 360);
    alert("Your Interest: " + interest);
}