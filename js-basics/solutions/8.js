let input = { A: [80, 90], B: [70, 75, 85] }

let def = 0;
let output = "A";

for (let key in input) {
    let avg = input[key].reduce((a,b)=>a+b,0)/input[key].length;
    if (avg>def){
        def = avg;
        output = key;
    }
}

console.log(output);