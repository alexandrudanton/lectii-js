$(() => {
    buildControllerButtons();
    addClickEvents();
});

const buildControllerButtons = () => {
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
        [-1, -1, -45], // up-left
        [-1, 0, 0], // up
        [-1, 1, 45], // up-right
        [0, -1, -90], // left
        [0, 0, 0], // center
        [0, 1, 90], // right
        [1, -1, -135], // down-left
        [1, 0, 180], // down
        [1, 1, 135] // down-right
    ];

    /*
        parcurgem array-ul de mai sus si construim butoanele (ele initial nu exista in HTML)
    */
    buttonsData.map(item => {
        // expresia de mai jos in variabilele "top", "left", "degree" valorile din fiecare element din array-ul "buttonsData"
        let [top, left, degree] = item;

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
                <i class="fas ${
                    top + left + top * left == 0 ? 'fa-redo' : 'fa-chevron-up'
                }" style="--degree: ${degree};"></i>
            </div>`
        );
    });
};

const addClickEvents = () => {
    // in momentul in care apasam pe butonul mouse-ului se inlocuieste clasa "button--up" cu "button--down"
    $('.controller .button').mousedown(function() {
        $(this).toggleClass('button--up button--down');
    });

    $('.controller .button').click(function() {
        moveSquare($(this).data('step-top'), $(this).data('step-left'));
    });

    // in momentul in care ridicam degetul de pe butonul mouse-ului se inlocuieste clasa "button--down" cu "button--up"
    $('.controller .button').mouseup(function() {
        $(this).toggleClass('button--up button--down');
    });

    /*
        codul pentru cele doua actiuni ("mousedown" si "mouseup") este identic pentru functia toggleClass stie sa verifice
        care dintre cele doua clase exista setate pe elementul nostru, sa o stearga si pe urma sa o adauge pe cealalta
    */
};

const moveSquare = (stepTop, stepLeft) => {
    /*
        daca stepTop si stepLeft sunt ambele egale cu 0 atunci inseamna ca s-a apasat butonul din centru, cel care
        reseteaza pozitia patratului nostru
    */
    if (stepTop == 0 && stepLeft == 0) {
        resetPosition();
        return;
    }

    let step = 50;
    // pozitia curenta a patratului
    let currentTop = parseInt($('.square').css('top'));
    let currentLeft = parseInt($('.square').css('left'));

    // calculam urmatoarea pozitie a patratului in functie de directia selectata
    let newTop = currentTop + step * stepTop;
    let newLeft = currentLeft + step * stepLeft;

    // verificam daca patratul poate fi mutat la noua pozitie; daca nu se poate iesim din functie folosind "return"
    if (!itCanMoveTo(newTop, newLeft)) {
        return;
    }

    // mutam patratul la noua pozitie
    moveAt(newTop, newLeft);
};

const moveAt = (top, left) => {
    $('.square').css({
        top: top + 'px',
        left: left + 'px'
    });
};

const resetPosition = () => {
    let newTop = Math.round(parseInt($('.display').css('height')) / 2 - 50);
    let newLeft = Math.round(parseInt($('.display').css('width')) / 2 - 50);
    moveAt(newTop, newLeft);
};

const itCanMoveTo = (top, left) => {
    if (top < 0 || left < 0) {
        return false;
    }

    let squareWidth = parseInt($('.square').css('width'));
    let squareHeight = parseInt($('.square').css('height'));
    let displayWidth = parseInt($('.display').css('width'));
    let displayHeight = parseInt($('.display').css('height'));

    if (
        top + squareHeight > displayHeight ||
        left + squareWidth > displayWidth
    ) {
        return false;
    }

    return true;
};
