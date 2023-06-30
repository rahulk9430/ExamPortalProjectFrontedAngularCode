import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
baseUrl="http://localhost:8080"
  constructor(private http:HttpClient) { }

  //generate token

  public generateToken(user:any){
    return this.http.post(`${this.baseUrl}/generate-token`,user)
  }

  //login user:set token in localstorage
  public loginUser(token:any){
    localStorage.setItem('token',token);
    return true;

  }

  //islogin: user is logged in or not
  public idLoggedIn(){
    let tokenStr=localStorage.getItem("token");
    if(tokenStr==undefined||tokenStr==''||tokenStr==null){
      return false;
    }else{
      return true;
    }
  }

  //logout user
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('users');
    return true;
  }

  //get token
  public getToken(){
    return localStorage.getItem('token');
  }

  //set userDetails
  public setUser(users:any){
    localStorage.setItem('users',JSON.stringify(users));
  }
  //get user

  public getUser(){
    let userStr=localStorage.getItem('users');
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  //get user role

  public getUserRole(){
    let user=this.getUser()
    return user.authorities[0].authority;
  }

  //current user
  public currentUser(){
    return this.http.get(`${this.baseUrl}/current-user`);
  }


}
