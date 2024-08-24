console.log("Hola chicas");

let lista = [];
//console.log(lista);

lista[0]=2;
lista[1]=5;
lista[2]=7;
lista[3]=11;
lista[4]=20;
lista[5]="hola";
lista[6]=true;
lista[15]="soy el ultimo";
//console.log(lista);


//console.log(lista [2]);
//console.log(lista[0]);

//lista[3]=15;
//console.log(lista);
//console.log(lista[3]);

//let contador=0
//while (contador < lista.length) {
    //console.log(lista[contador]);
    //contador = contador +1;
//}


for (let index = 0; index < lista.length; index++){
    console.log(lista[index]);
    
}



function conversorDeGrados(valor) {
    if (valor >100 || valor <0) {
        return ("PUNTUACION INVALIDA")
    } else if (valor >=90){
        return ("A")
    } else if (valor >=80){
        return ("B")
    } else if (valor >=70){
        return ("C")
    } else if (valor >=60){
        return ("D")
    }else{
        return("F");
    }
    
}

let resultado = conversorDeGrados(75);
console.log(resultado);

