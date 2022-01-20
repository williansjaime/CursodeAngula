import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product;
  constructor(
    private productService: ProductService, 
    private rout: Router, 
    private router : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
    });
  }
  
  updateProduct(): void{
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto Atualizado com sucesso!')
      this.rout.navigate(['/products'])
    });
  }

  cancel() : void {
     this.rout.navigate(['/products'])
  }

}
