let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

const inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)

    //console.log(myLeads)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)

})


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {

        //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li> "
        listItems += `
        <li>
        <a target='_blank' href='${leads[i]}'>
         ${leads[i]}
        </a>
        </li>`
    }

    ulEl.innerHTML = listItems

}