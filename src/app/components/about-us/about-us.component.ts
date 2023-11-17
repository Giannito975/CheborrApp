import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  ngOnInit() {
    Aos.init();
  }
  
  addMessageContact(){
      this.positiveAddMessage();
  }


  positiveAddMessage() : void{
    Swal.fire({
      icon: "success",
      title: "Mensaje enviado con exito!",
      showConfirmButton: false,
      timer: 2000
    });
  }



}
