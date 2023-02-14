import { Router } from '@angular/router';
import { MarcaService } from './../../services/marca.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-marca',
  templateUrl: './consulta-marca.component.html',
  styleUrls: ['./consulta-marca.component.scss']
})
export class  ConsultaMarcaComponent implements OnInit {
  
  marca:any[] = [];

  constructor(private marcaService: MarcaService,
              private router: Router) { 
  }

  ngOnInit(): void {
    this.findall();
  }

  findall(){
    this.marcaService.findall().subscribe((response:any[])=>{
      this.marca = response;
    })
  }
  novo(){
    this.router.navigate(['cadastro-marca'])
  }
  
  editar(id){
    this.router.navigate([`cadastro-marca/${id}`]);
  }

  deletar(id){
    this.marcaService.deletar(id).subscribe(()=>{
      this.findall();
    })
  }
}


