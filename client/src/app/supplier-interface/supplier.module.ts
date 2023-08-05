import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierInterfaceComponent } from './supplier-interface.component';
import { SupplierProductsListComponent } from './supplier-products-list/supplier-products-list.component';
import { SupplierProductCreateComponent } from './supplier-products-list/supplier-product-create/supplier-product-create.component';
import { SupplierProductDetailsComponent } from './supplier-products-list/supplier-product-details/supplier-product-details.component';
import { SharedModule } from '../shared/shared.module';
import { SupplierDashboardComponent } from './supplier-dashboard/supplier-dashboard.component';



import { DragDropModule } from '@angular/cdk/drag-drop';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    SupplierInterfaceComponent,
    SupplierProductsListComponent,
    SupplierProductDetailsComponent,
    SupplierProductCreateComponent,
    SupplierDashboardComponent,

    
  ],
  imports: [CommonModule,
     SupplierRoutingModule,
     NgxPaginationModule,
     CKEditorModule,
     DragDropModule,
 
     SharedModule],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
   })

export class SupplierModule {}
