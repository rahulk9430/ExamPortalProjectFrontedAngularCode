import { LocationStrategy } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';
import { Location } from '@angular/common';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  questions:any=[{
    qid:'',
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
   
    quiz:{
      title:'',
      numberOfQuestions:'',
      maxMarks:''
    }
  }]

  marksGot=0;
  correctAnswer=0;
  attemped=0;
  unAttemped=0;
  isSubmit=false;
  timer:any;

  id!:number;
  constructor(private questionService:QuestionService ,private locationSt:LocationStrategy ,private quizService:QuizService,private route:ActivatedRoute,private router:Router ){}
  ngOnInit(): void {

    this.id=this.route.snapshot.params['qid'];

    this.preventBackButton();

    this.loadQuestion();

  }

  loadQuestion(){
    this.questionService.getQuestionOfQuizForTest(this.id).subscribe(
      (data:any)=>{
        this.questions=data;
        this.timer=this.questions.length*2*60;
        this.questions.forEach((q:any)=>{
          q.givenAnswer='';
          console.log(this.questions);
        })
        this.startTimer();
        
      }
    );
  }

  preventBackButton(){
    history.pushState(null,"", location.href);
  this.locationSt.onPopState(() => {
    history.pushState(null,"", location.href);
  });
  }
  submitQuiz(){
    Swal.fire({
      title: 'Do you want to Submit the quize?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.isSubmit=true;
            //calculation
           this.evalQuiz();


       
        Swal.fire('Submmited!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

startTimer(){
  let t=window.setInterval(()=>{
    if(this.timer<=0){
      
      clearInterval(t)
      
    }
    else{
      this.timer--;
    }
  },1000)
}

getFormattedTime(){
  let mm=Math.floor(this.timer/60)
  let ss=this.timer-mm*60;
  return `${mm} min :${ss} sec `;
}

evalQuiz(){
  this.questions.forEach((q: { givenAnswer: any; answer: any; })=>{
    if(q.givenAnswer==q.answer){
      this.correctAnswer++

     let marksSingle= this.questions[0].quiz.maxMarks/this.questions.length

     this.marksGot+=marksSingle;
    }
    if(q.givenAnswer!=''){
      this.attemped++
    }
    this.unAttemped=this.questions.length-this.attemped;
  });
}

}
