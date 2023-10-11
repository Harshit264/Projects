const makeBtn = document.getElementById("make")
const note = document.getElementById("note")
const dataEl = document.getElementById("dataEl")
const deleteBtn = document.getElementById("deleteBtn")

makeBtn.addEventListener("click", () => {
    let data = dataEl.value
    note.innerHTML += `<pre id="noteData">${data}</pre><button id="deleteBtn" onclick = "remove()">Delete</button>`
    dataEl.value = ""
})

function remove(){
    document.getElementById("noteData").remove()
    document.getElementById("deleteBtn").remove()
}