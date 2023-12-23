import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { OurDealComponent } from './our-deal/our-deal.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurSalesComponent } from './our-sales/our-sales.component';
import { OurNewsComponent } from './our-news/our-news.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductShippingComponent } from './product-shipping/product-shipping.component';
import { ProductPaymentComponent } from './product-payment/product-payment.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { OurBestProductsComponent } from './our-best-products/our-best-products.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    OurServicesComponent,
    OurProductsComponent,
    OurDealComponent,
    OurCustomersComponent,
    AboutUsComponent,
    OurSalesComponent,
    OurNewsComponent,
    OurPartnersComponent,
    ProductDetailsComponent,
    ProductShippingComponent,
    ProductPaymentComponent,
    CustomerProfileComponent,
    OurBestProductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
