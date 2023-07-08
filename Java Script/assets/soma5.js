let peso=49
let altura=1.65

let imc = peso/(altura * altura);

if (imc<=18.4) {
    console.log("Magra");
}else if (imc >= 18.5 && imc <=24.9) {
    console.log("Apresenta peso normal");
}else if (imc >= 25 && imc <=29.9) {
    console.log ("Apresenta sobrepeso");
}else if ( imc >=30 && imc <= 34.9) {
    console.log ("Apresenta obesidade grau I");
}else if (imc >=35 && imc <=39.9) {
    console.log ("Apresenta obesidade grau II");
}else{
    console.log ("Apresenta obesidade grau III");
}