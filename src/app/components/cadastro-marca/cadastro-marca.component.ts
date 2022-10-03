import { MarcaService } from './../../services/marca.service';
import { Marca } from './../../models/model';
import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-marca',
  templateUrl: './cadastro-marca.component.html',
  styleUrls: ['./cadastro-marca.component.scss']
})
export class CadastroMarcaComponent implements OnInit {
  marca:Marca=new Marca();

  providers:[MessageService]

  constructor(private MarcaService: MarcaService,
              private MessageService:MessageService) {

               }

  ngOnInit(): void {
  }
  salvar(){
    this.MarcaService.save(this.marca).subscribe((response)=>{
      this.MessageService.add({key: 'tst',severity:'succes', summary: 'Sucesso', detail:'Marca cadastrada'});
    })
  }

}
