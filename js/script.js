'use strict'

const date = new Date();

const calendar = () => {

	const dayMonth = document.querySelector('.day');

	const weekMonth = document.querySelector('.week');

	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

	let monthStr = document.querySelector('.months');

	const firstDayIndex = date.getDay() - 1;

	const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

	const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

	const nowDay = document.querySelector('.day_now');

	const months = ['Январь', 'Ферваль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

	const weeks = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

	const nextDays = 7 - lastDayIndex;

	monthStr.innerHTML = months[date.getMonth()];

	document.querySelector('.month').innerHTML = date.toLocaleString('ru', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	let week = '';

	for (let i = 0; i < 7; i++) {
		week += `<div>${weeks[i]}</div>`;
		weekMonth.innerHTML = week;
	}

	let days = '';

	for (let x = firstDayIndex; x > 0; x--) {
		days += `<div class="prev_day"> ${prevLastDay - x + 1}</div>`;
	}

	for (let i = 1; i <= lastDay; i++) {

		if (i != date.getDate()) {
			days += `<div>${i}</div>`;
		} else {
			days += `<div class="day_now">${i}</div>`;
			nowDay.innerHTML = days;
		}
	}

	for (let y = 1; y <= nextDays; y++) {
		days += `<div class="next_day">${y}</div>`;
		dayMonth.innerHTML = days;
	}
}
calendar();

document.querySelector('.next').addEventListener('click', () => {
	date.setMonth(date.getMonth() + 1);
	calendar();
})

document.querySelector('.prev').addEventListener('click', () => {
	date.setMonth(date.getMonth() - 1);
	calendar();
})