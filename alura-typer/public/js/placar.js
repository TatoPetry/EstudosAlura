$("#botao-sync").click(sincronizaPlacar);


//Método para inserir placar
function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var numPalavras = $("#contador-palavras").text();
    var usuario = "Tato";

    var linha = novaLinha(usuario, numPalavras);
    corpoTabela.prepend(linha);
    $(".placar").slideDown(500);
    scrollPlacar();
    linha.find(".botao-remover").click(removeLinha);
    
}
//Método cria nova linha da tabela
function novaLinha(usuario, palavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").attr("href", "#").addClass("botao-remover");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);
         
    return linha;
}

//Método Remover linha
function removeLinha(event){
    event.preventDefault();
    var linha = $(this).parent().parent();    
    
    linha.fadeOut(1000);
    setTimeout(function(){
        linha.remove();

    }, 1000);
}

//Método mostrar placar
function mostraPlacar(){
    $(".placar").slideToggle(600);
}

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;
    
    $("body").animate(
        {
            scrollTop: posicaoPlacar + "px"
        }, 1000);
}

function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();

        var score = {
            usuario: usuario,
            pontos: palavras            
        };

        placar.push(score);
    });
    
    var dados = {
        placar: placar
    };

    $.post("http://localhost:3000/placar", dados, function(){
        console.log("Placar sincronizado com sucesso");
    });
}

function atualizaPlacar(){
    $.get("http://localhost:3000/placar",function(data){
        $(data).each(function(){
            var linha = novaLinha(this.usuario, this.pontos);

            linha.find(".botao-remover").click(removeLinha);

            $("tbody").append(linha);
        });
    });
}
