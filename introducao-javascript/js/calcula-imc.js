var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var imcTd = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        imcTd.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        imcTd.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        imcTd.textContent = imc;
    }
}
//Função calcula IMC
function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
//Função para validação do peso
function validaPeso(peso){
    if(peso > 0 && peso < 1000){
        return true;
    } else {
        return false;
    }

}
//Função para validação altura
function validaAltura(altura){
    if(altura > 0 && altura <= 3.0){
        return true;
    } else {
        return false;
    }

}
//Função para validar paciente
function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("Campo nome está vazio!");  
    }

    if(paciente.gordura.length == 0){
        erros.push("Campo gordura está vazio!");
    }

    if(paciente.peso.length == 0){
        erros.push("Campo peso está vazio!");
    }

    if(paciente.altura.length == 0){
        erros.push("campo altura está vazio!")
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso Inválido!")
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida!")
    }

    return erros;
}