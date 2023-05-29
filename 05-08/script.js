function calc(typ){
    if(typ == '+') document.prova.c4.value= eval(document.prova.c1.value) + eval(document.prova.c2.value) + eval(document.prova.c3.value);
    else if(typ == '-') document.prova.c4.value= eval(document.prova.c1.value) - eval(document.prova.c2.value) - eval(document.prova.c3.value); 
    else if(typ == '*') document.prova.c4.value= eval(document.prova.c1.value) * eval(document.prova.c2.value) * eval(document.prova.c3.value);
    else if(typ == '/') document.prova.c4.value= eval(document.prova.c1.value) / eval(document.prova.c2.value) / eval(document.prova.c3.value);
}