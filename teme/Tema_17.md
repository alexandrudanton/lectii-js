# Tema 17

## Problema 1
Scrieti un script care sa reproduca grid-ul de mai jos:

![Image of Grid](https://github.com/alexandrudanton/lectii-js/blob/master/teme/imgs/testing_css_grid.png)

Recomandarea mea este sa incercati sa adaugati fiecare celula din grid folosind javascript, astfel:

- scrieti prima data in body div-ul cu clasa "container" (nu este nevoie sa il adaugati folosind javascript/jquery)
- pe urma, folosind un `for` iterati de 105 ori instructiunea care adauga (`append`) fiecare celula la grid
- pentru a adauga un element intr-un alt element se foloseste instructiunea de jquery:
```javascript
$('.container').append('<div class="item">text</div>');
```
- in locul cuvantului "text" trebuie sa concatenati la stringul dintre paranteze valoarea variabilei `i` folosita in `for`
- incercati sa intuiti care este conditia folosita la celulele care sunt afisate pe doua coloane :-)
- nu in ultimul rand trebuie scris css-ul pentru acest grid; nu sunt foarte importante font-ul, culorile, background-ul si border-ul, ci aranjarea celulelor in acelasi format cu cel din poza.

Spor! :-)
