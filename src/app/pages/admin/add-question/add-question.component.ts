import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent  implements OnInit{
 
  questions:any={
    qid:'',
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    quiz:{
      qid:''

    }

  }
  quizzes=[
    {
      qid:'',
      title:''
    }
  ]
  constructor(private quizService:QuizService,private questionService:QuestionService,private router:Router){}
  ngOnInit(): void {
    this.quizService.viewQuiz().subscribe(
      (data:any)=>{
        this.quizzes=data
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  formSubmit(){

    this.questionService.addQuestion(this.questions).subscribe(
      (data)=>{
        this.questions=data;
        Swal.fire('Success','Questions Added Successfully','success');
        this.router.navigate(['/admin/quizzes'])
      },
      (error)=>{
        console.log(error);
      }
    )

  }
}
