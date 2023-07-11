import { Component, OnInit } from '@angular/core';
import { ProductExternal } from 'src/app/shared/models/ProductExternal';
import { AdminService } from '../admin.service';
import { PaginatedResult } from 'src/app/shared/models/PaginatedResult';

@Component({
  selector: 'app-cj-products',
  templateUrl: './cj-products.component.html',
  styleUrls: ['./cj-products.component.scss']
})
export class CJProductsComponent implements OnInit {
  pageSize = 20;
  pageNum = 1;
  products: ProductExternal[] = [];
  totalPages = 0;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.adminService.getExternalProducts(this.pageSize, this.pageNum)
      .subscribe((result: PaginatedResult<ProductExternal>) => {
        this.products = result.data;
        this.totalPages = result.totalPages;
      });
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageNum = page;
      this.loadProducts();
    }
  }

  nextPage(): void {
    if (this.pageNum < this.totalPages) {
      this.pageNum++;
      this.loadProducts();
    }
  }

  previousPage(): void {
    if (this.pageNum > 1) {
      this.pageNum--;
      this.loadProducts();
    }
  }
  showProductDetails(productId: string) {
    this.adminService.getPexternalroductDetails(productId)
      .subscribe((productDetails: any) => {
        // Handle the product details here (e.g., display in a modal, navigate to a product details page)
        console.log(productDetails);
      }, error => {
        console.log(error);
      });
  }
}