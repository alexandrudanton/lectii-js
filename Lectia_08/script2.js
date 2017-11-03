function show(message)
{
    $('#container').html($('#container').html() + '<br>' + message);
}

function getRandomNumber()
{
    return 1 + Math.floor(Math.random() * 8);
}

function generateASequenceOfRandomDigits(length)
{
    var phrase = '';
    for (var i = 0; i < length; i++) {
        phrase += getRandomNumber();
    }

    return phrase;
}

function getMax(a, b)
{
    if (a > b) {
        return a;
    }

    return b;
}

const phraseLength = 4;
const phrase = generateASequenceOfRandomDigits(phraseLength);
show(phrase);

var max = phrase[0];
for (var i = 1; i < phraseLength; i++) {
    max = getMax(max, phrase[i]);
}

show('Max: ' + max);
