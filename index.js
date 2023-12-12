// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

//use  .push//
function destructivelyAppendCat(name){
    cats.push("Ralph");
}

//Prepend Cat name//

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

 //remove last cat name //

 function destructivelyRemoveLastCat(){
    cats.pop();
 }

 //remove first cat name//

function destructivelyRemoveFirstCat(){
    cats.shift();
}

//appends a cat to the cats array and returns a new array, leaving the cats array unchanged//
function appendCat(name){
    return [...cats,"Broom"]
}
//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged //
function prependCat (name) {
    return [name, ...cats];
  }
  
  //remove first cat//
  function removeFirstCat () {
    return cats.slice(1);
  }
  
  //remove last cat//
  function removeLastCat () {
    return cats.slice(0, cats.length - 1);
  }

