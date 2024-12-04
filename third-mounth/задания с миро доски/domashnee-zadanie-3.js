// Скрипт для задачи с банкоматом.

let amount = prompt("Введите сумму для снятия:");
let denominations = [500, 200, 100, 50, 20, 10, 5, 2, 1];
let result = {};

for (let denom of denominations) {
    if (amount >= denom) {
        result[denom] = Math.floor(amount / denom);
        amount %= denom;
    }
}

let output = "Для выдачи нужно:\n";
let totalNotes = 0;
for (let [denom, count] of Object.entries(result)) {
    output += `${count} купюр(ы) номиналом ${denom} грн\n`;
    totalNotes += count;
}
output += `Общее количество купюр: ${totalNotes}`;
alert(output);
