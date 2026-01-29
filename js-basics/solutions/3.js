let input = { a: "x", b: "y", c: "z" }

let output = {};

for (let key in input) {
    output[input[key]] = key;
}

console.log(output);