import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ClienteService } from './../../services/cliente.service';
import { Cliente, Logradouro } from './../../models/model';
import { Component, OnInit } from '@angular/core';
import { isValidCPF } from '../valida-cpf';
import { cnpjValidation } from '../valida-cnpj';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {
cliente: Cliente=new Cliente();

logradouro: Logradouro=new Logradouro();

ativo: boolean;
email: any;
providers: [MessageService]

constructor(protected Router: ActivatedRoute,
            private clienteService: ClienteService,
            private messageService: MessageService,
            private router: Router){ 

}

validacnpj(texto): boolean {
  return cnpjValidation(texto)

  
}

validacpf(valida): boolean {
  return isValidCPF(valida)
}

  ngOnInit(): void {
    this.cliente.id_cliente = null;
    this.cliente.cli_fisica_juridica = '0';
    this.cliente.enderecos= new Array<Logradouro>();
    this.onChangeSituacao();

    const id = this.Router.snapshot.params['id'];
    if (id != undefined) {
      this.clienteService.findById(id).subscribe((response) => {
        console.log(response);
        this.cliente = response as Cliente;
         this.logradouro = this.cliente.enderecos[0];
        
      })
    }
  }

  salvar(){
    this.adicionaEndereco();
    this.clienteService.save(this.cliente).subscribe((response)=>{
      this.messageService.add({ key: 'tst', severity: 'success', summary: 'Sucesso', detail: 'Cliente cadastrado' });
       window.location.reload();
    })
    }

    adicionaEndereco(){
      this.cliente.enderecos = [];
      this.cliente.enderecos.push(this.logradouro);
      
    }
   validaEmail(email){

      return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
  }

    onChangeSituacao(){
      if(this.ativo==true){
        this.ativo=false;
       
      }else{
        this.ativo=true
      }
      this.cliente.situacao=Number(this.ativo);
    }
      
  }

  



