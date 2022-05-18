let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);

    if(!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValida && pesoEhValido) {
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000) {
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.00) {
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso/(altura*altura);

    return imc.toFixed(2);
}