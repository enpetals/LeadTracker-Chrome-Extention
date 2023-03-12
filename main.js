
// function saveInput() {
//     console.log("Button Clicked")
// }

let myLeads = []
const inputEl = document.getElementById("input-el")
const saveLead = document.getElementById("btn-el")
const ulEl = document.getElementById("ul-el")
const deletEl = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tab = [{url:"https://www.linkedin.com"}
// ]

tabBtn.addEventListener("click", function(){
    
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myleads", JSON.stringify(myLeads))
    render(myLeads)
    })
    
 
})


function render(leads) {
    let listItems = ""
    for (i = 0; i < leads.length; i++) {
   
        // listItems += "<li><a target='_blank' href ='" + myLeads[i] + "' > " + myLeads[i] +" <a/></li>"
        listItems += `
            <li> 
                <a target='_blank' href ='${leads[i]}'> 
                ${leads[i]} <a/>
            </li>
        `
        
    // ANOTHER LONG WAY OF DOING THIS
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    
    ulEl.innerHTML = listItems
}
// MY code for deleting all the displayed arrays on the screen
//  deletEl.addEventListener("dblclick", function(){
//     deleteBtn()
//     localStorage.clear()
//  })

// function deleteBtn () {
//     myLeads = []
//     ulEl.textContent = myLeads

// }

deletEl.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
 })

 

saveLead.addEventListener("click", function() {
    // let inputValue = document.getElementById("input-el").value
    // let x = inputValue
    // myLeads.push(x)
    // console.log(myLeads)
    myLeads.push(inputEl.value)
    inputEl.value =""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    // To clear an input field
    // if (inputEl.value != ""){
    //     inputEl.value = ""
    // } ..... worked

    // this also worked
    console.log(localStorage.getItem("myLeads"))

})




