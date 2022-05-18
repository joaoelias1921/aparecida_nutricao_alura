var pacientes = document.querySelectorAll(".paciente");

let tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
});

/*pacientes.forEach((paciente) => {
    paciente.addEventListener("dblclick", () => {
        this.remove();
    });
});*/