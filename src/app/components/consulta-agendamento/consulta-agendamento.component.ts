import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AgendamentoService } from './../../services/agendamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-agendamento',
  templateUrl: './consulta-agendamento.component.html',
  styleUrls: ['./consulta-agendamento.component.scss']
})
export class ConsultaAgendamentoComponent implements OnInit {

  
  agendamento: any[] = [];

  providers: [MessageService]

  constructor( private AgendamentoService: AgendamentoService,
               private router: Router,
               private messageService: MessageService) { 
  }

  ngOnInit(): void {
     this.findall(); 
  }

  findall(){
    this.AgendamentoService.findall().subscribe((response:any[])=>{
      this.agendamento = response;
      
    })
  }

  novo(){
    this.router.navigate(['cadastro-agendamento'])
  }

  editar(id){
    this.router.navigate([`cadastro-agendamento/${id}`]);
  }
 
  deletar(id){
    this.AgendamentoService.deletar(id).subscribe(()=>{
      this.findall();
    })
  }
 
}