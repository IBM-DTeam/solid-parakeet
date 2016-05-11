var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var NewArray = array.map((value, index) => {
        //      console.log("value ", value, "\nindex ", index);
        return value + 1;
    }) //map

var filterThis = [1, 2, 3, 4, 5, 6, 7, 8];

var filtered = filterThis.filter((value, index) => {
    return (value % 2 == 0)
})
console.log(filtered);
var first = [1, 2, 3, 4, 5, 6, 7, 8];

var reduced = first.reduce((previous, current, index ,array) => {
  console.log("This is the index    : ", index);
  console.log("The Previous value   : ",previous);
  console.log("The current Breh     : ",current);
  console.log();
  return previous + current;
}, 0)

console.log(reduced);

// [1,2,3,4,5,6,7,8];
//
// - 0 + 1
// - (0 + 1) + 2
// - ((0 + 1) + 2) + 3
// - (((0 + 1) + 2) + 3) + 4
// ....
// -
