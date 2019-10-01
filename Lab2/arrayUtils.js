const head = function head(array){
	if(array == undefined){
		throw "array does not exist"
	}
	if(Array.isArray(array) == false){
		throw "Input is not an array"
	}
	if(array.length == 0){
		throw "Input is an empty array";
	}
	return array[0];	
}

const last = function last(array){
	if(array == undefined){
		throw "array does not exist"
	}
	if(Array.isArray(array) == false){
		throw "Input is not an array"
	}
	if(array.length == 0){
		throw "Input is an empty array"
	}	
	return array[array.length - 1];	
}

const remove = function remove(array, index){
	if(array == undefined){
		throw "array does not exist"
	}
	if(index == undefined){
		throw "index is undefined"
	}
	if(Array.isArray(array) == false){
		throw "Input is not an array"
	}
	if(array.length == 0){
		throw "Input is an empty array"
	}
	if(isNaN(index)){
		throw "Index is not a number"
	}
	if(index < 0 || index >= array.length){
		throw "Index out of bounds"
	}
	array.splice(index,1);
	return array;
}

const range = function range(end, value){
	if(end == undefined){
		throw "end does not exist"
	}
	if(typeof end !== "number"){
		throw "end is not a Number"
	}
	if(end < 1){
		throw "end is not a valid Number"
	}
	var array = new Array();
	if(value == undefined){
		for(var i = 0; i < end; i++){
			array.push(i);
		}
	}
	else{
		for(var i = 0; i < end; i++){
			array.push(value);
		}
	}
	return array;
}

const countElements = function countElements(array){
	if(array == undefined){
		throw "array does not exist"
	}
	if(Array.isArray(array) == false){
		throw "Input is not an array"
	}
	var counts = new Object();
	var already = false;
	for(var i = 0; i < array.length; i++){
		for(var k = 0; k < i; k++){
			if(array[k] == array[i])
				already = true;
		}
		if(already == false){
			var count = 1;
			for(var j = i+1; j < array.length; j++){
				if(array[i] == array[j]){
					count++;
					
				}
			}
			var prop = array[i].toString();
			counts[prop] = count;
		}
		already = false;
	}
	return counts;
}

const isEqual = function isEqual(arrayOne, arrayTwo){
	if(arrayOne == undefined){
		throw "arrayOne does not exist"
	}
	if(Array.isArray(arrayOne) == false){
		throw "Input arrayOne is not an array"
	}
	if(arrayTwo == undefined){
		throw "arrayTwo does not exist"
	}
	if(Array.isArray(arrayTwo) == false){
		throw "Input arrayTwo is not an array"
	}
	if(arrayOne.length == arrayTwo.length){
		if(arrayOne.length == 0 && arrayTwo.length == 0)
			return true;
		for(var i = 0; i < arrayTwo.length; i++){
			if(arrayOne[i] !== arrayTwo[i])
				return false;
		}
		return true;
	}
	else{
		return false;
	}
}

module.exports = {head, last, remove, range, countElements, isEqual};