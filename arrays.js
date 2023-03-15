//find the last element of the following arrays.
arr1 = [3,7,34,90,12]
arr2 = [true, "green", "where",12,56]

let last1 = arr1.slice(-1);
console.log(last1);
let last2 = arr2.slice(-1);
console.log(last2)



//Write a JS program that will join the following array elements into a string
myPets = ["Cow", "Bird", "Snake", "Dog"];
let pets = myPets.join();
console.log(pets);




//Write a JS script to sort the following array items
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
 arr3.sort();
 console.log(arr3);




//Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple","orange", "mango", "mango"];

let unique = [...new Set(arr)];
console.log(unique);   

let dups = arr.filter((orange,index)=>{
    return arr.indexOf(orange)!==index;
})
console.log(dups);



//Write a JS script to search for the following word in the array.
//"way"
//If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4];
if (arr5.includes("way")){
    console.log(arr5.includes("way"));
}
else{
    console.log("the search word was not found")
}





//Write a JS script to sort the following string
let word = "sevink"
let word2 = word.split("").sort().join(``);
console.log(word2);
