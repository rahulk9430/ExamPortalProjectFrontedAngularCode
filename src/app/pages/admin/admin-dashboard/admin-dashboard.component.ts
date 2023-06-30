import { Component } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(public loginService:LoginService){}




}
