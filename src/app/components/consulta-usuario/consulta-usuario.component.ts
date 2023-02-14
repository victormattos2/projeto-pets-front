import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-usuario',
  templateUrl: './consulta-usuario.component.html',
  styleUrls: ['./consulta-usuario.component.scss']
})
export class ConsultaUsuarioComponent implements OnInit {

  usuario: any[] = [];

  providers: [MessageService]

  constructor( private UsuarioService: UsuarioService,
               private router: Router,
               private messageService: MessageService) { 
  }

  ngOnInit(): void {
     this.findall(); 
  }

  findall(){
    this.UsuarioService.findall().subscribe((response:any[])=>{
      this.usuario = response;
      
    })
  }

  novo(){
    this.router.navigate(['cadastro-usuario'])
  }

  editar(id){
    this.router.navigate([`cadastro-usuario/${id}`]);
  }
 
  deletar(id){
    this.UsuarioService.deletar(id).subscribe(()=>{
      this.findall();
    })
  }
  
}