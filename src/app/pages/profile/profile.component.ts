import { Component,OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent  implements OnInit{


  public element:any={
    username:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    enabled:''
    
  }
  

  constructor(public loginService:LoginService){}
  ngOnInit(): void {


    this.loginService.currentUser().subscribe(
      (data:any)=>{
        this.element=data
      }
    );

    
  }
  
 

  
}
