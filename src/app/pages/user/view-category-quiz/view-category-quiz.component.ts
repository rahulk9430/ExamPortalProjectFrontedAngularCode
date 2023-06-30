import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-view-category-quiz',
  templateUrl: './view-category-quiz.component.html',
  styleUrls: ['./view-category-quiz.component.css']
})
export class ViewCategoryQuizComponent implements OnInit {
  
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
  categories:any=[
    {cid:''},
    { title:''},
    { description:''}
   ];
  id!:number;
  qtitle!:String
  constructor(private quizService:QuizService,private categoryService:CategoryService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id=this.route.snapshot.params['cid'];

      this.quizService.getAllActiveQuizByCategoryId(this.id).subscribe(
        (data)=>{
          this.quizzes=data;
          // console.log(data);
         
        }
      )
    })
    // this.qtitle=this.route.snapshot.params['title'];
    

    

  }
}
