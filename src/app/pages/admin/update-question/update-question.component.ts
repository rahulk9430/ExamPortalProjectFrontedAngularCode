import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
 

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
  id!:number
  constructor(private questionService:QuestionService,private quizService:QuizService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['qid'];
    this.questionService.getQuestion(this.id).subscribe(
      (data:any)=>{
        this.questions=data
      }
    );

    this.quizService.viewQuiz().subscribe(
      (data:any)=>{
        this.quizzes=data;
      }
    )
  }

  formSubmit(){

    this.questionService.updateQuestion(this.questions).subscribe(
      (data:any)=>{
      this.questions=data;
      Swal.fire('Success','Questions Updated','success');
      this.router.navigate(['/admin/quizzes'])
      }
    );

  }
}
