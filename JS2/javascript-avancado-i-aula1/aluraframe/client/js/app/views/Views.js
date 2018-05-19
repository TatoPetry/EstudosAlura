class Views{
    constructor(elemento){
       this._elemento = elemento;
    }

    template(){
        throw new Error("este é um método abstrato, sobrescreva nas classes view");
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}