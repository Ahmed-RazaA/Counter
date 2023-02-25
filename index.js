let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
function increment(){
    count += 1;
    countEl.textContent = count;
}
function save(){
    let previousData = count + " - "; 
    saveEl.textContent += previousData;
    count = 0;
    countEl.textContent = count;
}