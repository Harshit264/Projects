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
//This is the data
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
//setting fucntion of buttons
setBtn(btn1, 1, "1")
setBtn(btn2, 2, "2")
setBtn(btn3, 3, "3")
setBtn(btn4, 4, "4")
setBtn(btn5, 5, "5")
setBtn(btn6, 6, "6")
setBtn(btn7, 7, "7")
setBtn(btn8, 8, "8")
setBtn(btn9, 9 ,"9")
setBtn(btn0, 0, "0")
setBtn(btnPoint, ".", ".")
setSignBtn(btnPlus, "+", "+")
setSignBtn(btnSubtract, "-", "-")
setSignBtn(btnMultiply, "*", "*")
setSignBtn(btnDivide, "/", "/")
//Clears everything
btnClear.addEventListener("click", function(){
    input.textContent = ""
    numbers[0].number = ""
    numbers[1].number = ""
    value = 0
})
//Convert the string value to numerical value and performs the calculations
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
//Functions used above
function btnfunc(visible, data){
    input.textContent += visible
    numbers[value].number += data
}
function signfunc(visible, data){
    if (value === 0){
        value = value + 1
    } else {
        value = 1
    }
    sign = visible
    input.textContent += data
}
function setBtn(btn, visible, data){
    btn.addEventListener("click", function(){
        btnfunc(visible, data)
    })
}
function setSignBtn(btn, visible, data){
    btn.addEventListener("click", function(){
        signfunc(visible, data)
    })
}