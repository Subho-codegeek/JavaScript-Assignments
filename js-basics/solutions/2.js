let input = ["apple", "banana", "apple", "orange", "banana", "apple"]

let output = {};

for (let fruit of input) {
    if(output[fruit]){
        output[fruit] = output[fruit] + 1;
    }
    else{
        output[fruit] = 1;
    }
}

console.log(output);