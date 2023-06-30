import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
 
  quizzes:any = [{
    qid:'',
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    category: {
      title: ''
    }
  }]
constructor(private quizService:QuizService,private router:Router){}
  ngOnInit(): void {

    this.quizService.getAllActiveQuizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
      }
    )
  }
}
