import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

   baseUrl='http://localhost:8080/user'
  constructor(private http:HttpClient) { }

public addUser(user:any){
  return this.http.post(`${this.baseUrl}/`, user);
}
public getUsername(username:any){
  return this.http.get(`${this.baseUrl}/${username}`);
}

}
