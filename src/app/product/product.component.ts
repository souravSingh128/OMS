import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @Input() data: any;
  @Output() showShipping = new EventEmitter<boolean>();
  @Output() packinfo = new EventEmitter<any>();
  @Output() shipInfo = new EventEmitter<any>();
  showMyContainer: boolean = false;
  showShippping: boolean = false;
  date = new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  }).replace(/ /g, '-')
  subOrder = [
    {
      fulfilmentProvider: "26",
      locNum: "",
      pickingSLA: "",
      delDate: this.date
    },
    {
      fulfilmentProvider: "26",
      locNum: "",
      pickingSLA: this.date,
      delDate: this.date
    },
    {
      fulfilmentProvider: "26",
      locNum: "",
      pickingSLA: this.date,
      delDate: this.date
    },
  ]
  constructor() {
    console.log(this.data)
  }

  ngOnInit(): void {
  }
  showMyContainerDetails(event: any) {
    this.showMyContainer = !this.showMyContainer
    if (!this.showMyContainer) {
      this.showShipping.emit(false)
    }
     }
  showShippingDetails(event: any, index: number) {
    console.log( index,"hello")
    if (this.showMyContainer) {
      this.showShipping.emit(true)
    }
    else {
      this.showShipping.emit(false)
    }
  }
  packageInfo(event:any){
    this.packinfo.emit({id:"1",
  message:"hey ur product is on the way"})
  }
  shippingInfo(event:any){
    this.shipInfo.emit({id:"1",
  message:"hey ur product is already shipped"})
  }

}
