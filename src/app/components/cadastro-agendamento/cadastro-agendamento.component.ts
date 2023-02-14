import { AgendamentoService } from './../../services/agendamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Agendamento } from './../../models/model';
import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-cadastro-agendamento',
  templateUrl: './cadastro-agendamento.component.html',
  styleUrls: ['./cadastro-agendamento.component.scss']
})
export class CadastroAgendamentoComponent implements OnInit {

  agendamento:Agendamento=new Agendamento();
  ativo: boolean;
  results: any[];


  providers:[MessageService]

  constructor(protected Router: ActivatedRoute,
              private agendamentoService: AgendamentoService,
              private messageService:MessageService,
              private petsService: PetsService,
              private router: Router) {
                
               }

  
  ngOnInit(): void {
    const id = this.Router.snapshot.params['id'];
    if (id != undefined) {
      this.petsService.findById(id).subscribe((response) => {
        console.log(response);
        this.agendamento = response as Agendamento;
      })
    }
  } 
  
  voltar(){
    this.router.navigate(['consulta-agendamento']);
  }

  search(event) {
    this.petsService.filtrar(event.query).then((data : any[]) => {
        this.results = data;
    });
}

  salvar(){
    this.agendamentoService.save(this.agendamento).subscribe((response)=>{
      this.messageService.add({key: 'tst',severity:'success', summary: 'Sucesso', detail:'Agendamento Cadastrado'});
      this.agendamento=new Agendamento();
    })
  }
  
}