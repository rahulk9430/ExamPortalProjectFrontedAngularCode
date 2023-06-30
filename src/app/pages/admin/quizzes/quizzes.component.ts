import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent  implements OnInit{
  constructor(private quizService:QuizService,private router:Router){}

  quizzes:any = [{
    qid:'',
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    category: {
      title: ''
    }
  }
  ];
  ngOnInit(): void {
    this.getQuiz();
  }


  getQuiz(){
    this.quizService.viewQuiz().subscribe(
      (data:any)=>{
        this.quizzes=data;
      }
    )

  }



  deleteQuiz(qid:number){
    Swal.fire(
      {
        icon: "warning",
        title:"Are you sure ?",
        confirmButtonText:'Delete',
        showCancelButton : true,
           
      }).then((result)=>{
        if(result.isConfirmed){
          this.quizService.deleteQuiz(qid).subscribe(
            (data:any)=>{
              Swal.fire('Success','Quiz Deleted','success');
              this.getQuiz();
            },
            (error)=>{
              Swal.fire('Error','error in Quiz Deleted','error');
      
            }
          );
        }
      });
   

  }

  updateQuiz(qid:number){
    this.router.navigate(['/admin/update-quiz',qid])

  }
  

}
