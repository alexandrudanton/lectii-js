# Tema 17

## Problema 1

Scrieti un script care sa reproduca grid-ul de mai jos:

![Image of Grid](https://github.com/alexandrudanton/lectii-js/blob/master/teme/imgs/testing_css_grid.png)

Recomandarea mea este sa incercati sa adaugati fiecare celula din grid folosind javascript, astfel:

- scrieti prima data in body div-ul cu clasa "container" (nu este nevoie sa il adaugati folosind javascript/jquery)
- pe urma, in `<script>`, folosind un `for` iterati de 105 ori instructiunea care adauga (`append`) fiecare celula la grid
- pentru a adauga un element intr-un alt element se foloseste instructiunea de jquery:
```javascript
$('.container').append('<div class="item">text</div>');
```
- in locul cuvantului "text" trebuie sa includeti in stringul dintre paranteze valoarea variabilei `i` folosita in `for`
- incercati sa intuiti care este conditia folosita la celulele care sunt afisate pe doua coloane :smiley:
- nu in ultimul rand trebuie scris CSS-ul pentru acest grid; nu sunt foarte importante font-ul, culorile, background-ul si border-ul, ci aranjarea celulelor in acelasi format cu cel din poza. Pentru a afisa o celula pe doua coloane se adauga dupa clasa "item" o alta clasa "large".

## Problema 2

Folosind doar html si css (evident si emmet) reproduceti una dintre pozele de mai jos. Caracterele/simbolurile speciale nu trebuie sa le afisati daca nu reusiti :smile::

![calculator_1](http://cdn.windowsreport.com/wp-content/uploads/2013/07/default-windows-8.1-calculator-app.png)
![calculator_2](http://cdn.windowsreport.com/wp-content/uploads/2013/07/calculator-8x-free-windows-8-windows-8.1-calculator-app.jpg)

Spor! :smiley:
