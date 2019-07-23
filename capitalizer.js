function capitalize(string) {
    let array = string.split("");

    for(let i = 0; i <= array.length; i++){
       array.splice(0, 1, array[0].toUpperCase());
       if(array[i] === " "){
           array.splice(i+1, 1, array[i+1].toUpperCase());
       }
    }
    return array.join("");
}

console.log(capitalize("hello word"));
