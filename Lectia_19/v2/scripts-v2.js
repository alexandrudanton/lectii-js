$(() => {
    createControllerButtons();
    addClickEvents();
});

// salvam ultima directie (in grade) in care s-a deplasat racheta
var lastDegree = null;

const createControllerButtons = () => {
    /*
        construim un array in care fiecare element contine un array format din:
            - directia in care se muta patratul pe verticala
            - directia in care se muta patratul pe orizontala
            - gradele cu care se roteste sageata de pe buton din css (toate butoanele au initial aceeasi sageata)

        -1 inseamna sus, respectiv stanga
        1 inseamna jos, respectiv dreapta
        0 inseamna nu se modifica acea coordonata
    */
    const buttonsData = [
        [-1, -1, 315], // up-left
        [-1, 0, 0], // up
        [-1, 1, 45], // up-right
        [0, -1, 270], // left
        [0, 0, 0], // center
        [0, 1, 90], // right
        [1, -1, 225], // down-left
        [1, 0, 180], // down
        [1, 1, 135] // down-right
    ];

    /*
        parcurgem array-ul de mai sus si construim butoanele (ele initial nu exista in HTML)
    */
    buttonsData.map(item => {
        // expresia de mai jos in variabilele "top", "left", "degree" valorile din fiecare element din array-ul "buttonsData"
        const [top, left, degree] = item;

        /*
            - adaugam la div-ul cu clasa "buttons" noile div-uri
            - am scris string intre backquote "`" (cel de pe tasta cu tilda "~") pentru a putea folosi template strings din ES6 asa cum se poate observa mai jos
            - folosind backquote nu mai trebuie sa folosim concatenarea pentru a insera in stringul nostrul valori din variabile, ci folosim direct ${[expresie JS]}
            - orice punem intre {} va fi interpretat ca un cod JS
            - data-step-top="${top}" va pune intre "" valoarea variabilei top calculata mai sus

            - style="--degree: ${degree};" seteaza variabila css --degree pe care o vom folosi in clasa din styles-v2.css
        */
        $('.controller .buttons').append(
            `<div class="button button--up" data-step-top="${top}" data-step-left="${left}">
                <i class="${
                    top + left + top * left == 0
                        ? 'fas fa-redo'
                        : 'far fa-hand-point-up'
                }" style="--degree: ${degree};" data-degree="${degree}"></i>
            </div>`
        );
    });
};

const addClickEvents = () => {
    // in momentul in care apasam pe butonul mouse-ului se inlocuieste clasa "button--up" cu "button--down"
    $('.controller .button').mousedown(function() {
        $(this).removeClass('button--up');
        $(this).addClass('button--down');
    });

    $('.controller .button').click(function() {
        moveSquare(
            $(this).data('step-top'),
            $(this).data('step-left'),
            $(this)
                .find('i')
                .data('degree')
        );
    });

    // in momentul in care ridicam degetul de pe butonul mouse-ului se inlocuieste clasa "button--down" cu "button--up"
    $('.controller .button').mouseup(function() {
        $(this).removeClass('button--down');
        $(this).addClass('button--up');
    });
};

const moveSquare = (stepTop, stepLeft, degree) => {
    /*
        daca stepTop si stepLeft sunt ambele egale cu 0 atunci inseamna ca s-a apasat butonul din centru, cel care
        reseteaza pozitia patratului nostru
    */
    if (stepTop == 0 && stepLeft == 0) {
        resetPosition();
        return;
    }

    const step = 50;
    // pozitia curenta a patratului
    const currentTop = parseInt($('.square').css('top'));
    const currentLeft = parseInt($('.square').css('left'));

    // calculam urmatoarea pozitie a patratului in functie de directia selectata
    const newTop = currentTop + step * stepTop;
    const newLeft = currentLeft + step * stepLeft;

    // verificam daca patratul poate fi mutat la noua pozitie; daca nu se poate, iesim din functie folosind "return"
    if (!itCanMoveTo(newTop, newLeft)) {
        return;
    }

    // mutam patratul la noua pozitie
    pointAndMoveSpaceShuttle(newTop, newLeft, degree);
};

const moveAt = (top, left) => {
    $('.square').css({
        top: top + 'px',
        left: left + 'px'
    });
};

const resetPosition = () => {
    const newTop = Math.round(parseInt($('.display').css('height')) / 2 - 50);
    const newLeft = Math.round(parseInt($('.display').css('width')) / 2 - 50);
    pointAndMoveSpaceShuttle(newTop, newLeft, null);
};

const pointAndMoveSpaceShuttle = (newTop, newLeft, degree) => {
    pointSpaceShuttleTo(newTop, newLeft, degree);

    /*
        daca noua directie difera de ultima directie in care s-a deplasat racheta atunci rotim racheta
        si dupa ce s-a incheiat rotatia o deplasam in nou directie
    */
    if (lastDegree != degree) {
        $('.fa-space-shuttle').bind(
            'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
            () => moveAt(newTop, newLeft)
        );
        lastDegree = degree;
        return;
    }

    /*
        daca noua directie este aceeasi cu vechea directie (executia scriptului nu a intrat in IF)
        atunci doar mutam racheta in aceeasi directie
    */
    moveAt(newTop, newLeft);
};

/*
    !!! AND HERE COMES THE MAGIC !!! :-D
*/
const pointSpaceShuttleTo = (newTop, newLeft, degree) => {
    let angle;

    if (degree === null) {
        const top = parseInt($('.square').css('top'));
        const left = parseInt($('.square').css('left'));

        const angleSine =
            (newLeft - left) /
            Math.sqrt((newLeft - left) ** 2 + (newTop - top) ** 2);

        const radians = Math.asin(angleSine);

        angle = radians * 57.295779513;
    } else {
        angle = degree - 90;
    }

    $('.fa-space-shuttle').css({
        transform: `rotate(${angle}deg)`
    });
};

const itCanMoveTo = (top, left) => {
    if (top < 0 || left < 0) {
        return false;
    }

    const squareWidth = parseInt($('.square').css('width'));
    const squareHeight = parseInt($('.square').css('height'));
    const displayWidth = parseInt($('.display').css('width'));
    const displayHeight = parseInt($('.display').css('height'));

    return (
        top + squareHeight <= displayHeight &&
        left + squareWidth <= displayWidth
    );
};
