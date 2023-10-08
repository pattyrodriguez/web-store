import { Component } from '@angular/core';
import { Product } from '../../models/produtc.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShoppingCart: Product[] = [];
  total: number = 0;

  products: Product[] = [
      {
        id: '1',
        name: 'EL mejor juguete',
        price: 565,
        image: './assets/images/toy.jfif'
      },
      {
        id: '2',
        name: 'Bicicleta casi nueva',
        price: 356,
        image: './assets/images/bike.jfif'
      },
      {
        id: '3',
        name: 'Colleción de albumnes',
        price: 34,
        image: './assets/images/album.jpg'
      },
      {
        id: '4',
        name: 'Mis libros',
        price: 23,
        image: './assets/images/books.jpg'
      },
    ];

    onAddToShoppinCart(product: Product){
      this.myShoppingCart.push(product);
      this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    }
}
