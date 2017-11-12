# Tema 13

## Problema 1
Scrieti un script care parcurge un array format doar din numere intregi pozitive si care inlocuieste fiecare element par cu dublul lui si fiecare element impar cu patratul lui.
```javascript
var numbers = [8, 5, 6, 7];
// Array-ul numbers dupa modificare devine [16, 25, 12, 49]
```

## Problema 2
Declarati si initializati o variabila care sa contina un array format doar din string-uri. Scrieti un script care parcurge array-ul si inlocuieste fiecare element cu numarul de caractere al acelui element.
```javascript
var elements = ['red', 'green', 'orange', 'blue'];
// Array-ul elements dupa modificare devine [3, 5, 6, 4]
```

## Problema 3
Scrieti un script care sa stearga toate dublurile dintr-un array. In cazul elementelor de tip string compararea se va face case insensitive.
> Tips:
> - parcurgeti array-ul si convertiti in lower case toate cuvintele
> - sortati array-ul crescator
> - parcurgeti array-ul si verificati daca elementul curent este la fel cu elementul urmator
> - stergeti elementul urmator si decrementati cu o unitate variabila in care ati pus la inceput lungimea array-ului pentru a scurta numarul de iteratii facute de `for`-ul care parcurge array-ul
>
> Incercati si varianta in care nu sortati elementele crescator :-)
