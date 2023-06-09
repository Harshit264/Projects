const express = require("express")
const app = express()

let myLeads = []
const localStorageLeads = JSON.parse(localStorage.getItem("myLeads"))
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

if (localStorageLeads){
    myLeads = localStorageLeads
    render(myLeads)
}

function render(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems +=`
    <li>
        <a target= '_blank' href = '${leads[i]}'>
         ${leads[i]}
        </a>
    </li>
`
    }
    ulEl.innerHTML = listItems
} 

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

app.listen(5000, () => {
    console.log("The server is listening...")
})