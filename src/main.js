const double = x => x * 2;
const increment = x => x + 1;
const n = 5;
const result = n
  |> double
  |> double
  |> increment
  |> double;
console.log(result);



// const numbers = [1, 2, 3, 4, 5];
// const result = numbers 
// |> n => n * 2 
// |> n => n > 4 
// |> (acc, n) => acc + n;
// console.log(result);