import { Component } from '@angular/core';
import { LstorageService } from '../../services/lstorage.service';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  products: any[];
  filterTerm: string = '';

  constructor(
    private lstorageService: LstorageService,
    private productService: ProductService
  ) {
    this.products = this.productService.getProducts();
  }

  filterProducts() {
    const searchTerm = this.filterTerm.trim();
    if (!searchTerm) {
      this.products = this.productService.getProducts();
      return;
    }
    this.products = this.productService.getProducts().filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }


  addToCart(product: any) {
    this.lstorageService.addToCart(product);
  }

  removeFromCart(id: number) {
    this.lstorageService.removeFromCart(id);
  }

  isInCart(id: number): boolean {
    return this.lstorageService.isInCart(id);
  }

  getCartCount(): number {
    return this.lstorageService.getCart().length;
  }

  clearCart() {
    this.lstorageService.clearCart();
  }


}
