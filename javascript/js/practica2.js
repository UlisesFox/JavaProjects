'use strict'
var pago = true;
if(pago==true){
    console.log("Aprovado");
}else{
    console.log("No aprovado");
}

opc = 1;
switch(opc){
    case 1:
        console.log("Registrar");
    break;

    case 2:
        console.log("Mostrar");
    break;

    case 3:
        console.log("Buscar");
    break;

    default:
        console.log("la opcion no se encontro");
    break;
}