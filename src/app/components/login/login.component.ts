import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/models';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  public email: string = '';
  public password: string = '';
  
  public user: User = new User();

  constructor(private authService: AuthService,private router: Router) { }


  public async initSession() {
  
    try {
      //let isLogin: boolean = await this.authService.login(this.email, this.password);
      const loginResult = await this.authService.login(this.email, this.password);
      if (loginResult.success) {
        this.mostrarSweetAlert('success', 'Inicio de sesion exitosa', `Bienvenido, ${loginResult.name}!`);
        this.router.navigate(["/home"]);
      }else{
        this.mostrarSweetAlert('error', '¡Oops...', 'No existe el usuario!');
      }
      
    } catch (error) { 
      console.log(error);
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

// loginError:string="";
// loginForm=this.formBuilder.group({
//   email:['iva@gmail.com',[Validators.required,Validators.email]],
//   password: ['',Validators.required],
// })
// constructor(private formBuilder:FormBuilder, private router:Router, private loginService: LoginService) { }

// ngOnInit(): void {
// }

// get email(){
//   return this.loginForm.controls['email'];
// }

// get password()
// {
//   return this.loginForm.controls['password'];
// }

// login(){
//   if(this.loginForm.valid){
//     this.loginError="";
//     this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
//       next: (userData) => {
//         console.log(userData);
//       },
//       error: (errorData) => {
//         console.error(errorData);
//         this.loginError=errorData;
//       },
//       complete: () => {
//         console.info("Login completo");
//         this.router.navigateByUrl('/inicio');
//         this.loginForm.reset();
//       }
//     })

//   }
//   else{
//     this.loginForm.markAllAsTouched();
//     alert("Error al ingresar los datos.");
//   }
// }