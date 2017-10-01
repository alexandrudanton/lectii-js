function show(message)
{
    $('#container').html($('#container').html() + '<br>' + message);
}

const phrase = '2387';
const phraseLength = phrase.length;
var sum = 0;

for (var i = 0; i < phraseLength; i++) {
    sum = sum + parseInt(phrase[i]);
}

show(phrase);
show('Sum: ' + sum);
