let input = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }

let output = {};

for (let category in input) {
    output[category] = input[category].reduce((a,b)=>a+b,0);
}

console.log(output);