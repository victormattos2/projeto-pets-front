import { MessageService, ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { AccountService } from './../shared/account.service';

import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/model';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [ConfirmationService,MessageService]
},)
export class LoginComponent implements OnInit{

  usuario : Usuario = new Usuario;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private usuarioService: UsuarioService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
  }

  validarusuario() {

    if(this.usuario.login && this.usuario.senha){
      //  console.log("preenchido");
        return false;
    }else{
    //  console.log("login ou senha invalido");
      return true;
    } 
    
  }

  entrar(){
      this.usuarioService.validarLogin(this.usuario).then(result =>{
        if (result == null ){
          this.msgErro = "Usuario ou Senha Inválidos";
          // console.log("invalido entrou aqui");
            this.showErro();
        }else{
          localStorage.setItem("usuario", JSON.stringify(result));
          this.router.navigate(['/']);
        //  console.log("usuario", result);
        }
      
      }).catch(erro => {
        this.showErro();
       // console.log("invalido entrou aqui");
      });
  }

  async onSubmit() {
    try {
      const result = await this.accountService.login(this.usuario.login);
      console.log(`Login efetuado: ${result}`);

      //navego para a rota vazia novamente
      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }
}

  public msgErro: string ;

  dark: boolean;

  checked: boolean;

  showErro() {
    console.log("msg entrou ");
    this.messageService.add({key: 'tc', severity:'error', summary: 'Pet', detail: 'Usuario ou Senha Inválidos'});
  }

}

