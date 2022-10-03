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

  constructor(private produtoService: ProdutoService,
    private MessageService:MessageService,
    private marcaService:MarcaService) {

     }

     ngOnInit(): void {
    }
    salvar(){
      this.produtoService.save(this.produto).subscribe((response)=>{
        this.MessageService.add({key: 'tst',severity:'succes', summary: 'Sucesso', detail:'Produto Cadastrado'});
      })
    }
    search(event) {
      this.marcaService.filtrar(event.query).then((data : any[]) => {
          this.results = data;
      });
  }

}



