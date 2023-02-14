import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.scss']
})
export class ConsultaClienteComponent implements OnInit {
  
  clientes: any[] = [];

  constructor(private clienteService: ClienteService,
              private router: Router,
              private messageService:MessageService) { 
  }

  novo(){
    this.router.navigate(['cadastro-cliente'])
  }

  editar(id){
    this.router.navigate([`cadastro-cliente/${id}`]);
  }

  deletar(id){
    this.clienteService.deletar(id).subscribe(()=>{
      this.findall();
    })
  }
  teste(){
    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Sucesso', detail: 'Pagamento Eliminado' });
  }

  ngOnInit(): void {
    this.findall();
  }

  findall(){
    this.clienteService.findall().subscribe((response:any[])=>{
      this.clientes = response;
    })
  }
}
