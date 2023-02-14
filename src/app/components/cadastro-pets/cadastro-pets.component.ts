import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from './../../services/cliente.service';
import { PetsService } from './../../services/pets.service';
import { Pets } from './../../models/model';

import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-pets',
  templateUrl: './cadastro-pets.component.html',
  styleUrls: ['./cadastro-pets.component.scss']
})
export class CadastroPetsComponent implements OnInit {
  pets:Pets=new Pets();
  ativo: boolean;
  results: any[];


  providers:[MessageService]

  constructor(protected Router: ActivatedRoute,
              private petsService: PetsService,
              private messageService:MessageService,
              private clienteService: ClienteService,
              private router: Router) {
                
               }

 /*  ngOnInit(): void {
    this.onChangeSituacao();
  } */
  ngOnInit(): void {
    const id = this.Router.snapshot.params['id'];
    if (id != undefined) {
      this.petsService.findById(id).subscribe((response) => {
        console.log(response);
        this.pets = response as Pets;
      })
    }
  }

  voltar(){
    this.router.navigate(['consulta-pets']);
  }

  search(event) {
    this.clienteService.filtrar(event.query).then((data : any[]) => {
        this.results = data;
    });
}

  salvar(){
    this.petsService.save(this.pets).subscribe((response)=>{
      this.messageService.add({key: 'tst',severity:'success', summary: 'Sucesso', detail:'Pet Cadastrado'});
      this.pets=new Pets();
    })
  }
  
  onChangeSituacao(){
      if(this.ativo==true){
         this.ativo=false;
       
     }else{
         this.ativo=true
          }
      this.pets.situacao=Number(this.ativo);
    }

}
