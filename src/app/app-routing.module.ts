
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListGatewaysComponent } from './components/list-gateways/list-gateways.component';
import { NewGatewayComponent } from './components/new-gateway/new-gateway.component';
import { ViewPeripheralsComponent } from './components/view-peripherals/view-peripherals.component';
import { NewPeripheralComponent } from './components/new-peripheral/new-peripheral.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'gateways' },
  { path: 'gateways', component: ListGatewaysComponent },
  { path: 'new-gateway', component: NewGatewayComponent },
  { path: 'view-peripherals-gateway/:id', component: ViewPeripheralsComponent },
  { path: 'new-peripheral/:id', component: NewPeripheralComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
