import { ActivatedRoute, Router } from '@angular/router';
import { PagamentoService } from '../../services/pagamento.service';
import { MessageService } from 'primeng/api';
import { Pagamento } from '../../models/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './cadastro-pagamento.component.html',
  styleUrls: ['./cadastro-pagamento.component.scss']
})
export class CadastroPagamentoComponent implements OnInit {
  pagamento:Pagamento=new Pagamento();

  ativo: boolean = true

  opcoesModo = [
    'A VISTA',
    'A PRAZO'
  ]

  providers:[MessageService]

  constructor(protected route: ActivatedRoute,
              private pagamentoService: PagamentoService,
              private router: Router,
              private MessageService:MessageService) {

               }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id != undefined) {
      this.pagamentoService.findById(id).subscribe((response) => {
        console.log(response);
        this.pagamento = response as Pagamento;
      })
    }
  }
  salvar(){
    this.pagamentoService.save(this.pagamento).subscribe((response)=>{
      this.MessageService.add({key: 'tst',severity:'success', summary: 'Sucesso', detail:'Pagamento cadastrado'});
      this.pagamento = new Pagamento();
      this.voltar(); 
    })
  }

  voltar(){
    this.router.navigate(['consulta-pagamento']);
  }

  onChangeSituacao(){
    this.ativo = !this.ativo;
    this.pagamento.situacao=Number(this.ativo);
    console.log(this.ativo);
  }
  
}


