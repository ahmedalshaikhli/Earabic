import {Component, Input, OnInit} from '@angular/core';
import { Type } from 'src/app/shared/models/type';
import {ActivatedRoute, Router} from '@angular/router';
import { Brand } from 'src/app/shared/models/brand';
import { ProductFormValues } from 'src/app/shared/models/product';
import { AdminService } from '../../admin.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss']
})
export class EditProductFormComponent implements OnInit {
  @Input() product !: ProductFormValues;
  @Input() brands: Brand[];
  @Input() types: Type[];
  public Editor = ClassicEditor as any; 
  constructor(private route: ActivatedRoute, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(product : ProductFormValues) {
    if (this.route.snapshot.url[0].path === 'edit') {
      const updatedProduct = {...this.product, ...product, price: +product.price};
      this.adminService.updateProduct(updatedProduct, +this.route.snapshot.paramMap.get('id')).subscribe((response: any) => {
        this.router.navigate(['/admin']);
      });
    } else {
      const newProduct = {...product, price: +product.price};
      this.adminService.createProduct(newProduct).subscribe((response: any) => {
        this.router.navigate(['/admin']);
      });
    }
  }

  updatePrice(event: any) {
    this.product.price  = event;
  }

}