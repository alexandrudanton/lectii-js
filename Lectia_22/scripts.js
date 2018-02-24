$(() => {
    // pregatim "board"-ul si asezam cartile pe el
    init();
});

const cols = 4;
const rows = 3;
const images = [
    'fab fa-android',
    'fas fa-at',
    'fab fa-apple',
    'fas fa-ambulance',
    'fas fa-balance-scale',
    'fas fa-bell',
    'fas fa-bicycle',
    'fas fa-bomb',
    'fas fa-bus',
    'fas fa-chess',
    'fas fa-cut',
    'fab fa-earlybirds',
    'fab fa-empire',
    'fas fa-exclamation-triangle',
    'fas fa-fighter-jet',
    'fas fa-fire-extinguisher',
    'fas fa-football-ball',
    'fab fa-fort-awesome',
    'fas fa-gamepad',
    'fas fa-graduation-cap',
    'fas fa-headphones',
    'fas fa-heart',
    'fab fa-js-square',
    'fab fa-itunes-note',
    'fas fa-laptop',
    'fas fa-lightbulb',
    'fab fa-linux',
    'fas fa-location-arrow',
    'fas fa-mobile-alt',
    'fas fa-motorcycle',
    'fas fa-paw',
    'fas fa-plane',
    'fas fa-puzzle-piece',
    'fab fa-rebel',
    'fas fa-plus',
    'fab fa-react',
    'fas fa-smile',
    'far fa-snowflake',
    'fas fa-space-shuttle',
    'fas fa-star',
    'fas fa-taxi',
    'fas fa-subway',
    'far fa-thumbs-up'
];

const init = () => {
    // adaugam board-ul in board-container
    $('.board-container').html('<section class="board"></section>');

    // setam grid-template-columns si variabila css --cols-number
    setBoardNumberOfColumns(cols);

    // asezam cartile
    buildCardsGrid();
};

const buildCardsGrid = () => {
    const numberOfCards = cols * rows;
    for (let i = 0; i < numberOfCards; i++) {
        $('.board').append(
            `<div class="cards on"><i class="fab fa-android"></i></div>`
        );
    }
};

const setBoardNumberOfColumns = cols => {
    // setam variabile css --cols-number pe body pentru a putea fi accesata din orice clasa css
    document.body.style.setProperty('--cols-number', cols);

    $('.board').css({
        gridTemplateColumns: `repeat(${cols}, 1fr)`
    });
};

const random = max => {
    return Math.floor(Math.random() * max);
};

const shuffleArray = (cards, length) => {
    /*
        clonam array-ul cards primit ca parametru pentru a nu modifica array-ul images pe care il trimitem
        in functia shuffleArray
    */
    let imgs = cards.slice(0);
    let noOfCards = imgs.length;
    let newImages = []; // noul array in care vom pune cate o imagine aleasa aleator
    let idx; // index-ul pe care il vom genera aleator

    for (let i = 0; i < length; i++) {
        // generam un nr aleator intre 0 si noOfCards
        idx = random(noOfCards);

        // adaugam la noul array elementul cu index-ul idx
        newImages.push(imgs[idx]);

        // stergem din array-ul imgs elementul cu index-ul idx
        imgs.splice(idx, 1);

        // decrementam cu o unitate valoare variabilei noOfCards in care
        // am pus initial nr de elemente ale array-ului imgs
        noOfCards--;
    }
    return newImages;
};
