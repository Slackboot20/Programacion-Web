function contrasenaValida(a){
    if (a === "2Fj(jjbFsuj" || a === "eoZiugBf&g9"){
        return true;
    }else{
        return false;
    }
}

console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("")) // false