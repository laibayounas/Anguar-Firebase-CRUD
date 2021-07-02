import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Vendor from '../models/vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private dbPath = '/vendors';

vendorRef: AngularFireList<Vendor>;

constructor(private db: AngularFireDatabase) {
this.vendorRef = db.list(this.dbPath);
}
getAll(): AngularFireList<Vendor> {
return this.vendorRef;
}
create(vendor: Vendor): any {
return this.vendorRef.push(vendor);
}
update(key: string, value: any): Promise<void> {
return this.vendorRef.update(key, value);
}
delete(key: string): Promise<void> {
return this.vendorRef.remove(key);
}
deleteAll(): Promise<void> {
  return this.vendorRef.remove();
}
}
