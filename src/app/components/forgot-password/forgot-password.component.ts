
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  public email: string = '';

  constructor(private authService: AuthService) { }

  public resetPassword(): void{

      this.authService.sendPasswordResetEmail(this.email);

        Swal.fire({
          icon: 'success',
          title: 'Correo enviado',
          text: 'Se ha enviado un correo electrónico de recuperación de contraseña. Por favor, revisa tu bandeja de entrada.'
        });
  }
  
}
