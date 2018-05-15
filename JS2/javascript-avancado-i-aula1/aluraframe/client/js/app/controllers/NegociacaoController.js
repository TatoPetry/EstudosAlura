class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
        
    }
   
    
    //metodo adicionar valores a tabela
    adicionar(event){
        event.preventDefault();
       
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        console.log(this._listaNegociacoes.negociacoes);      
        this._limparForm();

    }
    //Método Cria negociacao
    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
     //Método limpar formulário
    _limparForm(){
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.00;
        this._inputData.focus();

    }
  

}