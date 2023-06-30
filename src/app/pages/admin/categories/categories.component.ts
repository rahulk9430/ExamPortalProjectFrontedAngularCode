import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any=[
    {cid:''},
    { title:''},
    { description:''}
   ];

   

constructor(private router:Router,private categoryService:CategoryService){}

ngOnInit(): void {
 this. getCategory()
}

getCategory(){
  this.categoryService.viewCategory().subscribe(
    (data:any)=>{
      this.categories=data;
    }
  )
}

deleteQuiz(cid:number){
  Swal.fire(
    {
      icon: "warning",
      title:"Are you sure ?",
      confirmButtonText:'Delete',
      showCancelButton : true,
         
    }).then((result)=>{
      if(result.isConfirmed){
        this.categoryService.deleteCategory(cid).subscribe(
          (data:any)=>{
            Swal.fire('Success','Category Deleted','success');
            this.getCategory();
          },
          (error)=>{
            Swal.fire('Error','error in Category Deleted','error');
    
          }
        );
      }
    });

}

updateQuiz(cid:number){

  this.router.navigate(['/admin/update-category',cid])
}

}
