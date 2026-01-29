let input = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

let output = [];

// for (let category in input) {
//     for (let i=0; i<input[category].length; i++) {
//         output.push(input[category][i]);
//     }
// }

for (let category in input) {
    for (let item in input[category]) {
        output.push(input[category][item]);
    }
}

console.log(output);