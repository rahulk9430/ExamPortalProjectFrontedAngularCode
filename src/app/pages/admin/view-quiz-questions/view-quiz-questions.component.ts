import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent  implements OnInit{

  questions:any=[{
    qid:'',
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    quiz:{
      title:''
    }
  }]

  id!:number;
  qtitle!:String
  constructor(private route:ActivatedRoute,private router:Router,private questionService:QuestionService){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['qid'];
    this.qtitle=this.route.snapshot.params['title']

    this.questionService.viewQuestionsOfQuizAdmin(this.id).subscribe(
      (data:any)=>{
        this.questions=data;
        console.log(data);
      }
    )
  }

  deleteQuiz(qid:number){
    this.questionService.deleteQuestion(qid).subscribe(
      (data)=>{
        
        this.router.navigate(['/admin/quizzes']);
      }
    )

  }
  updateQuiz(qid:number){
    this.router.navigate(['admin/update-question',qid])

  }

}
