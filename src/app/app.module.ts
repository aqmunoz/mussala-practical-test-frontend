import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListGatewaysComponent } from './components/list-gateways/list-gateways.component';
import { NewGatewayComponent } from './components/new-gateway/new-gateway.component';
import { ViewPeripheralsComponent } from './components/view-peripherals/view-peripherals.component';
import { NewPeripheralComponent } from './components/new-peripheral/new-peripheral.component';

@NgModule({
  declarations: [
    AppComponent,    
    ListGatewaysComponent,
    NewGatewayComponent,
    ViewPeripheralsComponent,
    NewPeripheralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
