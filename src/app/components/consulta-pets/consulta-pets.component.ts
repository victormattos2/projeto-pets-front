import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Pets } from './../../models/model';
import { PetsService } from './../../services/pets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-pets',
  templateUrl: './consulta-pets.component.html',
  styleUrls: ['./consulta-pets.component.scss']
})
export class ConsultaPetsComponent implements OnInit {
  
  pets: any[] = [];

  providers: [MessageService]

  constructor( private PetsService: PetsService,
               private router: Router,
               private messageService: MessageService) { 
  }

  ngOnInit(): void {
     this.findall(); 
  }

  findall(){
    this.PetsService.findall().subscribe((response:any[])=>{
      this.pets = response;
      
    })
  }

  novo(){
    this.router.navigate(['cadastro-pets'])
  }

  editar(id){
    this.router.navigate([`cadastro-pets/${id}`]);
  }
 
  deletar(id){
    this.PetsService.deletar(id).subscribe(()=>{
      this.findall();
    })
  }
 
}
