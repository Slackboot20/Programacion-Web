let imprimirArreglo  = (...args) =>{
    for(let dato of args){
      console.log(dato)
    }
  }

console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))