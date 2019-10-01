const arrays = require('./arrayUtils');
const strings = require('./stringUtils');
const objs = require('./objUtils');
const head = arrays.head;
const last = arrays.last;
//const remove = arrays.remove;
//const range = arrays.range;
//const countElements = arrays.countElements;
//const isEqual = arrays.isEqual;
//const capitalize = strings.capitalize;
//const repeat = strings.repeat;
const countChars = strings.countChars;
const extend = objs.extend;
//const smush = objs.smush;
//const mapValues = objs.mapValues;

// Head Tests
try {
   // Should Pass
   const headOne = head([2, 3, 4]);
   console.log('head passed successfully');
   //console.log(headOne);
} catch (e) {
   console.error('head failed test case');
}
try {
   // Should Fail
   const headTwo = head(1234);
   console.error('head did not error');
} catch (e) {
   console.log('head failed successfully');
}
/*
try {
   // Should Fail
   const headThree = head([]);
   //console.log(headThree);
} catch (e) {
   console.log(e);
}

try {
   // Should Fail
   const headFour = head();
   //console.log(headFour);
} catch (e) {
   console.log(e);
}*/

// Last Tests
try {
   // Should Pass
   const lastOne = last([2, 3, 4]);
   console.log('last passed successfully');
   //console.log(lastOne);
} catch (e) {
   console.error('last failed test case');
}
try {
   // Should Fail
   const lastTwo = last(1234);
   console.error('last did not error');
} catch (e) {
   console.log('last failed successfully');
}
/*
try {
   // Should Fail
   const lastThree = last([]);
   //console.log(tailThree);
} catch (e) {
   console.log(e);
}


try {
   // Should Fail
   const lastFour = last();
   //console.log(tailFour);
} catch (e) {
   console.log(e);
}


try {
   // Should Pass
   const removeOne = remove([5,6,7],1);
   console.log(removeOne);
} catch (e) {
   console.log(e);
}

try {
   // Should Fail
   const removeTwo = remove();
   //console.log(removeTwo);
} catch (e) {
   console.log(e);
}


try {
   // Should Fail
   const removeThree = remove("bananes", 1);
   //console.log(removeThree);
} catch (e) {
   console.log(e);
}


try {
   // Should Fail
   const removeFour = remove([],1);
   //console.log(removeFour);
} catch (e) {
   console.log(e);
}


try {
   // Should Fail
   const removeFive = remove([5,6,7],3);
   //console.log(removeTwo);
} catch (e) {
   console.log(e);
}


try {
   // Should Pass
   const rangeOne = range(4);
   console.log(rangeOne);
} catch (e) {
   console.log(e);
}


try {
   // Should Pass
   const rangeTwo = range(4, 'hi');
   console.log(rangeTwo);
} catch (e) {
   console.log(e);
}


try {
   // Should Fail
   const rangeThree = range();
   //console.log(rangeThree);
} catch (e) {
   console.log(e);
}


try {
   // Should Fail
   const rangeFour = range("bananas");
   //console.log(rangeFour);
} catch (e) {
   console.log(e);
}


try {
   // Should Fail
   const rangeFive = range(-1);
   //console.log(rangeFive);
} catch (e) {
   console.log(e);
}


try {
   // Should Pass
   const countElementsOne = countElements([13, '13', 13, 'hello', true, true]);
   console.log(countElementsOne);
} catch (e) {
   console.log(e);
}

try {
   // Should Fail
   const countElementsTwo = countElements();
   //console.log(countElementsTwo);
} catch (e) {
   console.log(e);
}

try {
   // Should Fail
   const countElementsThree = countElements("bananas");
   //console.log(countElementsThree);
} catch (e) {
   console.log(e);
}

try {
   // Should Pass
   const isEqualOne = isEqual([1, 2, 3], [1, 2, 3]);
   console.log(isEqualOne);
} catch (e) {
   console.log(e);
}

try {
   // Should Pass
   const isEqualTwo = isEqual([1, 2, 3], [4, 5, 6]);
   console.log(isEqualTwo);
} catch (e) {
   console.log(e);
}

try {
   // Should Pass
   const isEqualThree = isEqual([1, 3, 2], [1, 2, 3]);
   console.log(isEqualThree);
} catch (e) {
   console.log(e);
}

try {
   // Should Pass
   const isEqualFour = isEqual([1, 2], [1, 2, 3]);
   console.log(isEqualFour);
} catch (e) {
   console.log(e);
}

try {
   // Should Fail
   const isEqualFive = isEqual([1, 2, 3]);
   //console.log(isEqualFive);
} catch (e) {
   console.log(e);
}

try {
   // Should Fail
   const isEqualSix = isEqual();
   //console.log(isEqualSix);
} catch (e) {
   console.log(e);
}

try {
   // Should Fail
   const isEqualSeven = isEqual([1, 2, 3], "[4, 5, 6]");
   //console.log(isEqualSeven);
} catch (e) {
   console.log(e);
}

try {
   // Should Fail
   const isEqualEight = isEqual("[1, 2, 3]", "[4, 5, 6]");
   //console.log(isEqualEight);
} catch (e) {
   console.log(e);
}

try {
   // Should Pass
   const capitalizeOne = capitalize('foobar');
   console.log(capitalizeOne);
} catch (e) {
   console.log(e);
}

try {
   // Should Pass
   const capitalizeTwo = capitalize('FOOBAR');
   console.log(capitalizeTwo);
} catch (e) {
   console.log(e);
}

try {
   // Should Fail
   const capitalizeThree = capitalize();
   //console.log(capitalizeThree);
} catch (e) {
   console.log(e);
}

try {
   // Should Fail
   const capitalizeFour = capitalize([]);
   //console.log(capitalizeFour);
} catch (e) {
   console.log(e);
}

try {
   // Should Pass
   const repeatOne = repeat('abc', 3);
   console.log(repeatOne);
} catch (e) {
   console.log(e);
}

try {
   // Should Pass
   const repeatTwo = repeat('abc', 1);
   console.log(repeatTwo);
} catch (e) {
   console.log(e);
}

try {
   // Should Pass
   const repeatThree = repeat('abc', 0);
   console.log(repeatThree);
} catch (e) {
   console.log(e);
}

try {
   // Should Fail
   const repeatFour = repeat();
   //console.log(repeatFour);
} catch (e) {
   console.log(e);
}

try {
   // Should Fail
   const repeatFive = repeat([],3);
   //console.log(repeatFive);
} catch (e) {
   console.log(e);
}

try {
   // Should Fail
   const repeatSix = repeat('abc');
   //console.log(repeatSix);
} catch (e) {
   console.log(e);
}

try {
   // Should Fail
   const repeatSeven = repeat('abc', -2);
   //console.log(repeatSeven);
} catch (e) {
   console.log(e);
}*/

// countChars Tests
try {
   // Should Pass
   const countCharsOne = countChars('Hello, the pie is in the oven');
   console.log('countChars passed successfully');
   //console.log(countCharsOne);
} catch (e) {
   console.log('countChars failed test case');
}
try {
   // Should Fail
   const countCharsTwo = countChars(1234);
   console.error('countChars did not error');
} catch (e) {
   console.log('countChars failed successfully');
}
/*
try {
   // Should Fail
   const countCharsThree = countChars();
   console.error('countChars did not error');
} catch (e) {
   console.log(e);
}*/


//extend Tests
const first = { x: 2, y: 3};
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };

try {
   // Should Pass
   const extendOne = extend(third, first, second);
   console.log('extend passed successfully');
   //console.log(extendOne);
} catch (e) {
   console.error('extend failed test case');
}
try {
   // Should Fail
   const extendTwo = extend(1234);
   console.error('extend did not error');
} catch (e) {
   console.log('extend failed successfully');
}
/*
try {
   // Should Pass
   const extendThree = extend(first, second, third);
   console.log('extend passed successfully');
   console.log(extendThree);
} catch (e) {
   console.error('extend failed test case');
}

try {
   // Should Pass
   const extendFour = extend(second, third);
   console.log('extend passed successfully');
   console.log(extendFour);
} catch (e) {
   console.error('extend failed test case');
}

try {
   // Should Pass
   const smushOne = smush(third, first, second);
   console.log('smush passed successfully');
   console.log(smushOne);
} catch (e) {
   console.error('smush failed test case');
}
try {
   // Should Fail
   const smushTwo = smush(1234);
   console.error('smush did not error');
} catch (e) {
   console.log(e);
}

try {
   // Should Pass
   const smushThree = smush(first, second, third);
   console.log('smush passed successfully');
   console.log(smushThree);
} catch (e) {
   console.log(e);
}

try {
   // Should Pass
   const smushFour = smush(second, third);
   console.log('smush passed successfully');
   console.log(smushFour);
} catch (e) {
   console.log(e);
}

try {
   // Should Pass
   const mapValuesOne = mapValues({a:1,b:2,c:3}, n=>n+1);
   console.log('mapValues passed successfully');
   console.log(mapValuesOne);
} catch (e) {
   console.log(e);
}*/
