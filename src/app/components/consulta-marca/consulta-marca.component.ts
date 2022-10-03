import { MarcaService } from './../../services/marca.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-marca',
  templateUrl: './consulta-marca.component.html',
  styleUrls: ['./consulta-marca.component.scss']
})
export class  ConsultaMarcaComponent implements OnInit {
  
  marca:any[] = [];

  constructor(private marcaService: MarcaService) { 
  }

  ngOnInit(): void {
    this.findall();
  }

  findall(){
    this.marcaService.findall().subscribe((response:any[])=>{
      this.marca = response;
    })
  }
}


