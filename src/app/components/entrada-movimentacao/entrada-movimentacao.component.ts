import { ProdutoService } from './../../services/produto.service';
import { MovimentacaoService } from './../../services/movimentacao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Movimentacao } from './../../models/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada-movimentacao',
  templateUrl: './entrada-movimentacao.component.html',
  styleUrls: ['./entrada-movimentacao.component.scss']
})
export class EntradaMovimentacaoComponent implements OnInit {
  movimentacao:Movimentacao=new Movimentacao();
  results: any[];
  ativo: boolean = true

  opcoesTipo = [
    'ENTRADA',
    'SAIDA'
  ]

  providers:[MessageService]

  constructor(protected route: ActivatedRoute,
              private movimentacaoService: MovimentacaoService,
              private router: Router,
              private MessageService:MessageService,
              private produtoService:ProdutoService,) {

               }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id != undefined) {
      this.movimentacaoService.findById(id).subscribe((response) => {
        console.log(response);
        this.movimentacao = response as Movimentacao;
      })
    }
  }
  salvar(){
    this.movimentacaoService.save(this.movimentacao).subscribe((response)=>{
      this.MessageService.add({key: 'tst',severity:'success', summary: 'Sucesso', detail:'Entrada Cadastrada'});
      this.movimentacao = new Movimentacao();
       this.voltar(); 
    })
  }

  searchproduto(event) {
    this.produtoService.filtrar(event.query).then((data : any[]) => {
        this.results = data;
    });
}
  voltar(){
    this.router.navigate(['consulta-movimentacao']);
  }

  
}