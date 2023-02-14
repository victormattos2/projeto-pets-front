import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-produtos',
  templateUrl: './consulta-produtos.component.html',
  styleUrls: ['./consulta-produtos.component.scss']
})
export class ConsultaProdutosComponent implements OnInit {
  

  produto: any[] = [];

  providers: [MessageService]

  constructor(private produtoService: ProdutoService,
    private router: Router,
    private messageService: MessageService) { 
  }

  ngOnInit(): void {
    this.findall();
  }

  findall(){
    this.produtoService.findall().subscribe((response: any[])=>{
      this.produto = response;
    })
  }
  
  novo(){
    this.router.navigate(['cadastro-produtos'])
  }

  editar(id){
    this.router.navigate([`cadastro-produtos/${id}`]);
  }

  deletar(id){
    this.produtoService.deletar(id).subscribe(()=>{
      this.findall();
    })
  }
  teste(){
    this.messageService.add({ key: 'tst', severity: 'error', summary: 'Sucesso', detail: 'Pagamento Eliminado' });
  }
}


