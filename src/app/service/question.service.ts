import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  baseUrl="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public viewQuestionsOfQuiz(qid:number){
   return this.http.get(`${this.baseUrl}/question/quiz/${qid}`);
  }

  public viewQuestionsOfQuizAdmin(qid:number){
    return this.http.get(`${this.baseUrl}/question/quiz/all/${qid}`);
   }

   public addQuestion(question:any){
    return this.http.post(`${this.baseUrl}/question/`,question);
   }

   public deleteQuestion(qid:number){
    return this.http.delete(`${this.baseUrl}/question/${qid}`);
   }
   public updateQuestion(question:any){
    return this.http.put(`${this.baseUrl}/question/`,question);
   }
   public getQuestion(qid:number){
    return this.http.get(`${this.baseUrl}/question/${qid}`);
   }

   public getQuestionOfQuizForTest(qid:number){
    return this.http.get(`${this.baseUrl}/question/quiz/${qid}`);
   }
}
