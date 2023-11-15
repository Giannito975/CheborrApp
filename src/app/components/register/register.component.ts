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
        .then(() => {

          this.router.navigate(['/home']);
          this.mostrarSweetAlertBienvenido();
          console.log(this.user);
          
        })
        .catch(error => {
 
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


  mostrarSweetAlertBienvenido(): void {
    Swal.fire({
      title: 'Bienvenido',
      imageUrl:"https://i.giphy.com/media/ylzObgDRgAI9JpFgOU/200w.gif",
    });
  }
} 
  