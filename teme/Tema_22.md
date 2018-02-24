# <span style="color: #bada55;">Tema 22</span>

Construiti in html imaginea de mai jos.

![Image of Grid](https://github.com/alexandrudanton/lectii-js/blob/master/teme/imgs/tema_22.png)


Ea este formata din:
- un element `main` cu clasa `container`
- in acest element avem un grid format din doua elemente:
    * unul cu clasa `display` (care are width si height fix specificat de noi in styles.css; cele doua dimensiuni se vor specifica in `px`, nu in `%`)
    * unul cu clasa `buttons`
- elementul `display` contine un icon realizat cu ajutorul font-awesome-ului (se poate afisa un caracter sau un text scurt)
- in elementul cu clasa `buttons` avem un grid format din 3 linii fiecare continand cate un buton:
    * `random position`: repozitioneaza aleator `smiley`-ul in elementul `display`
        - se va folosi `.css({top: randomTop + 'px', left: randomLeft + 'px'})`, unde variabilele `randomTop` si `randomLeft` primesc cate o valoare aleatoare intre 0 si height-ul, respectiv width-ul display-ului
    * `random color`: schimba culoarea elementului cu o culoarea aleatoare (recomand folosirea `color: rgb(${red}, ${green}, ${blue})`, cele 3 variabile primind cate un numar aleator intre 0 si 255)
    * `random size`: schimba marimea icon-ului/textului din display cu o valoare aleatoare intre 10 si 50 px
        - formula care returneaza un numar aleator intre doua valori `min` si `max` este:
        ```javascript
            Math.floor(min + Math.random() * (max - min));
        ```

Functiile de care vom avea nevoie la realizarea acestui proiect sunt:
- `getRandomNumber(min, max)`: este folosita peste tot unde avem nevoie de un nr aleator
- `randomPosition`: seteaza doua variabile `randomTop` si `randomLeft` cu valori aleatoare si cu acestea seteaza noua pozitie a icon-ului/textului
- `randomColor`: seteaza 3 variabile `red`, `green` si `blue` cu valori aleatoare intre 0 si 255 si cu acestea seteaza culoarea icon-ului/textului
- `randomSize`: seteaza o variabila `fontSize` cu o valoare aleatoare intre 10 si 50 si cu aceasta seteaza font-size-ul icon-ului/textului

OBSERVATII:
1. nu avem nevoie de sectiunea `$(() => { /* */ });`
2. fiecare buton o sa aiba un **id** sau o **clasa css** cu ajutorul careia vom selecta elementul si ii vom adauga un eveniment click:
```javascript
$('.random-position-bttn').click(randomPosition);

const randomPosition = () => {
    /* aici scrieti codul */
}
```
3. codul de mai sus o sa fie repetat de 3 ori pentru fiecare buton.

<p style="color: red;">Citit cu atentie instructiunile! Recititi-le pentru a intelege modul in care trebuie organizat codul! Incercati sa nu va complicati. Proiectul este foarte simplu 😃!</p>
SPOR LA TREABA! 😸
