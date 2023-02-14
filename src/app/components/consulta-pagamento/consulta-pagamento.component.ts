import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { PagamentoService } from './../../services/pagamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-pagamento',
  templateUrl: './consulta-pagamento.component.html',
  styleUrls: ['./consulta-pagamento.component.scss']
})
export class ConsultaPagamentoComponent implements OnInit {

  pagamento:any[] = [];
  providers: [MessageService]

  constructor(private pagamentoService: PagamentoService, private router: Router,
              private messageService:MessageService) { 
  }

  ngOnInit(): void {
    this.findall();
  }

  findall(){
    this.pagamentoService.findall().subscribe((response:any[])=>{
      this.pagamento = response;
    })
  }

  novo(){
    this.router.navigate(['cadastro-pagamento'])
  }

  editar(id){
    this.router.navigate([`cadastro-pagamento/${id}`]);
  }

  deletar(id){
    this.pagamentoService.deletar(id).subscribe(()=>{
      this.findall();
    })
  }

}
