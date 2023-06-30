import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  constructor(public loginService:LoginService){}

}
