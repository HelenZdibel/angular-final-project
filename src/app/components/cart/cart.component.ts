import { Component, OnInit } from '@angular/core';
import { LstorageService } from '../../services/lstorage.service';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-cart',
  standalone: false,

  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  cartLength = 0;
  cartTotal = 0;

  constructor(private LstorageService: LstorageService) {}

  ngOnInit(): void {
    this.cart = this.LstorageService.getCart();
    this.updateStats();
  }
  updateStats(): void {
    this.cartLength = this.cart.length;
    this.cartTotal = this.cart.reduce(
      (total, product) => total + product.price,
      0
    );
  }

  removeFromCart(id: number): void {
    this.LstorageService.removeFromCart(id);
    this.cart = this.LstorageService.getCart();
    this.updateStats();
  }
}
