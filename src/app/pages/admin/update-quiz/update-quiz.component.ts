import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  public quiz={
    qid:'',
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    category:{
      cid:''
    }
    
  }
  id!:number;
  
  categories=[
    {cid:'',
      title:'',
      description:''
    }
  ]
  constructor(private categoryService:CategoryService,private route:ActivatedRoute,private quizService:QuizService,private router:Router){}
  ngOnInit(): void {

    this.id=this.route.snapshot.params['qid'];
    this.quizService.getQuizById(this.id).subscribe(
      (data:any)=>{
        this.quiz=data;
        console.log(this.quiz)

      }
    );
    this.categoryService.viewCategory().subscribe(
      (data:any)=>{
        this.categories=data;
      }
    );
  }

  formSubmit(){

    this.quizService.updateQuiz(this.quiz).subscribe(
      (data:any)=>{
        this.quiz=data;
        Swal.fire('Update','Updated Successfully','success');
        this.router.navigate(['/admin/quizzes']);
      },
      (error)=>{
        Swal.fire('Error','Something Error','error');
      }
    )

  }

}
