import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  public product: Product 

  constructor(private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    });
  }

  updateProduct() {
      this.productService.update(this.product).subscribe( ()  => {
        this.productService.showMessage("Product updated!");
        this.router.navigate(['/products']);
      })
  }

  cancel() {
    this.router.navigate(['/products']);
  }

}