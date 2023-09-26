let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let resetEl = document.getElementById("reset-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {  
    let countStr = count + " - "
    resetEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset() {
    count = 0    
    let countStr = count    
    resetEl.textContent = null
    countEl.textContent = 0
}
