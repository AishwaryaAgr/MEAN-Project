import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';


@NgModule({
  declarations: [CustomersComponent, ListCustomerComponent, CreateCustomerComponent, SearchCustomerComponent, UpdateCustomerComponent, DeleteCustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
