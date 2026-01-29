let input = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]

let output = {};

for (let i=0; i<input.length; i++) {
    let city = input[i].city;
    let name = input[i].name;
    if(output[city]){
        output[city].push(name);
    }
    else{
        output[city] = [name];
    }
}

console.log(output);