$(() => {
    // construim lista cu propozitii
    createList();

    // setam evenimentul de keyup pentru input
    $('#search').keyup(function() {
        filterPhrases($(this).val());
    });

    // dupa incarcarea paginii setam focusul (cursorul) pe input
    $('#search').focus();
});

const filterPhrases = word => {
    // daca in input nu avem nicio litera stergem toate highlight-urile din lista
    if (word == '') {
        removeAllHighlights();
        return;
    }
    // parcurgem fiecare element din lista si verificam daca exista textul cautat in el
    $('.list-container ul li').map((index, element) => {
        /*
            luam textul din <li> (fara eventualele taguri <span> pe care le folosim pentru a
            highlight-ui textul cautat in elementele listei) si il convertim la litere mice
        */
        const liHtml = $(element)
            .text()
            .toLowerCase();

        // verificam daca textul cautat exista in textul din <li>; pentru asta folosim functia .includes()
        if (liHtml.includes(word.toLowerCase())) {
            // daca textul exista highlight-uim toate aparitiile lui in text din <li>
            highlightOccurencesInElement($(element), word);
            /*
                afisam elementul
                elementul poate sa fie ascuns in urma cautarii unui string care nu exista in
                textul din el
            */
            $(element).show();
        } else {
            // pentru ca nu am gasit textul cautat in <li>-ul curent il ascundem
            $(element).hide();
        }
    });
};

const removeAllHighlights = () => {
    // parcurgem fiecare li din lista si inlocuim textul din el cu textul fara taguri
    $('.list-container ul li').map((index, element) => {
        $(element).html($(element).text());
    });
};

const highlightOccurencesInElement = (element, word) => {
    const pattern = new RegExp(`(${word})`, 'ig');
    const newHtml = element
        .text()
        .replace(pattern, `<span class="highlight">$1</span>`);
    element.html(newHtml);
};

const createList = () => {
    const phrases = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Etiam a diam a sem porta sagittis nec vitae dolor.',
        'Nam lacinia leo quis nulla imperdiet bibendum.',
        'Nulla vitae augue tempus, sollicitudin metus ac, aliquet ipsum.',
        'Praesent imperdiet purus quis mauris malesuada mollis.',
        'Praesent in odio a tellus imperdiet mollis.',
        'Proin molestie nibh dictum, interdum nibh non, ornare neque.',
        'Fusce tincidunt enim ut orci vulputate, vel feugiat nisi dapibus.',
        'Nullam pulvinar quam ut dolor accumsan bibendum.',
        'Morbi dictum ligula ac purus tristique mollis.',
        'Maecenas a orci tincidunt purus dictum rutrum sit amet eleifend ipsum.'
    ];

    phrases.map(phrase => {
        const liHtml = `<li>${phrase}</li>`;

        $('.list-container ul').append(liHtml);
    });
};
