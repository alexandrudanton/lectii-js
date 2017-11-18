$(() => {
    createTicTacToeGrid();
    highlightCurrentPlayer();
    setIndicatorType();
    setClickEvents();
});

const indicators = ['x', 'o'];
var moves = 0;
var currentUserIndicator;
var grid = [];

const getUserIndicator = () => {
    return indicators[moves % 2];
}

const createTicTacToeGrid = () => {
    $('.tic-tac-toe-container')
        .append('<div class="tic-tac-toe"></div>');

    for (let i = 0; i < 9; i++) {
        $('.tic-tac-toe').append('<div id="' + i + '" class="unticked"></div>');
        if (i % 3 == 0) {
            grid.push([]);
        }
        grid[Math.trunc(i / 3)].push(-5);
    }
};

const highlightCurrentPlayer = () => {
    if (!$('.game-board .bg-primary').length) {
        $('.player-1').toggleClass('bg-primary bg-info');
        return;
    }

    $('.game-board .player-1, .game-board .player-2')
        .toggleClass('bg-primary bg-info');
}

const setIndicatorType = () => {
    $('.tic-tac-toe div:not(.ticked)').removeClass('o x').addClass(getUserIndicator());
}

const itsWin = (sender) => {
    if (moves < 5) {
        return false;
    }

    for (let i = 0; i < 3; i++) {
        if (isRow(i)) {
            return true;
        }

        if (isCol(i)) {
            return true;
        }

        if (!(i % 2) && isDiagonal($(sender).attr('id'))) {
            return true;
        }
    }
}

const isRow = (index) => {
    var tmp = grid[index].reduce((sum, next) => sum + next);
    if ($.inArray(tmp, [0, 3]) != -1) {
        highlightRow(index);
        return true;
    }

    return false;
}

const highlightRow = (index) => {
    $('.tic-tac-toe div')
        .slice(index * 3, index * 3 + 3)
        .addClass('bg-success');
}

const isCol = (index) => {
    tmp = grid[0][index] + grid[1][index] + grid[2][index];
    if ($.inArray(tmp, [0, 3]) != -1) {
        highlightCol(index);
        return true;
    }
}
const highlightCol = (index) => {
    $('.tic-tac-toe div')
        .filter((i, value) => i % 3 == index)
        .addClass('bg-success');
}

const isDiagonal = (index) => {
    index = parseInt(index);

    if (
        (index == 4 || $.inArray(index, [0, 8]) != -1)
        && isFirstDiagonal()
    ) {
        highlightFirstDiagonal();
        return true;
    }

    if (isSecondDiagonal()) {
        highlightSecondDiagonal();
        return true;
    }
}

const isFirstDiagonal = () => {
    return $.inArray(grid[0][0] + grid[1][1] + grid[2][2], [0, 3]) != -1;
}

const isSecondDiagonal = () => {
    return $.inArray(grid[0][2] + grid[1][1] + grid[2][0], [0, 3]) != -1;
}

const highlightFirstDiagonal = () => {
    $('#0, #4, #8').addClass('bg-success');
}

const highlightSecondDiagonal = () => {
    $('#2, #4, #6').addClass('bg-success');
}

const removeAllClickEvents = () => {
    $('.tic-tac-toe div').unbind('click');
    $('.tic-tac-toe div:not(.ticked)').removeClass('unticked');
}

const highlightWinner = () => {
    $('.player-' + (--moves % 2 + 1))
        .toggleClass('bg-primary bg-danger');
}

const setClickEvents = () => {
    $('.tic-tac-toe div').click(function () {
        let indicator = getUserIndicator();
        $(this)
            .toggleClass('unticked ticked')
            .addClass(indicator)
            .unbind('click')
            .html(indicator.toUpperCase());

        var cellId = parseInt($(this).attr('id'));
        grid[Math.trunc(cellId / 3)][cellId % 3] = indicator == 'o' ? 0 : 1;

        moves++;

        if (!itsWin(this)) {
            setIndicatorType();
            highlightCurrentPlayer();
        } else {
            highlightWinner();
            removeAllClickEvents();
        }
    });
}

const reload = () => {
    location.href = location.href;
}
