import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ProductComponent } from './components/product/product.component';
import { ProductTypeComponent } from './components/product-type/product-type.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestComponent } from './components/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { BASE_URL } from './models/constanst';
import { environment } from 'src/environments/environment';
import { ProductTypeListComponent } from './components/product-type/product-type-list/product-type-list.component';
import { ProductTypeFormComponent } from './components/product-type/product-type-form/product-type-form.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ProductComponent,
    ProductTypeComponent,
    NavBarComponent,
    FooterComponent,
    TestComponent,
    HomeComponent,
    ProductTypeListComponent,
    ProductTypeFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:BASE_URL, useValue:(environment.baseUrl.length > 0 ? environment.baseUrl : 'https://localhost:5000')
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
