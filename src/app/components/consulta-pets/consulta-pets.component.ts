import { Pets } from './../../models/model';
import { PetsService } from './../../services/pets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-pets',
  templateUrl: './consulta-pets.component.html',
  styleUrls: ['./consulta-pets.component.scss']
})
export class ConsultaPetsComponent implements OnInit {
  
  pets: Pets[] = [];

  constructor( private PetsService: PetsService ) { 
  }

  ngOnInit(): void {
     this.findall(); 
  }

  findall(){
    this.PetsService.findall().subscribe((response:any[])=>{
      this.pets = response;
      
    })
  }
}
