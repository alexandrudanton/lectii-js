# Probleme optionale

## 1. String-uri

1. Scrieti un script care sa converteasca un string, continand prenume si nume, la forma abreviata.
> 'Alex Anton' ---> 'Alex A.'

2. Scrieti un script care sa transforme un string dupa modelul urmator:
> 'Robin Singh from USA.' ---> 'robin-singh-from-usa'

3. Scrieti un script care sa transforme literele mari in litere mici si cele mici in litere mari dintr-un string.
> 'AaBbc' ---> 'aAbBC'

4. Scrieti un script care sa converteasca un string in camelcase.
> 'JavaScript Exercises' ---> 'JavaScriptExercises'<br>
> 'JavaScript exercises' ---> 'JavaScriptExercises'<br>
> 'JavaScriptExercises' ---> 'JavaScriptExercises'

5. Scrieti o functie care sa transforme un string din camel case in text normal. Optional, se poate trimite in functie un al doilea parametru care sa specifice caracterul care va delimita cuvintele.
> uncamelize('helloWorld') ---> 'hello world'<br>
> uncamelize('helloWorld', '-') ---> 'hello-world'<br>
> uncamelize('helloWorld', '#') ---> 'hello#world'

6. Scrieti o functie care concateneaza un string de n ori. Folositi `for` si concatenare de string-uri.
> repeat('Ha!') ---> 'Ha!'<br>
> repeat('Ha!', 2) ---> 'Ha!Ha!'<br>
> repeat('Ha!', 3) ---> 'Ha!Ha!Ha!'

7. Scrieti o functie care sa adauge sufixul corect la un numar transmis ca parametru. Numarul transmis ca parametru se va valida pentru a nu fi <= 0. In cazul in care numarul nu este valid se afiseaza un mesaj. Pentru a citi numarul pe care il transmiteti functiei folositi `prompt(message)`.
> 1st<br>
> 2nd<br>
> 3rd<br>
> 4th<br>
> ...<br>
> 8th<br>
> ...<br>
> 301st

8. Scrieti o functie care sa imparta un string in substring-uri de dimensiune data. Functia va avea 2 parametrii: string-ul si dimensiunea substring-urilor.
> string_chop('Javascript', 1) ---> 'J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'<br>
> string_chop('Javascript', 3) ---> 'Jav', 'asc', 'rip', 't'

9. Scrieti o functie care sa numere de cate ori apare un cuvant intr-o fraza. Cautarea cuvantului sa nu fie case-sensitive. Incercati o varianta fara si una cu regular expressions :-)
> count('The quick brown fox jumps over the lazy dog', 'the') ---> 2<br>
> count('The quick brown fox jumps over the lazy dog', 'fox') ---> 1

10. Scrieti o functie care sa trunchieze o phrase la un anumit numar de cuvinte.
> truncate('The quick brown fox jumps over the lazy dog', 4) ---> 'The quick brown fox'

## 2. Structuri conditionale si repetitive

1. Scrieti un script care sa aiba 3 variabile, fiecare continand un numar intreg (pozitiv sau negativ). Afisati semnul inmultirii celor 3 numere.
> De exemplu:<br>
> Pentru 3, -7, 2 se va afisa semnul "-"<br>
> Pentru -2, 5, -1 se va afisa semnul "+"

2. Scrieti un script care sa aiba 3 variabile, fiecare continand un numar intreg (pozitiv sau negativ). Afisati cele 3 numere in ordine crescatoare.
> De exemplu:<br>
> Pentru numerele 0, -1, 4 se va afisa -1, 0, 4

3. Scrieti un script care sa afiseze numerele de la 1 la 15 si in dreptul fiecaruia sa scrie daca este par sau impar.
