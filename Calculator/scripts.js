$(function() {
    createButtonEvents();
});

const createButtonEvents = () => {
    $('.button').map((index, element) => {
        $(element).click(function() {
            buttonClicked($(this));
        });
    });
};

const buttonClicked = sender => {
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

    if (buttonText == '=') {
        getResult();
    }
};

const appendToDisplay = char => {
    $('.input').append(char);
};

const inDisplay = char => {
    let displayText = $('.input').text();
    if (displayText.indexOf(char) != -1) {
        return true;
    }

    return false;
};

const removeLastCharFromDisplay = () => {
    let displayText = $('.input').text();
    let newText = displayText.substring(0, displayText.length - 1);
    $('.input').text(newText);
};

const addOperandToQueue = operator => {
    $('.queue').append($('.input').text() + operator);
    $('.input').text('');
};

const getResult = () => {
    $('.queue').append($('.input').text() + '=');
    const expression = $('.queue')
        .html()
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/=/g, '');
    console.log(expression);

    $('.input').text(eval(expression));
};
