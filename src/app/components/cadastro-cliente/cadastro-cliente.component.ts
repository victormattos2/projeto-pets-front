import { MessageService } from 'primeng/api';
import { ClienteService } from './../../services/cliente.service';
import { Cliente } from './../../models/model';
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
ativo: boolean;

providers: [MessageService]

constructor(private clienteService: ClienteService,
            private messageService: MessageService){ 

}

validacnpj(texto): boolean {
  return cnpjValidation(texto)

  
}

validacpf(valida): boolean {
  return isValidCPF(valida)
}


  ngOnInit(): void {
    this.cliente.cli_fisica_juridica = '0';
    this.onChangeSituacao();
  }

  salvar(){
    this.clienteService.save(this.cliente).subscribe((response)=>{
      this.messageService.add({ key: 'tst', severity: 'success', summary: 'Sucesso', detail: 'Cliente cadastrado' });
    })
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

  



