import { ActivatedRoute, Router } from '@angular/router';
import { MarcaService } from './../../services/marca.service';
import { Produto } from './../../models/model';
import { ProdutoService } from './../../services/produto.service';
import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss']
})
export class CadastroProdutosComponent implements OnInit {
  produto:Produto=new Produto();
  
  providers:[MessageService]
  results:any[]

  constructor(
    protected Router: ActivatedRoute,
    private produtoService: ProdutoService,
    private MessageService:MessageService,
    private marcaService:MarcaService,
    private router: Router) {

     }

     ngOnInit(): void {
      const id = this.Router.snapshot.params['id'];
      if (id != undefined) {
        this.produtoService.findById(id).subscribe((response) => {
          console.log(response);
          this.produto = response as Produto;
        })
      }
    }

    salvar(){
      this.produtoService.save(this.produto).subscribe((response)=>{
        this.MessageService.add({key: 'tst',severity:'success', summary: 'Sucesso', detail:'Produto Cadastrado'});
        this.produto=new Produto();
      })
    }
    search(event) {
      this.marcaService.filtrar(event.query).then((data : any[]) => {
          this.results = data;
      });
  }

}



