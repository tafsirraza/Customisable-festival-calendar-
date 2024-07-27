// script.js
const daysContainer = document.getElementById('days');
const monthYear = document.getElementById('month-year');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let date = new Date();

const festivals = {
    '2024-01-01': 'New Year',
    '2024-03-08': 'Holi',
    '2024-12-25': 'Christmas'
};

function renderCalendar() {
    date.setDate(1);
    const monthDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    
    const nextDays = 7 - lastDayIndex - 1;

    monthYear.innerText = `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= monthDays; i++) {
        const day = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        days += `<div class="${festivals[day] ? 'festival' : ''}">${i}${festivals[day] ? `<span class="tooltip">${festivals[day]}</span>` : ''}</div>`;
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }

    daysContainer.innerHTML = days;
}

prevBtn.addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

nextBtn.addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

