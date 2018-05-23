$("#botao-frase-id").click(buscaFrase);
//faz a conexão ajax para buscar o array de objeto
function fraseAleatoria(){
    $("#spinner").toggle();      
    $.get("http://localhost:3000/frases", trocaFraseAleatoria).fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        }, 1500);
    }).always(function(){
        $("#spinner").toggle(); 
    });

}
//Muda a frase sorteando uma nova no objeto buscado
function trocaFraseAleatoria(data){
    
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleatorio].texto);
    atualizarTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);

}
//Faz o ajax e busca uma frase específica pelo id
function buscaFrase(){
    $("#spinner").toggle();      
    var fraseId = $("#frase-id").val();
    var dados = {id : fraseId};
    
    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        }, 2000);
    }).always(function(){
        $("#spinner").toggle(); 
    });
}
//Preenche com texto frase especifica
function trocaFrase(data){
    
    var frase = $(".frase");
    frase.text(data.texto); 
    atualizarTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}