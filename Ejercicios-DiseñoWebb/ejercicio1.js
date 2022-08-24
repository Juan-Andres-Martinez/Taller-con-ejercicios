'use strict';
let num1;
let num2;
num1=parseFloat(prompt("Ingrese un número"));
num2=parseFloat(prompt("Ingrese un número"));
function suma (num1,num2){
    return num1 + num2;
}
function resta (num1,num2){
    return num1 - num2;
}
function multiplicacion (num1,num2){
    return num1 * num2;
}
function division (num1,num2){
    return num1 / num2;
}
function operacionesB(suma, resta, multiplicacion, division){
    alert("El valor de la suma es:"+suma, "el valor de la resta es:"+resta,"el valor de la multiplicacion es:"+multiplicacion, "el valor de la division es:"+ division);
    console.log("El valor de la suma es:"+suma, "el valor de la resta es:"+resta,"el valor de la multiplicacion es:"+multiplicacion, "el valor de la division es:"+ division)
    return "El valor de la suma es:"+suma, "el valor de la resta es:"+resta,"el valor de la multiplicacion es:"+multiplicacion, "el valor de la division es:"+ division;
}



