// let count = 0;       // Arrow function
// let msgEl = document.querySelector("#msg");

// const updateCount = () => {
//     document.querySelector("#count").textContent = count;
// }

// const increaseCount = () => {
//     count++;
//     updateCount();
// }

// const decreaseCount = () => {
//     if (count > 0) {
//         count--;
//         updateCount();
//     }
// }

// const resetCount = () => {
//     count = 0;
//     updateCount();
// }

// const saveCount = () => {
//     localStorage.setItem("count", count);
//     msgEl.textContent = "Saved!";

//     setTimeout(() => {
//         msgEl.textContent = "";
//     }, 2000);
// }

// const loadCount = () => {
//     let saved = localStorage.getItem("count");
//     if (saved !== null) {
//         count = Number(saved);
//     }
//     updateCount();
// }

// document.querySelector("#btnIncrease").addEventListener("click", increaseCount);
// document.querySelector("#btnDecrease").addEventListener("click", decreaseCount);
// document.querySelector("#btnReset").addEventListener("click", resetCount);
// document.querySelector("#btnSave").addEventListener("click", saveCount);
// document.querySelector("#btnload").addEventListener("click", loadCount);

// loadCount();

document.querySelector("#btnIncrease").addEventListener("click", increaseCount);
document.querySelector("#btnDecrease").addEventListener("click", decreaseCount);
document.querySelector("#btnReset").addEventListener("click", resetCount);
document.querySelector("#btnSave").addEventListener("click", saveCount);
document.querySelector("#btnLoad").addEventListener("click", loadCount);

let count = 0;
let msgEl = document.querySelector("#msg");

function updateCount() {
    document.querySelector("#count").textContent = count;
}

function increaseCount() {
    count++;
    updateCount();
}

function decreaseCount() {
    if(count > 0){
        count--;
        updateCount();
    }
}

function resetCount() {
    count = 0;
    updateCount();
}

function saveCount() {
    localStorage.setItem("count", count);
     msgEl.textContent = "Saved!";

    setTimeout(function () {
        msgEl.textContent = "";
    }, 2000);
}

function loadCount() {
    let saved = localStorage.getItem("count");
    if(saved !== null){
        count = Number(saved);
    }
    updateCount();
}

loadCount();