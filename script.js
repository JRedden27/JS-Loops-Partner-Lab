let farenheit = 0;
let celsius = 0;
console.log("Celsius", "Farenheit")
for(celsius = 0; celsius <= 100; celsius++) {
    farenheit = (celsius * (9/5) + 32);
    console.log(celsius, farenheit);
}
