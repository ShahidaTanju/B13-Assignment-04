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
const filteredSection = document.getElementById("filtered-section");

function calculateCount() {
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();


// button toggle :

function toggleStyle(id) {
    allFilterBtn.classList.remove("bg-blue-600");
    interviewFilterBtn.classList.remove("bg-blue-600");
    rejectedFilterBtn.classList.remove("bg-blue-600");

    allFilterBtn.classList.add("bg-amber-50");
    interviewFilterBtn.classList.add("bg-amber-50");
    rejectedFilterBtn.classList.add("bg-amber-50");

    const selected = document.getElementById(id);

    selected.classList.remove("bg-amber-50");
    selected.classList.add("bg-blue-600");

    if (id == "interview-btn") {
        allCardSection.classList.add("hidden");
        filteredSection.classList.remove("hidden");
    }
    else if (id == "all-btn") {
        allCardSection.classList.remove("hidden");
        filteredSection.classList.add("hidden");
    }
}


mainContainer.addEventListener("click", function (event) {
    // console.log(event.target.classList.contains('interview-btn'));

    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.closest(".job-card");

        const jobName = parentNode.querySelector(".jobName").innerText;
        const jobDetails = parentNode.querySelector(".jobDetails").innerText;
        const jobSalary = parentNode.querySelector(".jobSalary").innerText;
        const status = parentNode.querySelector(".status").innerText;
        const notes = parentNode.querySelector(".notes").innerText;

        parentNode.querySelector(".status").innerText = "INTERVIEW";

        const cardInfo = {
            jobName,
            jobDetails,
            jobSalary,
            status: "INTERVIEW",
            notes
        };

        const jobOffer = interviewList.find(item => item.jobName == cardInfo.jobName)

        if (!jobOffer) {
            interviewList.push(cardInfo)
        }
        renderInterview();
    }

})

function renderInterview() {
    filteredSection.innerHTML = ''

    for (let interview of interviewList) {
        console.log(interview);
        let div = document.createElement('div');
        div.className = 'card flex justify-between bg-amber-50 px-5 py-5 mt-10 rounded-2xl'
        div.innerHTML = `
         <div class="space-y-6">
                    <div>
                        <h3 class="jobName text-blue-600 font-bold text-2xl">${interview.jobName}</h3>
                        <p class="jobDetails text-gray-400">${interview.jobDetails}</p>
                    </div>
                    <div>
                        <p class="jobSalary text-gray-400">${interview.jobSalary}</p>
                    </div>
                    <div>
                        <button class="status px-3 py-2 bg-blue-50 rounded-1xl mb-3 text-blue-500">${interview.status}</button>
                        <p class="notes text-gray-500">${interview.notes}</p>
                    </div>
                    <div class="gap-5">
                        <button
                            class="interview-btn bg-amber-50 px-5 py-3 text-green-500 border-2 border-green-500 rounded-2xl">INTERVIEW</button>
                        <button
                            class="rejected-btn bg-amber-50 px-5 py-3 text-red-500 border-2 border-red-500 rounded-2xl">REJECTED</button>
                    </div>
                    </div>
                <div>
                    <i class="fa-solid fa-trash"></i>
                </div>
        
                `
        filteredSection.appendChild(div);
    }
}



// new

// let interviewList = []
// let rejectedList = []

// let total = document.getElementById('total')
// let interviewCount = document.getElementById('interviewCount')
// let rejectedCount = document.getElementById('rejectedCount')

// const allFilterBtn = document.getElementById('all-btn')
// const interviewFilterBtn = document.getElementById('interview-btn')
// const rejectedFilterBtn = document.getElementById('rejected-btn')

// const allCardSection = document.getElementById('allCards')
// const mainContainer = document.querySelector('main')
// const filteredSection = document.getElementById('filtered-section')

function calculateCount() {
    total.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}
calculateCount()

// tab toggle function
function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-blue-600')
    interviewFilterBtn.classList.remove('bg-blue-600')
    rejectedFilterBtn.classList.remove('bg-blue-600')

    allFilterBtn.classList.add('bg-amber-50')
    interviewFilterBtn.classList.add('bg-amber-50')
    rejectedFilterBtn.classList.add('bg-amber-50')

    const selected = document.getElementById(id)

    selected.classList.remove('bg-amber-50')
    selected.classList.add('bg-blue-600')

    if (id == 'interview-btn') {
        allCardSection.classList.add('hidden')
        filteredSection.classList.remove('hidden')
    } else if (id == 'all-btn') {
        allCardSection.classList.remove('hidden')
        filteredSection.classList.add('hidden')
    }
}


function handleInterview(event) {
    const card = event.parentNode.parentNode.parentNode // button -> div -> div -> div
    const jobName = card.querySelector('.jobName').innerText
    const jobDetails = card.querySelector('.jobDetails').innerText
    const jobSalary = card.querySelector('.jobSalary').innerText
    const status = card.querySelector('.status')
    const notes = card.querySelector('.notes').innerText
    status.innerText = 'INTERVIEW';

    const cardInfo = {
        jobName,
        jobDetails,
        jobSalary,
        status: 'INTERVIEW',
        notes,
    }
    //  exist into the interview list
    const jobOffer = interviewList.find(
        (item) => item.jobName == cardInfo.jobName,
    )

    // is exist into the rejected list


    if (!jobOffer) {
        interviewList.push(cardInfo)
    }
    renderInterview()

}
function handleReject(event) {
    const card = event.parentNode.parentNode.parentNode // button -> div -> div -> div
    const jobName = card.querySelector('.jobName').innerText
    const jobDetails = card.querySelector('.jobDetails').innerText
    const jobSalary = card.querySelector('.jobSalary').innerText
    const status = card.querySelector('.status')
    const notes = card.querySelector('.notes').innerText
    status.innerText = 'REJECTED';

    const cardInfo = {
        jobName,
        jobDetails,
        jobSalary,
        status: 'REJECTED',
        notes,
    }
    const jobOffer = rejectedList.find(
        (item) => item.jobName == cardInfo.jobName,
    )

    if (!jobOffer) {
        rejectedList.push(cardInfo)
    }
    // renderInterview()

}

// mainContainer.addEventListener('click', function (event) {
// 	// console.log(event.target.classList.contains('interview-btn'));

// 	if (event.target.classList.contains('interview-btn')) {
// 		const parentNode = event.target.closest('.job-card')

// 		const jobName = parentNode.querySelector('.jobName').innerText
// 		const jobDetails = parentNode.querySelector('.jobDetails').innerText
// 		const jobSalary = parentNode.querySelector('.jobSalary').innerText
// 		const status = parentNode.querySelector('.status').innerText
// 		const notes = parentNode.querySelector('.notes').innerText

// 		parentNode.querySelector('.status').innerText = 'INTERVIEW'

// 		const cardInfo = {
// 			jobName,
// 			jobDetails,
// 			jobSalary,
// 			status: 'INTERVIEW',
// 			notes,
// 		}

// 		const jobOffer = interviewList.find(
// 			(item) => item.jobName == cardInfo.jobName,
// 		)

// 		if (!jobOffer) {
// 			interviewList.push(cardInfo)
// 		}
// 		renderInterview()
// 	}
// })

function renderInterview() {
    filteredSection.innerHTML = ''

    for (let interview of interviewList) {
        console.log(interview)
        let div = document.createElement('div')
        div.className =
            'card flex justify-between bg-amber-50 px-5 py-5 mt-10 rounded-2xl'
        div.innerHTML = `
         <div class="space-y-6">
                    <div>
                        <h3 class="jobName text-blue-600 font-bold text-2xl">${interview.jobName}</h3>
                        <p class="jobDetails text-gray-400">${interview.jobDetails}</p>
                    </div>
                    <div>
                        <p class="jobSalary text-gray-400">${interview.jobSalary}</p>
                    </div>
                    <div>
                        <button class="status px-3 py-2 bg-blue-50 rounded-1xl mb-3 text-blue-500">${interview.status}</button>
                        <p class="notes text-gray-500">${interview.notes}</p>
                    </div>
                    <div class="gap-5">
                        <button
                            class="interview-btn bg-amber-50 px-5 py-3 text-green-500 border-2 border-green-500 rounded-2xl">INTERVIEW</button>
                        <button
                            class="rejected-btn bg-amber-50 px-5 py-3 text-red-500 border-2 border-red-500 rounded-2xl">REJECTED</button>
                    </div>
                    </div>
                <div>
                    <i class="fa-solid fa-trash"></i>
                </div>

                `
        filteredSection.appendChild(div)
    }
}
