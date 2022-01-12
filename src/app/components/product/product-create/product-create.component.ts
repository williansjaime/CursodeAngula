import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  //atributoLega = "qualquer"

  product!: Product /*= {
    name: 'Produto de teste',
    price: 125.98
  }*/

  constructor( private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    //this.productService.showOnConsole('operação executada com sucesso')
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado!!!')
      this.router.navigate(['/products'])
    })

    this.productService.showMessage('Produto Criado!!!')
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
  
  /*fazeAlgo(): void {
    console.log('Fazendo Algo!')  
  }*/
}
