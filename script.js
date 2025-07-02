for(let i = 1; i <= 100; i++){
    //dichiarazioni valori per vedere se sono divisibili per 3, o per 5, o per entrambi
    let divisore_3 = false;
    let divisore_5 = false;
    let divisore_3_e_5 = false;

    //SE IL VALORE DI I E DIVISIBILE PER 3, ALLORA
    if (i % 3 == 0){
        //DIVISIBILE PER 3
        divisore_3 = true;

    }
    //SE IL VALORE DI I E DIVISIBILE PER 5, ALLORA
    if (i % 5 == 0){

        //SE IL VALORE E ANCHE DIVISIBILE PER 3, ALLORA
        if (divisore_3){
            divisore_3 = false;
            //DIVISIBILE PER 3 E PER 5
            divisore_3_e_5 = true
        }

        //ALTRIMENTI E SOLO DIVISIBILE PER 5
        else{
            divisore_5 = true
        }
    }

    //se sappiamo che è divisibile per 3, scrive il console "Fizz"
    if(divisore_3) { 
        console.log("Fizz") 
    }
    //altrimenti se sappiamo che è divisibile per 5, scrive il console "Buzz"
    else if (divisore_5) { 
        console.log("Buzz") 
    }
    //altrimenti se sappiamo che è divisibile per 3 e per 5, scrive il console "FizzBuzz"
    else if (divisore_3_e_5) { 
        console.log("FizzBuzz") 
    }
    //altrimenti scriviamo in console il contenuto di i
    else{
        console.log(i)
    }
}