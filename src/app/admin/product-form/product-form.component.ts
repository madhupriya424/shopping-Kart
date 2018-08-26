import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$: Object;
  text: string;


  constructor(private categoriesService: CategoryService) {
    this.categories$ = this.categoriesService.getCategories().subscribe(response => {   
      this.categories$ = response; 
       console.log(this.categories$);   
       });
      }
    ngOnInit()
    {}

    onSaveCategory(){
      console.log(this.text);
      let body = {categoryName: this.text};
      this.categoriesService.saveCategory(body).subscribe(response => {
        console.log(response);
      });
    }
}
