// forgot-password.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  public email: string = '';

  constructor() { }

  public resetPassword(): void {
  
    console.log('Se enviará un correo electrónico de recuperación a:', this.email);
  }
}
