import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VendorListComponent } from './components/vendor-list/vendor-list.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';

const routes: Routes = [
  { path: '', redirectTo: 'vendor', pathMatch: 'full' },
  { path: 'vendor', component: VendorListComponent },
  { path: 'add', component: AddVendorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
