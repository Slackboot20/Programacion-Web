function bmi (peso, altura){
    let bmi = peso /= altura^=2;
  if (bmi < 18.5)
        return 'bajo de peso';
    else if (bmi >= 18.5 && bmi <= 24.9)
        return 'normal';
    else if(bmi >= 25 && bmi <= 29.9)
        return 'sobrepeso';
    else (bmi >= 30)
        return 'obeso';
}

console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso" 