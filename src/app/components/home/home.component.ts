import { Component } from '@angular/core';
import { LstorageService } from '../../services/lstorage.service';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private lstorageService: LstorageService) {}
  products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 10,
      image: 'https://picsum.photos/id/132/200/300',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 20,
      image: 'https://picsum.photos/id/62/200/300',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 30,
      image: 'https://picsum.photos/id/32/200/300',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description 4',
      price: 40,
      image: 'https://picsum.photos/id/54/200/300',
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description 5',
      price: 50,
      image: 'https://picsum.photos/id/35/200/300',
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description 6',
      price: 60,
      image: 'https://picsum.photos/id/56/200/300',
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'Description 7',
      price: 70,
      image: 'https://picsum.photos/id/37/200/300',
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Description 8',
      price: 80,
      image: 'https://picsum.photos/id/77/200/300',
    },
    {
      id: 9,
      name: 'Product 9',
      description: 'Description 9',
      price: 90,
      image: 'https://picsum.photos/id/98/200/300',
    },
    {
      id: 10,
      name: 'Product 10',
      description: 'Description 10',
      price: 100,
      image: 'https://picsum.photos/id/99/200/300',
    },
  ];

  addToCart(product: object) {
    this.lstorageService.addToCart(product);
  }
}
