import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  public product: Product = {
    name: "",
    price: null
  }

  constructor(private router: Router, 
    private productService: ProductService) { 

  }

  ngOnInit(): void {
  }

  createProduct(){
    console.log(this.product);
    this.productService.create(this.product).subscribe(() =>{
      this.productService.showMessage('Produto Criado!');
      this.router.navigate(['/products']);
    });
    
  }

  cancel(){
    this.router.navigate(['/products']);
  }

}
