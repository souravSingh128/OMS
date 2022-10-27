import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.component.scss']
})
export class HomeComponent {

  searchValue: string = "";
  productAvailable:boolean=false;
  landing:boolean=true
  result: any;
  showSideShipping:boolean =false;
  showMessage =""
  message=` # 1 
  50042036 – (Product Details)
  Status: Dispatched
  Line # 2
  50082011
  Status: Reserve
  Line # 3
  50005207
  Status: Reserve
`  
  foo = {
    "results": [
      {
        id: "S1210157453",
        data: {
          posOrder: "S1210157453",
          ExtOrderRef: "122708120",
          LocNum: "121",
          Channel: "ECOM",
          isActive: true
        }
      },
      {
        id: "S1210157454",
        data: {
          posOrder: "S1210157454",
          ExtOrderRef: "122708120",
          LocNum: "121",
          Channel: "ECOM",
          isActive: true
        }
      },
      {
        id: "S1210157455",
        data: {
          posOrder: "S1210157455",
          ExtOrderRef: "122708120",
          LocNum: "121",
          Channel: "ECOM",
          isActive: false
        }
      }
    ]
  };
  searchOrder(event: any) {
    this.result=null
    this.landing=false
    this.foo.results.forEach(element => {
      console.log(this.result)
      if (element.id.toString() === this.searchValue) {
        this.result = element
                }
            if(this.result)this.productAvailable=true
      if (this.result === null) {
        this.productAvailable=false
        this.showSideShipping=false
      
       console.log( document.getElementsByClassName("productList"),this.searchValue)
      }
    });
  }
  addItem(showSideShipping: any){
    console.log(showSideShipping)
    this.showSideShipping= showSideShipping
    this.showMessage=this.message
    console.log(this.message)
  }
  changeDetails(event:any){
    document.getElementsByClassName(".details")
    console.log(event, document.getElementsByClassName(".details"))
    this.showMessage=event.message
  }
}
