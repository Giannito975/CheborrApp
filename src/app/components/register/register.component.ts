import { error } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/models';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  public user: User = new User();
  public passwordConfirm: string = '';

  constructor(private authService: AuthService,private router: Router){}


  areFieldsValid(): boolean {
    return !!this.user.name && !!this.user.email && !!this.user.password && !!this.passwordConfirm;
  }
  

  public registerUser(): void{
    
    if (this.areFieldsValid()) {
      this.authService.addUser(this.user)
        .subscribe((addedUser : User) => {
          // Registro exitoso, navegar a la página de inicio
          this.router.navigate(['/home']);
          this.mostrarSweetAlertBienvenido(addedUser.name);
          console.log(addedUser);
         },error => {
          // Error durante el registro, mostrar alerta
          console.error('Error durante el registro:', error);
          this.mostrarSweetAlert();
        });
    } else {

      this.mostrarSweetAlertCamposVacios();
    }
}

mostrarSweetAlertCamposVacios(): void {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Por favor, completa todos los campos.',
  });
}

  mostrarSweetAlert(): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario invalido!',
    });
  }


  mostrarSweetAlertBienvenido(name:string): void {
    Swal.fire({
      title: `Bienvenido, ${name}!`,
      imageUrl:"https://i.giphy.com/media/ylzObgDRgAI9JpFgOU/200w.gif",
    });
  }
} 
  