import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  baseUrl="http://localhost:8080"


  constructor(private http:HttpClient) { }

  public addQuiz(quiz:any){
    return this.http.post(`${this.baseUrl}/quiz/`,quiz);
  }

  public viewQuiz(){
    return this.http.get(`${this.baseUrl}/quiz/`);
  }
  public getQuizById(qid :number){
    return this.http.get(`${this.baseUrl}/quiz/${qid}`);
  }

  public deleteQuiz(qid:number){
    return this.http.delete(`${this.baseUrl}/quiz/${qid}`);
  }
  public updateQuiz(quiz:any){
    return this.http.put(`${this.baseUrl}/quiz/`,quiz);
  }
  public getAllQuizByCategoryId(cid:number){
    return this.http.get(`${this.baseUrl}/quiz/category/${cid}`);
  }

  public getAllActiveQuizByCategoryId(cid:number){
    return this.http.get(`${this.baseUrl}/quiz/category/active/${cid}`);
  }

  public getAllActiveQuizzes(){
    return this.http.get(`${this.baseUrl}/quiz/active`) ;
  }
}
