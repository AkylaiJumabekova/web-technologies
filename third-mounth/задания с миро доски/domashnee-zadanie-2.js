// Скрипт для перевода температуры из Цельсия в Фаренгейт и Кельвин.

let celsius = prompt("Введите температуру в градусах Цельсия:");
let fahrenheit = (celsius * 9/5) + 32;
let kelvin = parseFloat(celsius) + 273.15;
alert(`${celsius}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`);
