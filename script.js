//Variables
let a 
let b
let operator


//Buttons
let numbers = document.querySelectorAll(".number")
let operators = document.querySelectorAll(".operator")
let del = document.querySelectorAll(".delete")
let work = document.querySelector(".work p")
let results = document.querySelector(".results p")
let workContent = work.textContent
let eval = document.querySelector(".eval")
let decimal = document.querySelector(".decimal")

//EventListeners
operators.forEach((operator) => {
    operator.addEventListener("click", (e) =>{
        if (isNaN(work.textContent)) {
            evalResult = Math.round(operate(a, operators, b)*1000)/1000
            results.textContent = evalResult
            work.textContent += e.target.textContent
            operators = e.target.textContent
            a = evalResult
            b = ""
            numStr = ""
        } else if (results.textContent === ""){
            return
        } else {
            work.textContent += e.target.textContent
            results.textContent = ""
            operators = e.target.textContent
            numStr = ""
        }
    })
})

//To store an input greater than one digit
let numStr = ""

//Store and display numbers corresponding to the buttons pressed
numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        numStr += e.target.textContent
        work.textContent += e.target.textContent
        if (isNaN(work.textContent)) {
            b = parseFloat(numStr)
        } else {
            results.textContent += e.target.textContent
            a = parseFloat(numStr)
        }
    })
})

//Decimal
decimal.addEventListener("click", dec)

function dec(e) {
    if (results.textContent.includes(".")) return
    if (results.textContent === ""){
        numStr = "0"
    }
    if (isNaN(work.textContent)){
        work.textContent += e.target.textContent
        numStr += e.target.textContent
    } else {
        results.textContent += e.target.textContent
        work.textContent += e.target.textContent
        numStr += e.target.textContent
    }
}

//The equal sign
eval.addEventListener("click", evaluate)

let evalResult

function evaluate (e) {
    evalResult = Math.round(operate(a, operators, b)*1000)/1000
    if(work.textContent === ""){
        work.textContent = ""
        results.textContent = ""
    } else if (evalResult == "Infinity") {
        work.textContent = "7177135"
        results.textContent = "8008135"
        a = ""
        b = ""
    } else {
        console.log(typeof evalResult)
        results.textContent = evalResult
        work.textContent = evalResult
        numStr = evalResult
        a = evalResult
        b = ""
    }
}

//The AC and Back buttons
del.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        switch(e.target.textContent) {
            case "AC":
                return clear()
                break
            case "Back":
                return back()
                break
        }
    })
})


//Math functions
function operate (a, operators, b){
    switch (operators) {
        case "+":
            return add(a, b);
            break
        case "-":
            return subtract(a, b);
            break
        case "x":
            return multiply(a, b);
            break
        case "/":
            return divide(a, b)
            break
    }
}

function add(a, b) {
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}


function clear() {
    results.textContent = ""
    work.textContent = ""
    a = undefined
    b = undefined
    numStr = ""
    evalResult = 0
}

//Removing one item from the work
function back() {
    let arrWork = Array.from(work.textContent)
    arrWork.pop()
    let arrResults = Array.from(results.textContent)
    arrResults.pop()
    work.textContent = arrWork.join("").toString()
    results.textContent = arrResults.join("").toString()
    if(work.textContent === ""){
        a = undefined
        b = undefined
    }
    if(!isNaN(work.textContent)){
        a = parseInt(work.textContent)
        b = undefined
    }
    if (work.textContent.length === 1){
        numStr = ""
    }
}
