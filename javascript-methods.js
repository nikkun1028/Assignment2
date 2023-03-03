/*----------------------------------------------------------
Editor: Rei Imai
EMPL ID: 24134776
Assignment2
Due 3/3/2023

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/



// MAP //
// execute a callbackFn on each of array elements //
Array.prototype.myMap = function(callbackFn) {
	let new_array = [];
	for(let i = 0; i < this.length; i++){
		if(this[i] === undefined) continue; // skip if empty
		new_array.push(callbackFn(this[i], i, this));
	}
	return new_array;
};



// FILTER //
// filter an array with a given callbackFn //
Array.prototype.myFilter = function(callbackFn) {
  let new_array = [];
  for(let i = 0; i < this.length; i++){
  	if(callbackFn(this[i], i, this)){
  		new_array.push(this[i]);
  	}
  }
  return new_array;
};



// SOME //
// true if one or more elements apply for callbackFn  //
Array.prototype.mySome = function(callbackFn) {
	let new_array = [];
	for(let i = 0; i < this.length; i++){
		if(callbackFn(this[i], i, this)) return true;
	}
	return false;
};




// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};






// TESTINGs BELOW //
const array = [1,2,3,4,5];
const words = ["apple", "cat", "puzzle", "watermelon"];

console.log("\n===================================");
console.log("Starting tests...");

console.log ("\nArray.map(): ", array.map(x=>x+2));
console.log("Array.myMap(): ", array.myMap(x=>x+2));
console.log("Original Array: ", array);

console.log("\nArray.filter(): ", words.filter(word=>word.length<4));
console.log("Array.myFilter(): ", words.myFilter(word=>word.length<4));
console.log("Original Array: ", words);

console.log("\nArray.some(): ", array.some(x=>x>4));
console.log("Array.mySome(): ", array.mySome(x=>x>4));
console.log("Original Array: ", array);


