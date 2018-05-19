//Método para inserir placar
function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var numPalavras = $("#contador-palavras").text();
    var usuario = "Tato";

    var linha = novaLinha(usuario, numPalavras);
    corpoTabela.prepend(linha);
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
    $(this).parent().parent().remove();
}