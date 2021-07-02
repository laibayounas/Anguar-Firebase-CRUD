import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { VendorDetailsComponent } from './components/vendor-details/vendor-details.component';
import { VendorListComponent } from './components/vendor-list/vendor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVendorComponent,
    VendorDetailsComponent,
    VendorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
