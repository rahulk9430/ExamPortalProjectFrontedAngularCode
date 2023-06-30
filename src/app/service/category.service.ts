import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public addCategory(category:any){
    return this.http.post(`${this.baseUrl}/category/`, category);
  }

  public viewCategory(){
    return this.http.get(`${this.baseUrl}/category/`);
  }
  public deleteCategory(cid:number){
   
    return this.http.delete(`${this.baseUrl}/category/${cid}`);
  }
  public updateCategory(category:any){
    return this.http.put(`${this.baseUrl}/category/`,category);
  }
  public getCategoryById(cid:number){
    return this.http.get(`${this.baseUrl}/category/${cid}`);
  }

}

