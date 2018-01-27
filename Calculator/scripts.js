$(function() {
    createButtonEvents();
});

function createButtonEvents() {
    $('.button').map((index, element) => {
        $(element).click(function() {
            buttonClicked($(this));
        });
    });
}

function buttonClicked(sender) {
    console.log(sender.text());
    let buttonText = sender.text();

    if (
        $.isNumeric(buttonText) ||
        (buttonText == '.' && !inDisplay(buttonText))
    ) {
        appendToDisplay(buttonText);
        return;
    }

    if (buttonText == 'C') {
        removeLastCharFromDisplay();
        return;
    }

    if ($.inArray(buttonText, ['+', '-', '×', '÷']) != -1) {
        addOperandToQueue(buttonText);
    }
}

function appendToDisplay(char) {
    $('.input').append(char);
}

function inDisplay(char) {
    let displayText = $('.input').text();
    if (displayText.indexOf(char) != -1) {
        return true;
    }

    return false;
}

function removeLastCharFromDisplay() {
    let displayText = $('.input').text();
    let newText = displayText.substring(0, displayText.length - 1);
    $('.input').text(newText);
}

function addOperandToQueue(operator) {
    $('.queue').append($('.input').text() + operator);
    $('.input').text('');
}
