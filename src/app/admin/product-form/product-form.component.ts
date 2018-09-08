import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$: Object[]=[];
  newCategory: string;
  title: string;
  imageUrl: string;
  price: number;
  category: string;

  constructor(private categoriesService: CategoryService, private productService: ProductService) {
    this.categoriesService.getCategories().subscribe(response => {   
      this.categories$ = <Object[]>response; 
       console.log(this.categories$);   
       });
      }
    ngOnInit()
    {}

    onSaveProduct(data){
     this.productService.saveProduct(data).subscribe(response => {
       console.log(response);
     });
    }

    onSaveCategory(){
      //this.categories$.push({categoryName: this.newCategory});
      this.categoriesService.saveCategory(this.newCategory).subscribe(response => {
      // this.categories$.push({categoryName: this.newCategory});
        console.log(response);
      });
    // console.log(this.newCategory);
    }
}
