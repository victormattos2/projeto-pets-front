import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-produtos',
  templateUrl: './consulta-produtos.component.html',
  styleUrls: ['./consulta-produtos.component.scss']
})
export class ConsultaProdutosComponent implements OnInit {
  
  produtos:any;

  constructor(private produtoService: ProdutoService) { 
  }

  ngOnInit(): void {
    this.findall();
  }

  findall(){
    this.produtoService.findall().subscribe((response)=>{
      this.produtos = response;
    })
  }
}


