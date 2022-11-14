import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsRoutingModule } from './producst-routing.module';
import { ProductsTableComponent } from './products-table/products-table.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SideModalModule } from '../sidemodal/sidemodal.module';
import { AddProductComponent } from './add-product/add-product.component';
import { BanListComponent } from './ban-list/ban-list.component';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductsTableComponent,
    AddProductComponent,
    BanListComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
    SharedModule,
    MatCheckboxModule,
    SideModalModule,
  ],
  exports: [BanListComponent],
})
export class ProductsModule {}
