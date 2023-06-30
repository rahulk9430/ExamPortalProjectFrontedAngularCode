import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit{
  quiz:any={
    qid:'',
    title:'',
    description:'',
    numberOfQuestions:'',
    maxMarks:''
  }
  id!:number

  constructor(private router:Router,   private quizService:QuizService,private route:ActivatedRoute){}
  ngOnInit(): void {

    this.id=this.route.snapshot.params['qid']

    this.quizService.getQuizById(this.id).subscribe(
      (data:any)=>{
        console.log(data)
        this.quiz=data;
      }
    )
  }

  startQuiz(qid:number){

    Swal.fire({
      title: 'Do you want to start the quize?',
      showCancelButton: true,
      confirmButtonText: 'Start',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/start/',+qid]);
        Swal.fire('Started!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    

}

}
