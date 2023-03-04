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
  	if(this[i] === undefined) continue; // skip if empty
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
// true if every elements of array apply for callbackFn //
Array.prototype.myEvery = function(callbackFn) {
	let new_array = [];
	for(let i = 0; i < this.length; i++){
		if(!callbackFn(this[i], i, this)) return false;
	}
	return true;
};




// REDUCE //
// reduce an array into one element using callbackFn //
Array.prototype.myReduce = function(callbackFn) {
	if(this.length < 1){
		console.log("ERROR: can't have empty array for reduce...");
		return undefined;
	}
	
	let isString = false;
	for(let i = 0; i < this.length; i++){
		if(typeof this[i] === "string"){
			isString = true;
			break;
		}
	}
	
	if(isString){
		var reduced = "";
	}
	else{
		var reduced = 0;
	}
		
	for(let i = 0; i < this.length; i++){
		if(this[i] === undefined) continue;
		reduced = callbackFn(reduced, this[i], this);
	}
	return reduced;
};




// INCLUDES //
// determine whether an array includes an element //
Array.prototype.myIncludes = function(searchElement) {
	for(let i = 0; i < this.length; i++){
		if(this[i] == searchElement) return true;
	}
	return false;
};




// INDEXOF //
// return index of element if exist, return -1 otherwise //
Array.prototype.myIndexOf = function(searchElement) {
	for(let i = 0; i < this.length; i++){
		if(this[i] == searchElement) return i;
	}
	return -1;
};




// LASTINDEXOF //
// return index of last encountered element, -1 otherwise //
Array.prototype.myLastIndexOf = function(searchElement) {
	let index = -1;
	for(let i = 0; i < this.length; i++){
		if(this[i] == searchElement) index = i;
	}
	return index;
};




// KEYS //
// returns an array of object's key names //
Object.myKeys = function(object) {
	let keys = [];
	const entries = Object.entries(object);
	for(let i = 0; i < entries.length; i++){
		keys.push(entries[i][0]);
	}
	
	return keys;
};




// VALUES //
// return all the values from object //
Object.myValues = function(object) {
	let values = [];
	const entries = Object.entries(object);
	for(let i = 0; i < entries.length; i++){
		values.push(entries[i][1]);
	}
	
	return values;
};







// TESTINGs BELOW //
/*
const array = [1,2,3,4,5];
const words = ["apple", "cat", "puzzle", "watermelon"];
const myList1 = [1,1,4,10,11,21,3,10];
const myList2 = ["apple", "orange", "banana", "apple", "water"];
const object = {
	a: "something",
	b: ["is", "wrong"],
	c: "with",
	d: 3,
};
const empty = {};


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

console.log("\nArray.every(): ", array.every(x=>x>10));
console.log("Array.myEvery(): ", array.myEvery(x=>x>10));
console.log("Original Array: ", array);

console.log("\nArray.reduce(): ", words.reduce((a,b)=>a+b));
console.log("Array.myReduce(): ", words.myReduce((a,b)=>a+b));
console.log("Original Array: ", words);

console.log("\nArray.includes(): ", array.includes(5));
console.log("Array.myIncludes(): ", array.myIncludes(5));
console.log("Original Array: ", array);

console.log("\nArray.indexOf(): ", words.indexOf("apple"));
console.log("Array.myIndexOf(): ", words.myIndexOf("apple"));
console.log("Original Array: ", words);

console.log("\nArray.lastIndexOf(): ", myList2.lastIndexOf("apple"));
console.log("Array.myLastIndexf(): ", myList2.myLastIndexOf("apple"));
console.log("Original Array: ", myList2);

console.log("\nObject.keys(Object): ", Object.keys(object));
console.log("Object.myKeys(Object): ", Object.myKeys(object));
console.log("Original Object: ", object);

console.log("\nObject.values(Object): ", Object.values(object));
console.log("Object.myValues(Object): ", Object.myValues(object));
console.log("Original Object: ", object);
*/
