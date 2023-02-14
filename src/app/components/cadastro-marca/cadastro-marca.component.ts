import { ActivatedRoute } from '@angular/router';
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

  constructor(protected Router: ActivatedRoute,
              private MarcaService: MarcaService,
              private MessageService:MessageService) {

               }

  ngOnInit(): void {
    const id = this.Router.snapshot.params['id'];
    if (id != undefined) {
      this.MarcaService.findById(id).subscribe((response) => {
        console.log(response);
        this.marca = response as Marca;
      })
    }
  }

  salvar(){
    this.MarcaService.save(this.marca).subscribe((response)=>{
      this.MessageService.add({key: 'tst',severity:'success', summary: 'Sucesso', detail:'Marca cadastrada'});
      this.marca=new Marca();
    })
  }

}
