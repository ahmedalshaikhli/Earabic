import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryImageSize, NgxGalleryOptions} from '@kolkov/ngx-gallery';
import { environment } from 'src/environments/environment';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  baseUrl = "https://localhost:5001/";
  product?: IProduct;
  quantity = 1;
  quantityInBasket = 0;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  productDescription?: SafeHtml;
  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer,
    private bcService: BreadcrumbService, private basketService: BasketService) {
      this.bcService.set('@productDetails', ' ')
    }

  ngOnInit(): void {
    this.loadProduct();
  }

 
  initializeGallery() {
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
       
        preview: false,
        
      }
    ];
    this.galleryImages = this.getImages();
  }
  getImages() {
    const imageUrls = [];
    if (this.product && this.product.photos) {
      for (const photo of this.product.photos) {
        imageUrls.push({
          small: `${photo.pictureUrl}`,
          medium: `${photo.pictureUrl}`,
          big: `${photo.pictureUrl}`,
        });
      }
    }
    return imageUrls;
  }
  loadProduct() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) this.shopService.getProduct(+id).subscribe({
      next: product => {
        this.productDescription = this.sanitizer.bypassSecurityTrustHtml(product.description);
        this.product = product;
        this.bcService.set('@productDetails', product.name);
        this.initializeGallery();
        this.basketService.basketSource$.pipe(take(1)).subscribe({
          next: basket => {
            const item = basket?.items.find(x => x.id === +id);
            if (item) {
              this.quantity = item.quantity;
              this.quantityInBasket = item.quantity;
            }
          }
        })
      },
      error: error => console.log(error)
    })
  }


  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    this.quantity--;
  }

  updateBasket() {
    if (this.product) {
      if (this.quantity > this.quantityInBasket) {
        const itemsToAdd = this.quantity - this.quantityInBasket;
        this.quantityInBasket += itemsToAdd;
        this.basketService.addItemToBasket(this.product, itemsToAdd);
      } else {
        const itemsToRemove = this.quantityInBasket - this.quantity;
        this.quantityInBasket -= itemsToRemove;
        this.basketService.removeItemFromBasket(this.product.id, itemsToRemove);
      }
    }
  }

  get buttonText() {
    return this.quantityInBasket === 0 ? 'أضف إلى السلة' : 'تحديث السلة';
  }

}
