const eventForm = document.getElementById("eventform");
const clearAllBtn = document.getElementById("clearallbtn");
const addSampleBtn = document.getElementById("addsamplebtn");
const eventContainer = document.getElementById("empty");
const eventTitle = eventForm.querySelector("input[type='text']");
const eventDate = eventForm.querySelector("input[type='date']");
const eventCategory = eventForm.querySelector("select");
const eventDescription = eventForm.querySelector("textarea");

let sampleEvent = [
    {
        title: "Web Development Workshop",
        date: "2026-05-04",
        category: "Workshop",
        description: "Complete workshop on HTML, CSS, JavaScript and DOM."
    },
    {
        title: "Tech Conference 2026",
        date: "2026-07-04",
        category: "Conference",
        description: "A big tech conference with speakers and networking."
    }
];


function showEmptyState() {
    eventContainer.innerHTML = `
        <div class="emptystate">
            No events yet. Add your first event!
        </div>
    `;
}


function createEventCard(eventData) {
    const card = document.createElement("div");
    card.classList.add("event-card-item");

    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div><b>Date:</b> ${eventData.date}</div>
        <span><b>Category:</b> ${eventData.category}</span>
        <p>${eventData.description}</p>
    `;

    // Delete Button
    card.querySelector(".delete-btn").addEventListener("click", () => {
        card.remove();


        if (eventContainer.querySelectorAll(".event-card-item").length === 0) {
            showEmptyState();
        }
    });

    return card;
}

function addEvent(eventData) {

    const emptyState = eventContainer.querySelector(".emptystate");

    if (emptyState) {
        eventContainer.innerHTML = "";
    }

    eventContainer.appendChild(createEventCard(eventData));
}


addSampleBtn.addEventListener("click", () => {
    sampleEvent.forEach(item => addEvent(item));
});

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const eventData = {
        title: eventTitle.value.trim(),
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value.trim()
    };

    if (eventData.title === "" || eventData.date === "" || eventData.description === "") {
        alert("Please fill all fields!");
        return;
    }

    addEvent(eventData);
    eventForm.reset();
});

clearAllBtn.addEventListener("click", () => {
    showEmptyState();
});

showEmptyState();