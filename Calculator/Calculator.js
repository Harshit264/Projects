const input = document.getElementById("input")

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn8 = document.getElementById("btn8")
const btn9 = document.getElementById("btn9")
const btn0 = document.getElementById("btn0")
const btnPoint = document.getElementById("btnPoint")

const btnPlus = document.getElementById("btn+")
const btnSubtract = document.getElementById("btn-")
const btnMultiply = document.getElementById("btn*")
const btnDivide = document.getElementById("btn/")
const btnClear = document.getElementById("btnC")
const btnEqual = document.getElementById("btnEqual")

let numbers = [    
    {
        number: ""
    },
    {
        number: ""
    }
]

let value = 0   
let sign = ""

function btnfunction(name, value1, value2){
    name.addEventListener("click", function(){
        input.textContent += value1
        numbers[value].number += value2
    })
}

btnfunction(btn1, 1, "1")
btnfunction(btn2, 2, "2")
btnfunction(btn3, 3, "3")
btnfunction(btn4, 4, "4")
btnfunction(btn5, 5, "5")
btnfunction(btn6, 6, "6")
btnfunction(btn7, 7, "7")
btnfunction(btn8, 8, "8")
btnfunction(btn9, 9, "9")
btnfunction(btn0, 0, "0")
btnfunction(btnPoint, ".", ".")

function equate() {
    numbers[0].number = Number(numbers[0].number)
    numbers[1].number = Number(numbers[1].number)
    if (sign === "+"){
        numbers[0].number = numbers[0].number + numbers[1].number
        numbers[1].number = ""      
    } else if (sign === "-"){
        numbers[0].number = numbers[0].number - numbers[1].number
        numbers[1].number = "" 
    } else if (sign === "*"){
        numbers[0].number = numbers[0].number * numbers[1].number
        numbers[1].number = "" 
    } else {
        numbers[0].number = numbers[0].number / numbers[1].number
        numbers[1].number = "" 
    } 
    input.textContent = numbers[0].number
}

function signfunction(name, sign1, sign2){
    name.addEventListener("click", function(){
        if (value === 0){
            value = value + 1
        } else if (value ===1) {
            equate()
        } else {
            value = 1
        }
        sign = sign1
        input.textContent += sign2    
    })
}

signfunction(btnPlus, "+", "+")
signfunction(btnSubtract, "-", "-")
signfunction(btnMultiply, "*", "*")
signfunction(btnDivide, "/", "/")

btnClear.addEventListener("click", function(){
    input.textContent = ""
    numbers[0].number = ""
    numbers[1].number = ""
    value = 0
})

btnEqual.addEventListener("click", function(){
    equate()
})