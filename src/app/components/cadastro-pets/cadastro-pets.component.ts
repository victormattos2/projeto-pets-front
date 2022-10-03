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

  providers:[MessageService]

  constructor(private petsService: PetsService,
              private MessageService:MessageService) {

               }

  ngOnInit(): void {
  }


  salvar(){
    this.petsService.save(this.pets).subscribe((response)=>{
      this.MessageService.add({key: 'tst',severity:'succes', summary: 'Sucesso', detail:'Pet Cadastrado'});
      this.pets=new Pets();
    })
  }
  onChangeSituacao(ativo){
    if(ativo.checked){
      this.pets.situacao = 1;
      console.log(this.pets.situacao)
    }else{
      this.pets.situacao = 0;
      console.log(this.pets.situacao)
    }
    }

}
