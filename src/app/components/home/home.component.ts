import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products = [
    {
      name: 'Product 1',
      description: 'Description 1',
      price: 10,
      image: 'https://picsum.photos/id/132/200/300',
    },
    {
      name: 'Product 2',
      description: 'Description 2',
      price: 20,
      image: 'https://picsum.photos/id/62/200/300',
    },
    {
      name: 'Product 3',
      description: 'Description 3',
      price: 30,
      image: 'https://picsum.photos/id/32/200/300',
    },
    {
      name: 'Product 4',
      description: 'Description 4',
      price: 40,
      image: 'https://picsum.photos/id/54/200/300',
    },
    {
      name: 'Product 5',
      description: 'Description 5',
      price: 50,
      image: 'https://picsum.photos/id/35/200/300',
    },
    {
      name: 'Product 6',
      description: 'Description 6',
      price: 60,
      image: 'https://picsum.photos/id/56/200/300',
    },
    {
      name: 'Product 7',
      description: 'Description 7',
      price: 70,
      image: 'https://picsum.photos/id/37/200/300',
    },
    {
      name: 'Product 8',
      description: 'Description 8',
      price: 80,
      image: 'https://picsum.photos/id/28/200/300',
    },
    {
      name: 'Product 9',
      description: 'Description 9',
      price: 90,
      image: 'https://picsum.photos/id/19/200/300',
    },
    {
      name: 'Product 10',
      description: 'Description 10',
      price: 100,
      image: 'https://picsum.photos/id/10/200/300',
    },
  ];
}
