var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function(){
    atualizaPlacar();
    fraseAleatoria();    
    atualizarTamanhoFrase();
    inicializarContadores();
    contagemTempo();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
    $("#botao-placar").click(mostraPlacar);
    $("#botao-frase").click(fraseAleatoria);
});

//Método atualizar tamanho da frase
function atualizarTamanhoFrase(){
    
    var frase = $('.frase').text();
    var numPalavras = frase.split(' ').length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}


//Método para atualizar palavras e caracteres
function inicializarContadores(){
    campo.on("input", function(){
    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);
    
    var conteudoSemEspaco = conteudo.replace(/\s+/g,'');
    var qtdCaracteres = conteudoSemEspaco.length;
    $("#contador-caracteres").text(qtdCaracteres);
    });

}

//Método de contagem de tempo
function contagemTempo(){

    
    campo.one("focus", function(){
        var tempoRestante = tempoInicial;
       var cronometroID = setInterval(function(){
           tempoRestante--;
           $("#tempo-digitacao").text(tempoRestante);
           $("#botao-reiniciar").attr("disabled", true);
           if(tempoRestante < 1){
               campo.attr("disabled", true);
               clearInterval(cronometroID);
               $("#botao-reiniciar").attr("disabled", false);
               campo.toggleClass("campo-desativado");
               inserePlacar();
           }
    
       }, 1000);
    });
}

//Método reiniciar jogo
function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    contagemTempo();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
}

//Método que coloca marcadores de acordo com desempenho do jogador
function inicializaMarcadores(){
    
    campo.on("input", function(){
        var frase = $(".frase").text();
        var digitado = campo.val();
        var comparavel = frase.substr(0 , digitado.length);
        if(comparavel == digitado){
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
       
    });

}
//Método atualiza tempo de cada frase
function atualizaTempoInicial(tempo) {
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}
