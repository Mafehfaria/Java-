function calcularimposto(salario){
    let aliquota;
if(salario >=0 && salario <=1100){
return aliquota = 0.05;
}
else if(salario >=1100 && salario <=2500){
return aliquota = 0.01;
}
    if(salario >=2500){
return aliquota = 0.05;
}else{
    return aliquota = 0.15
}
}
const valorSalario = 2000;
const valorBeneficio = 250;
const valorDesconto = calcularImposto(valorSalario) * valorSalario;
const salarioFinal = valorSalario - valorDesconto + valorBeneficio;