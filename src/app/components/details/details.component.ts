import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ProductService,
  Product_Interface,
} from '../../services/product.service';

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
    private ProductService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get('id')!;
      this.item = this.ProductService.getProductById(this.id);
      console.log(this.item);
    });
  }
}
