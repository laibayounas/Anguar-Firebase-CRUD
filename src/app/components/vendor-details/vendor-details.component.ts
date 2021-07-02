import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import Vendor from 'src/app/models/vendor.model';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit, OnChanges  {

  @Input() vendor?: Vendor;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentVendor: Vendor = {
    title: '',
    description: '',
    published: false
  };
  message = '';

  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentVendor= { ...this.vendor };
  }

  updatePublished(status: boolean): void {
    if (this.currentVendor.key) {
      this.vendorService.update(this.currentVendor.key, { published: status })
      .then(() => {
        this.currentVendor.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateVendor(): void {
    const data = {
      title: this.currentVendor.title,
      description: this.currentVendor.description,
      
    };

    if (this.currentVendor.key) {
      this.vendorService.update(this.currentVendor.key, data)
        .then(() => this.message = 'The vendor was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteVendor(): void {
    if (this.currentVendor.key) {
      this.vendorService.delete(this.currentVendor.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The vendor was deleted successfully!';
        })
        .catch(err => console.log(err));
    }
  }

}
