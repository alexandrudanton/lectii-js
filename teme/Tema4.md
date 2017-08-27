# Tema 4
## Problema 1
Declarati si initializati o variabila care sa contina un cuvant. Scrieti un script care sa inlocuiasca fiecare litera cu urmatoarea litera din alfabet. Fiecare litera din alfabet are un cod: `'A' -> 65`, `'B' -> 66`, etc, `'a' -> 97`, `'b' -> 98`, etc. Pentru rezolvarea problemei se vor folosi `String.fromCharCode(number)` si `character.charCodeAt(0)`.
<br>
> `String.fromCharCode(65)` returneaza 'A'
> `'b'.charCodeAt(0)` returneaza 98
> Pentru stringul `'abcd'` scriptul trebuie sa afiseze `'bcde'`

## Problema 2
Scrieti un script care sa ceara utilizatorului sa introduca un timp, format din ore, minute si secunde (citite pe rand folosind functia `prompt()`). Dupa acest pas veti avea trei variabile: `hours`, `minutes`, `seconds`. Calculati care este timpul mai mare cu o secunda fata de cel introdus de utilizator.
> `14h17m59s` => `14h18m0s`
> `6h59m59s` => `7h0m0s`
> `23h59m59s` => `0h0m0s (midnight)`
