let input = { name: "Rahul", age: 23, city: "Noida" }
let arr = ["name","city"]

let output = {};

// for (let key in input) {
//     if(arr.includes(key)){
//         output[key] = input[key];
//     }
// }

for (let i=0; i<arr.length; i++){
    output[arr[i]] = input[arr[i]];

}

console.log(output);
// console.log(input.hasOwnProperty('name'));
