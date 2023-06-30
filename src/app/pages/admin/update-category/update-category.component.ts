import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  public category:any={
    cid:'',
    title:'',
    description:''
  }
  id!:number;
  constructor(private categoryService:CategoryService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    
    this.id=this.route.snapshot.params['cid'];

    this.categoryService.getCategoryById(this.id).subscribe(
      (data:any)=>{
        this.category=data;
      }
    )

  }


  formSubmit(){

    this.categoryService.updateCategory(this.category).subscribe(
      (data:any)=>{
        this.category=data;
        Swal.fire('Update','Updated Successfully','success');
        this.router.navigate(['/admin/categories']);
      }
    )

  }
}
