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

modulea.exports = { setBtn, setSignBtn }