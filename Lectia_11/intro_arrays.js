console.log('initializare array gol');
var destinations = [];
console.log(destinations);

console.log('\n\n initializare array cu 2 elemente');
var destinations = ['Ghana', 'Peru'];
console.log(destinations);

console.log('\n\n adaugare element la sfarsitul unui array');
destinations.push('Nepal');
console.log(destinations);

console.log('\n\n adaugare 2 elemente la sfarsitul unui array');
destinations.push('South Africa', 'Kenya');
console.log(destinations);

console.log('\n\n adaugare element la inceputul unui array');
destinations.unshift('Togo');
console.log(destinations);

console.log('\n\n adaugare 2 elemente la inceputul unui array');
destinations.unshift('Fiji', 'Mexic');
console.log(destinations);

console.log('\n\n stergere ultimul element din array si returnarea valorii lui');
var lastElement = destinations.pop();
console.log(destinations);
console.log('Ultimul element a fost: ' + lastElement);

console.log('\n\n stergere primul element din array si returnarea valorii lui');
var firstElement = destinations.shift();
console.log(destinations);
console.log('Primul element a fost: ' + firstElement);

console.log('\n\n afisare elemente din array folosind for');
var destLength = destinations.length;
for (var i = 0; i < destLength; i++) {
    console.log('Destinatia #' + (i + 1) + ': ' + destinations[i]);
}

console.log('\n\n afisare elemente din array folosind .map');
destinations.map(destination => {
    console.log(destination);
});

destinations.map((destination, index) => {
    console.log('Destinatia #' + (index + 1) + ': ' + destination);
});

console.log('\n\n afisare elemente din array folosind .forEach');
destinations.forEach(destination => {
    console.log(destination);
});

console.log('\n\n afisare elemente din array folosind jQuery .each function');
$.each(destinations, function(index, destination) {
    console.log('Destinatia #' + (index + 1) + ': ' + destination);
});

console.log('\n\n concatenare elemente din array');
var elements = ['The', 'quick', 'brown', 'fox'];
var phrase = elements.join(' ');
console.log(phrase);

phrase = elements.join('-');
console.log(phrase);

phrase = elements.toString(); // este echivalentul lui .join(',')
console.log(phrase);

console.log('\n\n impartire string intr-un array folosind un delimitator');
var phrase = 'The-quick-brown-fox';
var elements = phrase.split('-');
console.log(elements);

var text = '123#456#789';
var numbers = text.split('#');
console.log(numbers);

console.log('\n\n filtare elemente array');
var elements = ['John', 123, 'Jane', 456, 'Jack'];
var numbers = elements.filter(function(item) {
    if (parseInt(item)) {
        return true;
    }
    return false;
});
console.log(numbers);

var names = elements.filter(function(item) {
    if (isNaN(item)) {
        return true;
    }
    return false;
});
console.log(names);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var evenNumbers = numbers.filter(i => !(i % 2));
console.log(evenNumbers);

var evenNumbers = numbers.filter(i => i % 2);
console.log(evenNumbers);

console.log('\n\n sortare elemente array crescator');
var numbers = [4, 8, 2, 7, 5, 9, 1, 3, 6];
sortedNumber = numbers.sort();
console.log(sortedNumber);

console.log('\n\n sortare elemente array descrescator');
var numbers = [4, 8, 2, 7, 5, 9, 1, 3, 6];
var reversedNumber = numbers.sort().reverse();
console.log(reversedNumber);

reversedNumber = numbers.sort(function(element1, element2) {
    if (element1 < element2) {
        return true;
    }
    return false;
    /*
    // pentru numere putem sa folosim doar:
    return element2 - element1;
    */
});
console.log(reversedNumber);

console.log('\n\n suma numerelor dintr-un array');
var numbers = [1, 2, 3, 4];
var sum = numbers.reduce(function(prev, next) {
    return prev + next;
});
console.log(numbers);
console.log('Suma: ' + sum);

console.log('\n\n concatenare 2 array-uri');
var destinations1 = ['Ghana', 'Peru'];
var destinations2 = ['Togo', 'Nepal'];
var destinations = destinations1.concat(destinations2);
console.log(destinations);
// sau folosind operatorul spread din ES6
destinations = [...destinations1, ...destinations2];
console.log(destinations);

console.log('\n\n cautare element care indeplineste o conditie intr-un array');
var numbers = [1, 5, 3, 6, 7, 8, 2];
var firstEvenNumber = numbers.find(function(number) {
    if (number % 2 == 0) {
        return true;
    }

    return false;
});
console.log('Primul element par: ' + firstEvenNumber);

console.log('\n\n cautare element intr-un array');
var destinations = ['Ghana', 'Nepal', 'Togo', 'Fiji'];
console.log(destinations);
var togoPosition = destinations.indexOf('Togo');
console.log('Togo position: ' + togoPosition);
var southAfricaPosition = destinations.indexOf('South Africa');
console.log('South Africa position: ' + southAfricaPosition);

//.splice(index, howmany, item1, ....., itemX)
// .splice modifica array-ul pe care se aplica functia!!!
console.log('\n\n modificare array folosind .splice');

console.log('\n --- adaugare elemente in array la o pozitie specificata');
var destinations = ['Ghana', 'Nepal', 'Togo'];
console.log(destinations);
destinations.splice(1, 0, 'South Africa', 'Argentina');
console.log(destinations);

console.log('\n --- stergere elemente din array');
destinations.splice(1, 3);
console.log(destinations);

