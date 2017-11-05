function sum(args)
{
    var sum = 0;
    var argsLength = args.length;

    for (var i = 0; i < argsLength; i++) {
        sum += parseInt(args[i]);
    }

    return sum;
}

function sum2(args)
{
    var sum = args.reduce(function(sum, next)
    {
        return sum + next;
    });

    return sum;
}

Array.prototype.sum = function()
{
    return this.reduce((sum, next) => sum + next);
}

function randomNumber()
{
    var randomValue = Math.random();
    var randomIntNumber = Math.floor(randomValue * 10);
    return randomIntNumber;
}

var numbers = new Array();
var numbers = [];
// numbers.push(3);
// numbers.push(1);
// numbers.push(5);
// numbers.push(2);
// numbers.push('7');
// numbers.push('1a');
// numbers.push(9);

var randomNr;

for (var i = 0; i < 10; i++) {
    randomNr = randomNumber();
    numbers.push(randomNr);
}

console.log(numbers);
console.log('Suma: ' + sum(numbers));
console.log('Suma: ' + sum2(numbers));
console.log('Suma: ' + numbers.sum());
