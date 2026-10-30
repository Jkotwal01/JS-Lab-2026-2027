// Exp 10: Multiplication Table wala Code
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function (input) {
    const num = Number(input);

    rl.question("Enter the range: ", function (rangeInput) {
        const range = Number(rangeInput);

        // Using for loop
        console.log("\nTable using for loop:");

        for (let i = 1; i <= range; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }

        // Using while loop
        console.log("\nTable using while loop:");

        let i = 1;

        while (i <= range) {
            console.log(`${num} x ${i} = ${num * i}`);
            i++;
        }

        // Using do...while loop
        console.log("\nTable using do...while loop:");

        let j = 1;

        do {
            console.log(`${num} x ${j} = ${num * j}`);
            j++;
        } while (j <= range);

        rl.close();
    });
});
