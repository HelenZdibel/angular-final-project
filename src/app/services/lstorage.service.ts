import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LstorageService {

  private cartKey = 'cart';

  constructor() { }

  // Save cart items to localStorage
  saveCart(items: any[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(items));
  }

  // Retrieve cart items from localStorage
  getCart(): any[] {
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : [];
  }

  // Remove cart items from localStorage
  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }

  // Add item to cart
  addToCart(item: any): void {
    const cart = this.getCart();
    if (!cart.some(cartItem => cartItem.id === item.id)) {
      cart.push(item);
      this.saveCart(cart);
    }
  }
}
