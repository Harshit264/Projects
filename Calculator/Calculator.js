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

btn1.addEventListener("click", function(){
    input.textContent += 1
    numbers[value].number += "1"
})
btn2.addEventListener("click", function(){
    input.textContent += 2
    numbers[value].number += "2"
})
btn3.addEventListener("click", function(){
    input.textContent += 3
    numbers[value].number += "3"
})
btn4.addEventListener("click", function(){
    input.textContent += 4
    numbers[value].number += "4"
})
btn5.addEventListener("click", function(){
    input.textContent += 5
    numbers[value].number += "5"
})
btn6.addEventListener("click", function(){
    input.textContent += 6
    numbers[value].number += "6"
})
btn7.addEventListener("click", function(){
    input.textContent += 7
    numbers[value].number += "7"
})
btn8.addEventListener("click", function(){
    input.textContent += 8
    numbers[value].number += "8"
})
btn9.addEventListener("click", function(){
    input.textContent += 9
    numbers[value].number += "9"
})
btn0.addEventListener("click", function(){
    input.textContent += 0
    numbers[value].number += "0"
})
btnPoint.addEventListener("click", function(){
    input.textContent += "."
    numbers[value].number += "."
})


btnPlus.addEventListener("click", function(){
    if (value === 0){
        value = value + 1
    } else {
        value = 1
    }
    sign = "+"
    input.textContent += "+"
})
btnSubtract.addEventListener("click", function(){
    if (value === 0){
        value = value + 1
    } else {
        value = 1
    }
    sign = "-"
    input.textContent += "-"
})
btnMultiply.addEventListener("click", function(){
    if (value === 0){
        value = value + 1
    } else {
        value = 1
    }
    sign = "*"
    input.textContent += "*"
})
btnDivide.addEventListener("click", function(){
    if (value === 0){
        value = value + 1
    } else {
        value = 1
    }
    sign = "/"
    input.textContent += "/"
})
btnClear.addEventListener("click", function(){
    input.textContent = ""
    numbers[0].number = ""
    numbers[1].number = ""
    value = 0
})
btnEqual.addEventListener("click", function(){
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
})