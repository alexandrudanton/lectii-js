var destinations = [];
console.log(destinations);

destinations = ['Ghana', 'Fiji'];
console.log(destinations);

destinations.push('Nepal');
console.log(destinations);

destinations.push('South Africa', 'Kenya');
console.log(destinations);

destinations.unshift('Togo');
console.log(destinations);

destinations.unshift('Brazil', 'Romania');
console.log(destinations);

var lastElement = destinations.pop();
console.log(lastElement);

var firstElement = destinations.shift();
console.log(firstElement);
console.log(destinations);

destinations.splice(1, 2);
console.log(destinations);

for (var i = 0; i < destinations.length; i++) {
    console.log('Destinatia #' + (i + 1) + ' este ' + destinations[i]);
}

// function show(destination) {
//     console.log(destination);
// }
// for (var i = 0; i < destinations.length; i++) {
//     show(destinations[i]);
// }

destinations.map(function (item) {
    console.log(item);
});

destinations.map(function (item, index) {
    console.log('Destinatia #' + (index + 1) + ' este ' + item);
});

// destinations.map(item => console.log(item));

destinations.forEach(function (item) {
    console.log(item);
});

var elements = ['The', 'quick', 'brown', 'fox'];
var phrase = elements.join(' ') + '.';
console.log(phrase);

// phrase = elements.toString();
// console.log(phrase);

phrase = elements.join('-');
console.log(phrase);

elements = phrase.split('-');
console.log(elements);

var sortedElements = elements.sort();
console.log(sortedElements);

// afisarea primului element
console.log(sortedElements[0]);

// afisarea ultimului element
console.log(sortedElements[sortedElements.length - 1]);

// sortarea crescatoare a unui sir de string-uri, ignorand literele mari
sortedElements = elements.sort(function (element1, element2) {
    if (element1.toLowerCase() < element2.toLowerCase()) {
        return -1;
    }

    return 1;
});
console.log(sortedElements);

var numbers = [4, 7, 2, 6, 8, 30, 9, 10, 5];
var sortedNumbers = numbers.sort(function (number1, number2) {
    if (number1 > number2) {
        return true;
    }

    return false;
});
console.log(sortedNumbers);

var elements = ['John', 123, 'Jane', 456, 'Jack'];
var numbers = elements.filter(function (item) {
    // if (parseInt(item)) {
    //     return true;
    // }

    // return false;

    return parseInt(item);
});
console.log(numbers);

var words = elements.filter(item => isNaN(item));
console.log(words);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var evenNumbers = numbers.filter(function (item) {
    // if (item % 2 == 0) {
    //     return true;
    // }

    // return false;

    return !(item % 2);
});
console.log(evenNumbers);

var numbers = [1, 2, 3, 4];
var sum = numbers.reduce(function (prev, next) {
    return prev + next;
});

var prod = numbers.reduce(function (prev, next) {
    return prev * next;
});
console.log(numbers);
console.log('Suma: ' + sum);
console.log('Prod: ' + prod);

var destinations1 = ['Ghana', 'Peru'];
var destinations2 = ['Togo', 'Nepal'];
var destinations = destinations1.concat(destinations2);

// destinations = [...destinations1, ...destinations2];
console.log(destinations);

var numbers = [1, 5, 3, 6, 7, 8, 2];
var firstEvenNumber = numbers.find(function (item) {
    if (item % 2 == 0) {
        return true;
    }

    return false;
});
console.log(firstEvenNumber);

var destinations = ['Ghana', 'Nepal', 'Togo', 'Fiji'];
var togoPosition = destinations.indexOf('Togo');
console.log(togoPosition);

var destinations = ['Ghana', 'Nepal', 'Togo', 'Fiji'];
console.log(destinations);
destinations.splice(1, 3, 'South Africa', 'Argentina');
console.log(destinations);
