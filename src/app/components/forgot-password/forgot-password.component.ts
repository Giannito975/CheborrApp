import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/models';
import { UsersApiService } from 'src/app/services/users-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  public oldPassword: string = '';
  public newPassword: string = '';

  constructor(private authService: AuthService, private router: Router, private usersApiService : UsersApiService) { }

  public async initPassword() {
    const loggedUser = this.authService.getUserFromLocalStorage();
    

    try {
        this.usersApiService.getUsers().subscribe((users : User[])=>{
          const user = users.find((user) => user.email === loggedUser?.email );
          if(user){
            if(user.password == this.oldPassword){
              user.password = this.newPassword;
            }
            this.usersApiService.updateUser(user).subscribe(()=>{
             this.mostrarSweetAlert('success','Cambiada la password','exitoso');

            });
      
          }
      });
      
    
    } catch (error) {
      console.log('Error al cambiar la contraseña:', error);
      this.mostrarSweetAlert('error', '¡Oops...', 'Hubo un error al cambiar la contraseña.');
    }
   
  } 

  mostrarSweetAlert(icon: 'success' | 'error', title: string, text: string): void {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  }
  
}
