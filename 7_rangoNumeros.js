function contarRango(i, j){
    let  = 0;    
    for (let num1 = i + 1; num1 < j; num1++) {
        contador++;
    }
    return contador;
}

console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0