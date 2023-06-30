import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public user={
    username:'',
    password:''
  }
  
  constructor(private snack:MatSnackBar,private loginService:LoginService,
    private router:Router){}
  ngOnInit(): void {
   
  }
 

  formSubmit(){

    if(this.user.username.trim()==''||this.user.username==null|| this.user.password==null||  this.user.password.trim()==''){
        this.snack.open("Username and Password is required",'',{
          duration:2000
        });
        return;
    }
    //request to server to generate token

    this.loginService.generateToken(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data);
          this.user=data;
      //login....
         this.loginService.loginUser(data.token);

         this.loginService.currentUser().subscribe(
          (user:any)=>{
            this.loginService.setUser(user);
            console.log(user);
            //redirect...ADMIN: admin-dashboard
              if(this.loginService.getUserRole()=="NORMAL"){

                this.router.navigate(['user-dashboard']);

                //redirect...NORMAL: normal-dashboard
              }else if(this.loginService.getUserRole()=="ADMIN"){
                 this.router.navigate(['admin']);
              }
              else{
                this.loginService.logout();
              }
            
          }
         );

      },(error)=>{

        //error
        console.log(error);
        this.snack.open("Invalid Details",'',{
          duration:2000
        });
      
      }
    )


  }

}
