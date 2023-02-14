import { Router } from '@angular/router';
import { PagamentoService } from './../../services/pagamento.service';
import { ProdutoService } from './../../services/produto.service';
import { ClienteService } from './../../services/cliente.service';
import { Pedido, ItemPedido, Produto, Pagamento, Pagamentopedido } from './../../models/model';
import { VendaService } from './../../services/venda.service';
import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-venda',
  templateUrl: './lancamento-venda.component.html',
  styleUrls: ['./lancamento-venda.component.scss']
})
export class LancamentoVendaComponent implements OnInit {
pedido: Pedido=new Pedido();
itempedido: ItemPedido=new ItemPedido();
providers: [MessageService]
results: any[];
listapagamento: any[];
pagamento: Pagamento;
quantidade_parcelas=1;
pagamentoEdicao: any = {};
display = false;

constructor(private vendaService: VendaService,
            private messageService: MessageService,
            private clienteService: ClienteService,
            private produtoService: ProdutoService,
            private router: Router,
            private pagamentoService:PagamentoService) { 
              this.pagamentoService.findall().subscribe((response: any[]) =>{
                this.listapagamento = response;
              })

              
}

  ngOnInit(): void {
  }

  salvar(){
    this.vendaService.save(this.pedido).subscribe((response)=>{
      this.messageService.add({ key:'tst', severity:'success', summary:'Sucesso', detail:'Venda Finalizada :)' });
      this.pedido=new Pedido();
    })
    }

    adicionar(){
      
    }
    salvarvencimento(){
      const nrPagamento = this.pagamentoEdicao.numero_parcela;
      let index = this.pedido.pagamentopedido.findIndex((obj => obj.numero_parcela == nrPagamento));
      this.pedido.pagamentopedido[index] = this.pagamentoEdicao;
      this.pagamentoEdicao = {};
      this.display = false;	
    }

    search(event) {
        this.clienteService.filtrar(event.query).then((data : any[]) => {
            this.results = data;
        });
    }

    searchproduto(event) {
        this.produtoService.filtrarmaiorqzero(event.query).then((data : any[]) => {
            this.results = data;
        });
    }

    salvarItens() {
      const nrItem = this.itempedido.sequencia;
      if (!nrItem) {
        this.pedido.itempedidos.push(this.itempedido);
      } else {
        let index = this.pedido.itempedidos.findIndex((obj) => obj.sequencia == nrItem);
        this.pedido.itempedidos[index] = this.itempedido;
      }
      setTimeout(() => {
        this.novoitempedido();
        this.calcularTotalPedido();
      }, 200);
    }

    calcularTotalPedido(){
      this.pedido.valor_total = 0;
      this.pedido.itempedidos.forEach(item =>{
        this.pedido.valor_total += item.valor_total;
      })
    }
    /* novopagamento(){
      this.pagamento = new Pagamento();
    } */

    novoitempedido(){
      this.itempedido = new ItemPedido();
      this.atualizarSequenciaItemPedido();
    }

    atualizarSequenciaItemPedido() {
      let nrItem = 0;
      for (let i in this.pedido.itempedidos) {
        nrItem += 1;
        this.pedido.itempedidos[i].sequencia = nrItem;
      }
    }

    excluirItem(item) {
      let index = this.pedido.itempedidos.findIndex(x => x == item);
      this.pedido.itempedidos.splice(index, 1);
      this.calcularTotalPedido();
    }

    excluirItempagamento(itempagamento) {
      let index = this.pedido.pagamentopedido.findIndex(x => x == itempagamento);
      this.pedido.pagamentopedido.splice(index, 1);
      
    }

    inserirPagamento(){
      let valorparcela=this.pedido.valor_total/this.quantidade_parcelas;
      for (let i=0; i<this.quantidade_parcelas; i++){ 
        let parcela=new Pagamentopedido();
        parcela.numero_parcela=i+1;
        parcela.valor_parcela=valorparcela;
        parcela.data_vencimento = this.pedido.data_vencimento;
        this.pedido.pagamentopedido.push(parcela);
        this.novoitempedido();
      }
   /*    setTimeout(() => {
        this.novopagamento();
      }, 200); */
    
    }

    editar(item){
      this.pagamentoEdicao = {...item};
      this.display = true
    }

    calcularTotalItem(){
      this.itempedido.valor_total = this.itempedido.quantidade * this.itempedido.valor_unitario;
    }

    validarItem(){
      if (!this.itempedido.produto || !this.itempedido.quantidade || !this.itempedido.valor_unitario || !this.itempedido.valor_total){
        return true;
      }
      else{
        return false;
      }

    }

  }



