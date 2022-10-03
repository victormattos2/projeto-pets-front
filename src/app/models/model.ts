export class Pets {
    public id_pets : number;
    public nome : string;
    public raca: string;
    public Cor : string;
    public sexo: string;
    public especie: string;
    public peso: number;
    public situacao: number;
    public data_cadastro: Date;
    public data_nascimento: Date;
    public tutor: string;

}

export class Pedido{
    public id_pedido: number;
    public id_pagamento: number;
    public cliente: string;
    public situacao: string;
    public data_emissao: string;
    public data_vencimento: string;
    public valor_total: number; 
    public obs: string;
    itens =  new Array<ItemPedido>();

}

export class ItemPedido {
    public id: number;
    public sequencia: number;
    public produto: string;
    public valor_unitario: number;
    public quantidade: number;
    public valor_total: number;
    public situacao: string;


}


export class Cliente {
    public idcliente: number;
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
    

}
export class Logradouro {
    public logradouro: string;
    public numero: string;
	public bairro: string;
	public cep: string;
	public complemento: string;
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
  }

export class Usuario{
    public id_usuario : string;
    public nome_usuario : string;
    public senha : string;
    public tipo : string;
    public situacao : string; 
}







