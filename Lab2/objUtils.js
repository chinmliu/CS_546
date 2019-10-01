const extend = function extend(...args){
	var myObj = new Object();
	if(args.length < 2)
		throw "Less than 2 arguments in input"
	for(var i = 0; i < args.length; i++){
		if(args[i] == undefined)
			throw "Input had an undefined element"
		if(typeof args[i] !== "object")
			throw "Input was not an array of Objects"
		for(var j in args[i]){
			if(args[i].hasOwnProperty(j)){
				if(myObj.hasOwnProperty(j) == false){
					myObj[j] = args[i][j];
				}
			}
		}
	}
	return myObj;
}

const smush = function smush(...args){
	var myObj = new Object();
	if(args.length < 2)
		throw "Less than 2 arguments in input"
	for(var i = 0; i < args.length; i++){
		if(args[i] == undefined)
			throw "Input had an undefined element"
		if(typeof args[i] !== "object")
			throw "Input was not an array of Objects"
		for(var j in args[i]){
			if(args[i].hasOwnProperty(j)){
				myObj[j] = args[i][j];
			}
		}
	}
	return myObj;

}

const mapValues = function mapValues(object, func){
	if(object == undefined)
		throw "object was not defined"
	if(func == undefined)
		throw "func was not defined"
	if(typeof object !== "object")
		throw "object argument was not of type Object"
	if(typeof func != "function")
		throw "func argument was not of type function"
	var myObj = new Object();
	for(var i in object){
		myObj[i] = func(object[i]);
	}
	return myObj;
}

module.exports = {extend, smush, mapValues};