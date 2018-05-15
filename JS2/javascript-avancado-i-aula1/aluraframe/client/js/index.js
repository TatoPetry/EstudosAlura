var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
]
var tbody = document.querySelector('table tbody');

document.querySelector(".form").addEventListener('submit', function(event){
    event.preventDefault();
    //cria tr
    var tr = document.createElement("tr");
    //Criação td
    campos.forEach(function(campo){
        var td = document.createElement("td");
        td.textContent = campo.value;
        tr.appendChild(td);

    });
    //criação td volume e apuração valor.
    var tdVolume = document.createElement("td");
        tdVolume.textContent = campos[1].value * campos[2].value;
        tr.appendChild(tdVolume);

    //Inserindo no HTML
    tbody.appendChild(tr);    

    //Zerando campos
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();

});
