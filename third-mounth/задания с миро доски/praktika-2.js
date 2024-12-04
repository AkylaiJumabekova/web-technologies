// Определить, сколько часов, минут и секунд содержится в указанном количестве секунд.

let totalSeconds = prompt("Введите количество секунд:");
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;
alert(`${totalSeconds} секунд - это ${hours} часов, ${minutes} минут, ${seconds} секунд.`);
