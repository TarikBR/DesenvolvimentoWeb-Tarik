function getConceito(n1, n2, n3, n4){
    med = (n1 + n2 + n3 + n4) / 4;

    if(med >= 90) return "A";
    else if(med >= 70) return "B";
    else if(med >= 50) return "C";
    return "D"
}

function setConceito(){
    document.calculaConceito.conceito.value = getConceito(
        eval(document.calculaConceito.n1.value), 
        eval(document.calculaConceito.n2.value), 
        eval(document.calculaConceito.n3.value), 
        eval(document.calculaConceito.n4.value))
}