import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.scss']
})
export class ConsultaClienteComponent implements OnInit {
  
  clientes:any;

  constructor(private clienteService: ClienteService) { 
  }
  deletar(id){
    this.clienteService.deletar(id).subscribe(()=>{
      this.findall();
    })
  }

  ngOnInit(): void {
    this.findall();
  }

  findall(){
    this.clienteService.findall().subscribe((response)=>{
      this.clientes = response;
    })
  }
}
