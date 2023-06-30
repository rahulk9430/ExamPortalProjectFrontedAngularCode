import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {
  categories: any;
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
  
  constructor(private router:Router, private categoryService:CategoryService){}
  ngOnInit(): void {

    this.categoryService.viewCategory().subscribe(
      (data:any)=>{
        this.categories=data;
      }
    )

  }

  viewQuiz(cid:number){
    this.router.navigate(['/user-dashboard/view-category',cid]);
  }


}
