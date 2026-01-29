let input = { x: [1,2,3], y: [2,3,4], z: [4,5] }

let output = []

for (let key in input) {
    for(let i=0; i<input[key].length; i++){
        if(!output.includes(input[key][i])){
            output.push(input[key][i]);
        }
    }
}

console.log(output);
