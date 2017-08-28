# Tema 3

## Problema 1

Declarati si initializati o variabila care sa contina o propozitie. Scrieti un script care sa parcurga fiecare caracter din propozitie si sa numere cate vocale si cate consoane sunt.
> Tip:
> - pentru a verifica daca un caracter este vocala aveti nevoie in instructiunea IF de o conditie formata din mai multe comparatii, si anume:
> `comparatie1 || comparatie2 || comparatie3` etc
> - fiecare comparatie consta in verificarea acelui caracter daca este egal cu 'a' sau 'e' sau 'i' sau ... etc
> ```javascript
> if (comparatie1 || comparatie2 || ....) {
>   /* instructiuni */
> }
> ```

## Problema 2

Declarati si initializati o variabila care sa contina un text format doar din 0 si 1 in ordine aleatoare. Folosind instructiunea for parcurgeti fiecare caracter din string si numarati de cate ori apare fiecare cifra. Atentie daca folositi operatorul === pentru verificarea caracterelor :-)

> Exemplu:
> ```javascript
> var text = '1101000111000';
> ```
> contine 7 de 0 si 6 de 1

## Problema 3

Scrieti un script care sa afiseze folosind instructiunea for numerele de la 1 la 100 cu urmatoarele exceptii:
1. Daca numarul **este divizibil cu 3** afisati `Fizz`
2. Daca numarul **este divizibil cu 5** afisati `Buzz`
3. Daca numarul **este divizibil si cu 3 si cu 5** afisati `FizzBuzz`

> Exemplu:<br>
> 1<br>
> 2<br>
> Fizz<br>
> 4<br>
> Buzz<br>
> Fizz<br>
> 7<br>
> 8<br>
> Fizz<br>
> Buzz<br>
> 11<br>
> Fizz<br>
> 13<br>
> 14<br>
> FizzBuz<br>z
> s.a.m.d pana la 100 (mai exact pana la Buzz :-P)
