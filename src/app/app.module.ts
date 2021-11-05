import { LayoutModule } from '@angular/cdk/layout';
import { Injector, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from './add-item/add-item.component';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
import myAppConfig from './config/my-app-config';

const oktaConfig = Object.assign({
  onAuthRequired: (oktaAuth: any, injector: Injector) => {
     const router = injector.get(Router);
     router.navigate(['/login']);
  }
}, myAppConfig.oidc)




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    SpecialOfferComponent,
    AddItemComponent,
    LoginComponent,
  ],
  exports: [MatSidenavModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    OktaAuthModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
