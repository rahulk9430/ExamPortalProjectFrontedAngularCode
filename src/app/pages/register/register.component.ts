import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

  }


  constructor(private userService: UserService,private snackBar:MatSnackBar,private route:ActivatedRoute,
    private router:Router) { }
  ngOnInit(): void {

  }


  formSubmit() {
    //console.log(this.user);
    if(this.user.username==''||this.user.username==null||this.user.password==''){
      //alert('Please fill in username,password');
      this.snackBar.open(
        "Username and Password is Requires",'',{
          duration:3000
        });
    }
    //adduser
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
      console.log(data.username)
        //success
       // console.log(data);
        Swal.fire('Success','User is Registed','success');
        this.user = data;
        this.router.navigate(['login'])

      },
      (error) => {
        //error
        console.log(error);
        
        this.snackBar.open('User is Already Exist','',{
          duration:2000
        });

      }
    )
  }


}


