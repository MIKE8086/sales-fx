import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleTypesModuleRoutingModule } from './sale-types-module-routing.module';
import { SaleTypesTableComponent } from './sale-types-table/sale-types-table.component';

@NgModule({
  declarations: [SaleTypesTableComponent],
  imports: [
    CommonModule,
    SaleTypesModuleRoutingModule
  ],
  exports: [SaleTypesTableComponent],
  entryComponents: [SaleTypesTableComponent]
})
export class SaleTypesModuleModule { }
