import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-user-view-question',
  templateUrl: './user-view-question.component.html',
  styleUrls: ['./user-view-question.component.css']
})
export class UserViewQuestionComponent implements OnInit {
 
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
  constructor(private route:ActivatedRoute,  private questionService:QuestionService,private router:Router){}
  ngOnInit(): void {

    this.id=this.route.snapshot.params['qid'];
    this.qtitle=this.route.snapshot.params['title']

    this.questionService.viewQuestionsOfQuiz(this.id).subscribe(
      (data:any)=>{
        this.questions=data;
      }
    )

  }
}
