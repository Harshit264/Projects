const upBtn = document.querySelector(".upbtn")
const cl = document.getElementById("Cl")
const lt = document.getElementById("LT")
const na = document.getElementById("NA")
const ro = document.getElementById("Ro")
const ta = document.getElementById("TA")

function createLink(el, link) {
    el.addEventListener("click", () => {
        window.location.href = link
    }) 
}

createLink(upBtn, "#top")
createLink(cl, "https://github.com/Harshit264/Projects/tree/main/Calculator")
createLink(lt, "https://github.com/Harshit264/Projects/tree/main/Lead_Tracker")
createLink(na, "https://github.com/Harshit264/Projects/tree/main/Note_App")
createLink(ro, "https://github.com/Harshit264/Projects/tree/main/Roshambo")
createLink(ta, "https://github.com/Harshit264/Projects/tree/main/Todo_App")