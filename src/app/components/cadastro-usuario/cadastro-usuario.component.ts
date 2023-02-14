import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
import { MessageService } from 'primeng/api';
import { Usuario } from './../../models/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
  usuario:Usuario=new Usuario();
  ativo: boolean;
  results: any[];

  providers:[MessageService]

  constructor(protected Router: ActivatedRoute,
              private usuarioService: UsuarioService,
              private messageService:MessageService,
              private router: Router) {

               }

  ngOnInit(): void {
    const id = this.Router.snapshot.params['id'];
    if (id != undefined) {
      this.usuarioService.findById(id).subscribe((response) => {
        console.log(response);
        this.usuario = response as Usuario;
      })
    }
  }

  search(event) {
    this.usuarioService.filtrar(event.query).then((data : any[]) => {
        this.results = data;
    });
}

  salvar(){
    this.usuarioService.save(this.usuario).subscribe((response)=>{
      this.messageService.add({key: 'tst',severity:'success', summary: 'Sucesso', detail:'Usuario Cadastrado'});
      this.usuario=new Usuario();
    })
  }
  

  onChangeSituacao(){
    this.ativo = !this.ativo;
    this.usuario.situacao=Number(this.ativo);
    console.log(this.ativo);
  }

}
