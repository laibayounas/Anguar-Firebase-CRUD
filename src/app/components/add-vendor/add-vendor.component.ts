import { Component, OnInit } from '@angular/core';
import Vendor from 'src/app/models/vendor.model';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  vendor: Vendor = new Vendor();
  submitted = false;

  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
  }

  saveVendor(): void {
    this.vendorService.create(this.vendor).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newVendor(): void {
    this.submitted = false;
    this.vendor = new Vendor();
  }

}
