import { NumberValueAccessor } from "@angular/forms";

export class Pets {
    public id_pets : number;
    public nome : string;
    public raca: string;
    public cor : string;
    public sexo: string;
    public especie: string;
    public peso: number;
    public situacao: number = 1;
    public data_cadastro: Date;
    public data_nascimento: Date;
    
    public tutor: Cliente;

}

export class Pedido{
    public id_pedido: number;
    public id_pagamento: number;
    public cliente: string;
    public situacao: string;
    public data_emissao: Date = new Date();
    public data_vencimento: Date;
    public valor_total: number; 
    public obs: string;
    public sequencia: number;

    itempedidos =  new Array<ItemPedido>();
    pagamentopedido = new Array <Pagamentopedido>();

}

export class Pagamentopedido {
    public id_pagamentopedido: number;
    public numero_parcela: number;
    public valor_parcela: number;
    public data_vencimento: Date;

}

export class ItemPedido {
    public id: number;
    public sequencia: number;
    public produto: string;
    public valor_unitario: number;
    public quantidade: number;
    public valor_total: number;
}

export class Cliente {
    public id_cliente: number;
    public nome: string;
    public situacao: number = 1;
    public email: string;
	public cpf: string;
    public cnpj: string;
	public rg: string;
	public telefone: string;
	public data_cadastro: Date;
	public data_nascimento: Date;	
	
	public numero: string;
	public complemento: string;
	public bairro: string;
	public cep: string;
    public cli_fisica_juridica: string;
    public fantasia: string;
    public cli_inscricao: string;

    public enderecos: Logradouro[];

}

export class Logradouro {
    public id_endereco: number;
    public id_cliente: number;
    public logradouro: String;
    public numero: string;
	public bairro: string;
	public cep: string;
	public complemento: string;

    public cidade: Cidade;
}


export class Marca {
    public id_marca: number;
    public nome: string;
    public observacao: string;
}



export class Cor {
    public id_cor: number;
    public nome: string;
}


export class Pais {
    public id_pais: number;
    public nome: string;
    public sigla: string;
  }
  
  
export class Estado {
    public id_estado: number;
    public pais: Pais;
    public nome: string;
    public uf: string;
    public codigoibge: string;
  }
  
export class Cidade {
    public id_cidade: number;
    public estado: Estado;
    public pais: Pais;
    public nome: string;
    public codigoibge: string;
  }

export class Produto {
    public id_produto: number;
    public nome: string;
    public unidade: number;
    public grupo: string;
    public marca: Marca;
    public quantidade: number;
    public flagservico: number = 0;
  }

export class Usuario{
    public id_usuario : number;
    public login : string;
    public senha : string;
    public tipo : string;
    public situacao: number;
}

export class Movimentacao {
    public id_movimentacao: number;
    public produto : Produto;
    public data_movimentacao : Date;
    public quantidade_mov : number;
    public quantidade_anterior: number;
    public quantidade_posterior: number;
    public tipo_movimentacao: string;
}

export class Pagamento {
    public id_pagamento : number;
    public nome : string;
    public modo : string;
    public situacao: number ;

 }
 export class Agendamento {
    public id_agendamento : number;
    public data_hora : Date;
    public tipo_servico : string; 
    public pets : Pets;
 }
 
 export class Relatorio {


 }






