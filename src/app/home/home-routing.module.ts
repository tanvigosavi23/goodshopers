import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { OurBestProductsComponent } from './our-best-products/our-best-products.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { OurDealComponent } from './our-deal/our-deal.component';
import { OurNewsComponent } from './our-news/our-news.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { OurSalesComponent } from './our-sales/our-sales.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductPaymentComponent } from './product-payment/product-payment.component';
import { ProductShippingComponent } from './product-shipping/product-shipping.component';

const routes: Routes = [
  {path:'about-us',component:AboutUsComponent},
  {path:'customer-profile',component:CustomerProfileComponent},
  {path:'our-best-products',component:OurBestProductsComponent},
  {path:'our-customers',component:OurCustomersComponent},
  {path:'our-deal',component:OurDealComponent},
  {path:'our-news',component:OurNewsComponent},
  {path:'our-partners',component:OurPartnersComponent},
  {path:'our-products',component:OurProductsComponent},
  {path:'our-sales',component:OurSalesComponent},
  {path:'our-services',component:OurServicesComponent},
  {path:'products-details',component:ProductDetailsComponent},
  {path:'products-payment',component:ProductPaymentComponent},
  {path:'products-shipping',component:ProductShippingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
