const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
let currentMonthIndex = 3; // April
let currentYear = 2020;

function renderCalendar() {
const table = document.getElementById("calendarTable");
const currentMonthElement = document.getElementById("currentMonth");
const currentYearElement = document.getElementById("currentYear");

// Clear previous calendar
table.innerHTML = "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";

// Render new calendar
const date = new Date(currentYear, currentMonthIndex, 1);
const lastDay = new Date(currentYear, currentMonthIndex + 1, 0).getDate();

let dayIndex = 0;
let row = table.insertRow();
for (let i = 0; i < date.getDay(); i++) {
row.insertCell();
dayIndex++;
}

for (let i = 1; i <= lastDay; i++) {
const cell = row.insertCell();
cell.textContent = i;
dayIndex++;
if (dayIndex % 7 === 0) {
row = table.insertRow();
}
}

currentMonthElement.textContent = monthNames[currentMonthIndex];
currentYearElement.textContent = currentYear;
}

function prevMonth() {
currentMonthIndex--;
if (currentMonthIndex < 0) {
currentMonthIndex = 11;
currentYear--;
}
renderCalendar();
}

function nextMonth() {
currentMonthIndex++;
if (currentMonthIndex > 11) {
currentMonthIndex = 0;
currentYear++;
}
renderCalendar();
}

// Initial rendering
renderCalendar();