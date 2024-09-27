export class Cliente {
    id:string;
    nome:string;
    data_nasc:string;
    ativo:boolean;
    address:string[];
    contatos:string[]; //min length == 1

    constructor(id:string,nome:string,data_nasc:string,ativo:boolean,address:string[],contatos:string[]){
        this.id = id;
        this.nome = nome;
        this.data_nasc = data_nasc;
        this.ativo = ativo;
        this.address = address;
        this.contatos = contatos
    }
}