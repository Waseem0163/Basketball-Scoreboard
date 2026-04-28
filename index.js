const addOneHome = document.getElementById("addOneHome")
const addTwoHome = document.getElementById("addTwoHome")
const addThreeHome = document.getElementById("addThreeHome")

const addOneGuest = document.getElementById("addOneGuest")
const addTwoGuest = document.getElementById("addTwoGuest")
const addThreeGuest = document.getElementById("addThreeGuest")


function addOneH(){
    let count = Number(document.getElementById("countHome").textContent)
    document.getElementById("countHome").textContent = count + 1
}

function addTwoH(){
    let count = Number(document.getElementById("countHome").textContent)
    document.getElementById("countHome").textContent = count + 2
}

function addThreeH(){
    let count = Number(document.getElementById("countHome").textContent)
    document.getElementById("countHome").textContent = count + 3
}

// For Guest 

function addOneG(){
    let count = Number(document.getElementById("countGuest").textContent)
    document.getElementById("countGuest").textContent = count + 1
}

function addTwoG(){
    let count = Number(document.getElementById("countGuest").textContent)
    document.getElementById("countGuest").textContent = count + 2
}

function addThreeG(){
    let count = Number(document.getElementById("countGuest").textContent)
    document.getElementById("countGuest").textContent = count + 3
}

// New Game Button

function newGame(){
    document.getElementById("countGuest").textContent = 0
    document.getElementById("countHome").textContent = 0
}
