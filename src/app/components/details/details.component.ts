import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ProductService,
  Product_Interface,
} from '../../services/product.service';
import { LstorageService } from '../../services/lstorage.service';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  id: number | null = null;
  item!: Product_Interface | null; // from parent component

  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService,
    private lstorageService: LstorageService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get('id')!;
      this.item = this.ProductService.getProductById(this.id);
    });
  }

  isInCart(id: number): boolean {
    return this.lstorageService.isInCart(id);
  }

  addToCart(product: any) {
    this.lstorageService.addToCart(product);
  }

  removeFromCart(id: number) {
    this.lstorageService.removeFromCart(id);
  }
}
