function imc(peso,altura){
    const resultado = peso / (altura * altura)
if (resultado < 18.5){
    return`Seu imc (${resultado}) apresenta magreza`;
}else if ( resultado >= 18.5 && imc <=24.9){
    return`Seu imc(${resultado}) apresenta normalidade`;
}else if ( resultado >= 25 && imc <=29.9){
    return`Seu imc(${resultado}) apresenta sobrepeso`;
}else if ( resultado >= 30 && imc <=34.9){
    return`Seu imc(${resultado}) apresenta densidade grau |`;
}else if ( resultado >= 35 && imc <=39.9){
    return`Seu imc(${resultado}) apresenta densidade grau ||`;
}
else{ 
    return`Seu imc (${resultado}) apresenta densidade grau |||`
}
}