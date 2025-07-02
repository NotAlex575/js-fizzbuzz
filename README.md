Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz

Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare,
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano",

Fate sempre il file README.md prima di cominciare a lavorare e scomponete il problema in sotto problemi.
Numero minimo di push: 5

____________________________________________________________________________________________________________________

costruzione del codice




1 inizializziamo un ciclo for che va da 1 a 100 (che ha come contatore i, dove continuerà ad incrementarsi di valore (i++) finche non sarà un valore maggiore di 100)
  <!--FOR-->
  1.1 stabilisco tre valori booleani (divisore_di_3 -> divisibile per 3, divisore_di_5 -> divisibile per 5, divisore_di_3_e_5 -> divisibile per entrambi) = false 
  e ci serviranno poi per fare i print del risultato (Fizz per i divisibili di 3, Buzz per i divisibili di 5, FuzzBuzz per entrambi) 
  2.2 ? se il valore di i è divisibile per 3 (qui si usa % per vedere se il risultato ha come risultato == il resto(i%3 == 0 -> ha il resto uguale a 0)), allora

    2.2.1 settiamo divisore_di_3 true

  2.3 altrimenti se il valore di i è divisibile per 5, allora

    2.3.1 ?se il valore booleano di divisore_di_3 è true, allora

      2.3.1.1 settiamo divisore_di_3 false

      2.3.1.2 settiamo divisore_di_3_e_5 true

    2.3.2 altrimenti

      2.3.2.1 settiamo divisore_di_5 true
    
  2.4 ? se divisore_di_3 è true, allora scrivi Fizz
  2.5 altrimenti se divisore_di_5 è true, allora scrivi Buzz
  2.6 altrimenti se divisore_di_3_e_5 è true, allora scrivi BuzzFizz
  2.7 altrimenti scrivi il valore di i
  <!--FINE FOR-->

3 end






