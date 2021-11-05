import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { AddItemComponent } from './add-item/add-item.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';


const routes: Routes = [
  { path: 'homepage', component: HomepageComponent, canActivate: [OktaAuthGuard]},
  { path: 'login/callback', component: OktaCallbackComponent},
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductListComponent},
  { path: 'special-offer', component: SpecialOfferComponent, canActivate: [ OktaAuthGuard ]},
  { path: 'add-item', component: AddItemComponent, canActivate: [ OktaAuthGuard ]},
  { path: 'login/callback',component: HomepageComponent },
  { path: '**', component: HomepageComponent},
  { path: '', redirectTo: '/homepage', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
