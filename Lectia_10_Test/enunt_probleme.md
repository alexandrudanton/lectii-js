In primul rand **felicitari pentru rabdarea si interesul de care ati dat dovada pana acum la cursul de Javascript** :-).

La fiecare curs pe care il vom face vom invata lucruri din ce in ce mai interesante (array-uri :-P), iar de la simple afisari de date in consola sau intr-un div vom ajunge sa modificam interactiv elemente dintr-o pagina web, sa construim dinamic sectiuni din pagina, sa afisam ferestre popup cu un design mult mai user-friendly decat un simplu alert() si multe altele.

Dar pana atunci haideti sa vedem cat de bine stapanim informatiile invatate pana acum!

**Timpul de lucru este de la 14:00 la 16:30. Va rog sa va alegeti minim 3 probleme pe care sa le rezolvati. Daca va ramane timp puteti sa rezolvati mai multe. Daca v-ati blocat la un moment dat, scrieti cu cuvintele voastre ce ar trebui sa faca acel cod care va da batai de cap :-). Fiecare dintre voi are dreptul la 2 hint-uri din partea mea (folositi-le cu cap :-)).**

**Vestea proasta este ca nu vom lua pauza :-(. Cine a terminat testul, il pune pe git si poate parasi camera. Orice update ulterior al repository-ului nu va fi luat in calcul :-).**

**MULT SUCCESS!!!**

# Problema 1
Activati-va pentru cateva minute OCD-ul si formatati scriptul de mai jos :-D. Va rog sa nu folositi niciun tool de autoformatare.
```javascript
function show(message){$('#container').html($('#container').html()+'<br>'+message);}function multiplyChar(char,count){return char.repeat(count);} var word='abcdef';var newWord='';var count;for(var i=word.length-1;i>=0;i--){count=i%2==0?2:3;newWord+=multiplyChar(word[i],count);}show('Initial word: '+word);show('Transformed word: '+newWord);
```

# Problema 2
Se da variabila:
```javascript
var phrase = "The quick brown fox jumps over the lazy dog";
```
Scrieti un script care:
1. sa afiseze primul cuvant;
2. sa afiseze cuvantul al treilea (va rog sa evitati folosirea instructiunii `show('brown');` :-P); Puteti sa alegeti sa parcurgeti fraza cu un `for` sau sa calculati pe rand indecsii la care se afla spatiile de dinainte de cuvant cat si cel de dupa cuvant (vezi `.indexOf()`).
3. sa afiseze ultimul cuvant (incercati sa rezistati tentatiei de a folosi array-uri :-));
4. sa afiseze o noua fraza in care sa inversati in phrase cuvintele `fox` si `dog` (recomand folosirea instructiunii `.replace()`, dar puteti sa folositi si alte metode). **_Hint: pentru a inversa continutul a doua pahare cu lichid este nevoie de un al treilea pahar_** ;-)

# Problema 3
Declarati si initializati o variabila care sa contina un string format doar din litere mici. Scrieti un script care sa parcurga acest string si sa construiasca un nou cuvant inlocuind vocalele cu 0 si consoanele cu 1. Pentru a determina cifra corespunzatoare caracterului curent din sir scrieti o functie care primeste ca parametru caracterul si returneaza 0 sau 1 dupa caz. Se vor lua in considerare doar vocalele din limba engleza, deci fara diacritice.
<pre>pentru var word = 'abcdef' noul cuvant este '011101'</pre>

# Problema 4
Declarati si initializati o variabila care sa contina un text format doar din cifre si litere mici (fara alte caractere!). Scrieti un script care sa determine care este cea mai mica cifra, cea mai mare cifra, cea mai mica litera si cea mai mare litera. Incercati sa aflati cele patru caractere, parcurgand doar o data stringul (optional).

# Problema 5
Se dau variabilele:
```javascript
    var firstNumber = '52987';
    var secondNumber = '48361';
```
Scrieti un script care sa simuleze adunarea celor doua numere fara a le converti la integer. Numerele vor fi tratate ca string. Doar la adunarea cifrelor acestea se vor converti la integer. Presupunem ca cele doua numere au acelasi numar de cifre. Se vor aduna pe rand cifrele de la acelasi index si se va tine cont de transportul de la adunarea cifrelor anterioare. Ca la matematica in a 2-a :-).

# Problema 6
Scrieti o functie care primeste 3 parametrii: o fraza, un cuvant si un numar N. Fraza poate sa contina ",", ";" sau ghilimele dupa, respectiv in jurul cuvintelor cautate. Aceasta functie trebuie sa verifice daca acel cuvant apare de N ori in fraza. Cuvantul cautat trebuie sa fie intreg, nu parte dintr-un alt cuvant (de ex. daca se cauta cuvantul "asta", nu trebuie luat in calcul si cuvantul "astazi").

# Instructiuni si functii Javascript ajutatoare

```javascript
var phrase1 = 'The brown fox jumped ';
var phrase2 = 'over the lazy dog';
var phrase = phrase1 + phrase2 + '!'; // concatenarea stringurilor
phrase[5]; // returneaza 'r', caracterul de pe pozitia 5 din string
phrase.indexOf('h'); // returneaza 1, pozitia pe care gaseste primul caracter 'h'
phrase.indexOf('h', 2); // returneaza 27, pozitia pe care gaseste primul caracter 'h' incepand de la pozitia 2
phrase.lastIndexOf('h'); // returneaza 27, pozitia pe care gaseste ultimul caracter 'h'
phrase.substring(10, 13); // returneaza 'fox', substringul care incepe de la pozitia 10 si se termina la pozitia 12 (pozitia 13 este ignorata)
phrase.replace('the', 'abc'); // returneaza un nou string format din stringul din variabila phrase in care inlocuieste case-sensitive 'the' cu 'abc'
phrase.toUpperCase(); // returneaza stringul din variabila phrase scris cu litere mari
phrase.toLowerCase(); // returneaza stringul din variabila phrase scris cu litere mici
phrase.trim(); // returneaza stringul din variabila phrase din care se trunchiaza (elimina) spatiile de la inceput si de la sfarsit

Math.floor(3.14); // returneaza rotunjirea in jos a numarului; rezultatul este 3
Math.ceil(3.14); // returneaza rotunjirea in sus a numarului; rezultatul este 4
Math.random(); // returneaza un numar aleator intre 0 si 1

var n = 123;
n.toString(); // converteste valoarea variabilei n de la tipul intreg la tipul string; rezultatul o sa fie '123'

var m = '34';
parseInt(n); // converteste valoarea variabilei m de la string la integer; rezultatul o sa fie 34

// -------------------------

if (conditie) {
    // instructiuni care se executa daca dupa evaluare, conditia returneaza valoarea true
}

if (conditie1 && conditie2) {
    // instructiuni care se executa daca cele doua conditii evaluate returneaza valoarea true
}

if (conditie1 || conditie2) {
    // instructiuni care se executa daca cel putin una dintre conditii evaluata returneaza valoarea true
}

// -------------------------

if (conditie) {
    // instructiuni care se executa daca dupa evaluare, conditia returneaza valoarea true
} else {
    // instructiuni care se executa daca dupa evaluare, conditia returneaza valoarea false
}

// -------------------------

for (var i = 0; i < n; i++) {
    // instructiuni care se executa cat timp i este mai mic decat n
}

// -------------------------

function numeFunctie([lista parametrii])
{
    // instructiuni
}

```
