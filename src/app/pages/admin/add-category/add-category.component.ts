import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  public category={
    title:'',
    description:''
  }
  constructor(private categoryService:CategoryService,private router:Router){}
  ngOnInit(): void {
  }
  formSubmit(){

    this.categoryService.addCategory(this.category).subscribe(
      (data:any)=>{
        this.category=data;
        console.log(data);
        Swal.fire('Success Done','Category Added','success');
        this.router.navigate(["/admin/categories"])
      }
    )

  }


}
