let interviewList = [];
let rejectedList = [];


let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const allFilterBtn = document.getElementById("all-btn");
const interviewFilterBtn = document.getElementById("interview-btn");
const rejectedFilterBtn = document.getElementById("rejected-btn");


const allCardSection = document.getElementById("allCards");

const mainContainer = document.querySelector("main");

function calculateCount() {
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();

function toggleStyle(id) {
    allFilterBtn.classList.remove("bg-blue-600");
    interviewFilterBtn.classList.remove("bg-blue-600");
    rejectedFilterBtn.classList.remove("bg-blue-600");

    allFilterBtn.classList.add("bg-gray-300");
    interviewFilterBtn.classList.add("bg-gray-300");
    rejectedFilterBtn.classList.add("bg-gray-300");

    const selected = document.getElementById(id);

    selected.classList.remove("bg-gray-300");
    selected.classList.add("bg-blue-600");
}