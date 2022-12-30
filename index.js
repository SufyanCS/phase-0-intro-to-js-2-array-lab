// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}
console.log(cats)
function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){

    const CopyOfCats = [...cats]
    CopyOfCats.push(name);
    return CopyOfCats;

}
function prependCat(name){

    const CopyOfCats = [...cats]
    CopyOfCats.unshift(name);
    return CopyOfCats;

}
function removeLastCat(){

    const CopyOfCats = [...cats]
    CopyOfCats.pop();
    return CopyOfCats;

}
function removeFirstCat(){

    const CopyOfCats = [...cats]
    CopyOfCats.shift();
    return CopyOfCats;

}