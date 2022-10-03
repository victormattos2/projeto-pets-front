import { ClienteService } from './../../services/cliente.service';
import { Pedido } from './../../models/model';
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

providers: [MessageService]
results: any[];

constructor(private vendaService: VendaService, private messageService: MessageService, private clienteService: ClienteService) { 
}


  ngOnInit(): void {
  }

  salvar(){
    this.vendaService.save(this.pedido).subscribe((response)=>{
      this.messageService.add({ key: 'tst', severity: 'sucesso', summary: 'Sucesso', detail: 'Venda cadastrada' });
    })
    }

    
   

    search(event) {
        this.clienteService.filtrar(event.query).then((data : any[]) => {
            this.results = data;
        });
    }
  }



