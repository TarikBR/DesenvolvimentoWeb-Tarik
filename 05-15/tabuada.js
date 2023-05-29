function calcularTabuada(){
    document.getElementById("res").innerHTML = "";
    tab = eval(document.tabuada.v1.value);

    for(i = 0; i <= 10; i++){;
        document.getElementById("res").innerHTML += tab + " vezes " + i + " é " + (tab*i) + "<br>";
    }
}