import { VendaService } from './../../services/venda.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-venda',
  templateUrl: './consulta-venda.component.html',
  styleUrls: ['./consulta-venda.component.scss']
})
export class ConsultaVendaComponent implements OnInit {

  venda: any[] = [];

  providers: [MessageService]

  constructor( private VendaService: VendaService,
               private router: Router,
               private messageService: MessageService) { 
  }

  ngOnInit(): void {
     this.findall(); 
  }

  findall(){
    this.VendaService.findall().subscribe((response:any[])=>{
      this.venda = response;
      
    })
  }

  novo(){
    this.router.navigate(['lancamento-venda'])
  }

  editar(id){
    this.router.navigate([`lancamento-venda/${id}`]);
  }
 
  deletar(id){
    this.VendaService.deletar(id).subscribe(()=>{
      this.findall();
    })
  }
 
}
