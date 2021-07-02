import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import Vendor from 'src/app/models/vendor.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendor?: Vendor[];
  currentVendor?: Vendor;
  currentIndex = -1;
  title = '';

  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    this.retrieveVendor();
  }

  refreshList(): void {
    this.currentVendor = undefined;
    this.currentIndex = -1;
    this.retrieveVendor();
  }

  retrieveVendor(): void {
    this.vendorService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.vendor = data;
    });
  }

  setActiveVendor(vendor: Vendor, index: number): void {
    this.currentVendor = vendor;
    this.currentIndex = index;
  }

  removeAllVendor(): void {
    this.vendorService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }
}
