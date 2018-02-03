$(() => {
    createClickEvents();
});

var step = 50;

const createClickEvents = () => {
    $('.up, .left, .right, .down').click(function() {
        let direction = $(this).data('direction');
        moveSquare(direction);
    });
};

const moveSquare = direction => {
    const functionName = direction
        .replace(/^[a-z]|(\-[a-z])/g, letter => letter.toUpperCase())
        .replace('-', '');
    new Function(`return move${functionName}()`)();
};

const moveUp = () => {
    let currentTop = parseInt($('.square').css('top'));

    $('.square').css({
        top: currentTop - step + 'px'
    });
};

const moveDown = () => {
    let currentTop = parseInt($('.square').css('top'));

    $('.square').css({
        top: currentTop + step + 'px'
    });
};

const moveLeft = () => {
    let currentLeft = parseInt($('.square').css('left'));

    $('.square').css({
        left: currentLeft - step + 'px'
    });
};

const moveRight = () => {
    let currentLeft = parseInt($('.square').css('left'));

    $('.square').css({
        left: currentLeft + step + 'px'
    });
};
