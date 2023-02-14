import { Router } from '@angular/router';
import { MovimentacaoService } from './../../services/movimentacao.service';
import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-movimentacao',
  templateUrl: './consulta-movimentacao.component.html',
  styleUrls: ['./consulta-movimentacao.component.scss']
})
export class ConsultaMovimentacaoComponent implements OnInit {

  movimentacao:any[] = [];
  providers: [MessageService]

  constructor(private movimentacaoService: MovimentacaoService, private router: Router,
              private messageService:MessageService) { 
  }

  ngOnInit(): void {
    this.findall();
  }

  findall(){
    this.movimentacaoService.findall().subscribe((response:any[])=>{
      this.movimentacao = response;
    })
  }

  novo(){
    this.router.navigate(['entrada-movimentacao'])
  }

  editar(id){
    this.router.navigate([`entrada-movimentacao/${id}`]);
  }

  deletar(id){
    this.movimentacaoService.deletar(id).subscribe(()=>{
      this.findall();
    })
  }

}
