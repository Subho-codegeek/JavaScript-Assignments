let input = { a: 10, b: 50, c: 20 }

let defaultval = input['a'];
let defaultkey = 'a';

for (let key in input) {;
    if (input[key] > defaultval){
        defaultval = input[key];
        defaultkey = key;
    }
}

console.log(defaultkey);