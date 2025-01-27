import { Injectable } from '@angular/core';

export interface Product_Interface {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product_Interface[] = [
    {
      id: 1,
      name: 'Organic Face Cream',
      description: 'A nourishing face cream made with organic ingredients.',
      price: 24.99,
      image: 'https://picsum.photos/id/1015/200/300',
    },
    {
      id: 2,
      name: 'Herbal Shampoo',
      description: 'A gentle shampoo infused with natural herbs.',
      price: 15.99,
      image: 'https://picsum.photos/id/1020/200/300',
    },
    {
      id: 3,
      name: 'Aloe Vera Gel',
      description: 'Pure aloe vera gel for soothing and moisturizing skin.',
      price: 12.99,
      image: 'https://picsum.photos/id/1031/200/300',
    },
    {
      id: 4,
      name: 'Vitamin C Serum',
      description: 'A serum rich in Vitamin C for brightening skin tone.',
      price: 29.99,
      image: 'https://picsum.photos/id/1042/200/300',
    },
    {
      id: 5,
      name: 'Natural Lip Balm',
      description: 'A hydrating lip balm made with natural ingredients.',
      price: 5.99,
      image: 'https://picsum.photos/id/1053/200/300',
    },
    {
      id: 6,
      name: 'Coconut Oil Hair Mask',
      description: 'A deep conditioning hair mask with pure coconut oil.',
      price: 19.99,
      image: 'https://picsum.photos/id/1064/200/300',
    },
    {
      id: 7,
      name: 'Green Tea Face Wash',
      description: 'A refreshing face wash with green tea extracts.',
      price: 14.99,
      image: 'https://picsum.photos/id/1077/200/300',
    },
    {
      id: 8,
      name: 'Shea Butter Body Lotion',
      description: 'A moisturizing body lotion with shea butter.',
      price: 18.99,
      image: 'https://picsum.photos/id/188/200/300',
    },
    {
      id: 9,
      name: 'Charcoal Face Mask',
      description: 'A detoxifying face mask with activated charcoal.',
      price: 22.99,
      image: 'https://picsum.photos/id/199/200/300',
    },
    {
      id: 10,
      name: 'Rose Water Toner',
      description: 'A hydrating toner made with pure rose water.',
      price: 11.99,
      image: 'https://picsum.photos/id/110/200/300',
    },
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((product) => product.id === id) || null;
  }

  productInCart(id: number) {
    return this.products.some((product) => product.id === id);
  }
}
