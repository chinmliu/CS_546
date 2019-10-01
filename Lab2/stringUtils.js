const capitalize = function capitalize(string){
	if(string == undefined)
		throw "string input not defined"
	if(typeof string == "string"){
		return string.substring(0,1).toUpperCase()+string.substring(1).toLowerCase();
	}
	else
		throw "Input is not a string"	
}

const repeat = function repeat(string, num){
	if(string == undefined)
		throw "string input not defined"
	if(num == undefined)
		throw "num input not defined"
	if(isNaN(num)){
		throw "num is not a Number"
	}
	if(num < 0){
		throw "num is not valid"
	}
	if(typeof string == "string"){
		var repeated = "";
		for(var i = 0; i < num; i++){
			repeated += string;
		}
		return repeated;
	}
	else
		throw "string is not a String"
}

const countChars = function countChars(string){
	if(string == undefined)
		throw "string input not defined"
	if(typeof string !== "string"){
		throw "Input is not a String"
	}
	var array = string.split("");
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

module.exports = {capitalize, repeat, countChars};