import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierProductsListComponent } from './supplier-products-list/supplier-products-list.component';
import { SupplierProductDetailsComponent } from './supplier-products-list/supplier-product-details/supplier-product-details.component';

import { SupplierInterfaceComponent } from './supplier-interface.component';
import { SupplierDashboardComponent } from './supplier-dashboard/supplier-dashboard.component';

import { SupplierProductCreateComponent } from './supplier-products-list/supplier-product-create/supplier-product-create.component';




const routes: Routes = [
  {
    path: '',
    component: SupplierInterfaceComponent,
    children: [
      { path: '', redirectTo: 'supplier-dashboard', pathMatch: 'full' },
      { path: 'supplier-dashboard', component: SupplierDashboardComponent, data: { breadcrumb: { skip: false, label: 'لوحة الاحصائات' } } },

      { path: 'supplier-product-list', component: SupplierProductsListComponent },
 
      { path: 'suppliers/:id', component: SupplierProductDetailsComponent },
      { path: 'supplier-product-list/create-product', component: SupplierProductCreateComponent },
      

    ],
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierRoutingModule {}