import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent  implements OnInit{
  public quiz={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    category:{
      cid:''
    }
    
  }
  categories=[
    {cid:'',
      title:''
    }
  ]
  constructor(private categoryService:CategoryService,  private quizService:QuizService,private router:Router){}
  ngOnInit(): void {
    this.categoryService.viewCategory().subscribe(
      (data:any)=>{
        this.categories=data;

      }
    )
  }

  formSubmit(){

    this.quizService.addQuiz(this.quiz).subscribe(
      (data:any)=>{
        this.quiz=data;
        console.log(data);
        Swal.fire('Success','Quiz Successfully added','success');
        this.router.navigate(['/admin/quizzes']);

      },
      (error)=>{
        console.log(error);
      }
    );

}



}
