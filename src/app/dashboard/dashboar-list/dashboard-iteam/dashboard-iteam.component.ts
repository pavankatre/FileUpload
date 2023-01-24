import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../../shared/services/dashboard.service';

@Component({
  selector: 'app-dashboard-iteam',
  templateUrl: './dashboard-iteam.component.html',
  styleUrls: ['./dashboard-iteam.component.css']
})
export class DashboardIteamComponent implements OnInit {
  bagData: any = [];
  product: any;
  tPrice: any;
  total : any;
  



  // @Input('getListFormParent') product : any;
  constructor(private dashServ: DashboardService){ }

  ngOnInit(): void {
    this.product = this.dashServ.sendToChild()
    console.log(this.dashServ.sendToChild())
    console.log(this.bagData)
  }

  // quantity(valu: any, index: number) {
  //   console.log(index)
  //   if (valu == 'add') {
  //     console.log(valu)
  //     this.product[index].productQty = this.product[index].productQty + 1
  //     // this.product[index].productQty = this.product[index].productQty + 1
  //     console.log(this.product[index].productQty)
  //   } else if (valu == 'remove') {
  //     console.log(valu)
  //     this.product[index].productQty = this.product[index].productQty - 1
  //     // this.product[index].productQty = this.product[index].productQty - 1
  //     if (this.product[index].productQty <= 0) {
  //       this.product[index].productQty = 0;
  //     }
  //   }
  // }
  // dataSendToBag(index: any) {
  //   console.log(index)
  //   console.log(this.product[index])
  //   console.log(this.product[index].productName)
  //   console.log(this.bagData)
  //   if(this.bagData.length<=0){
  //     this.bagData.push(this.product[index])
  //     console.log(this.bagData)
  //   }else {
  //     for (let i = 0; i < this.bagData.length; i++){
  //       if (this.product[index].productName == this.bagData[i].productName) {
  //         console.log(this.product[index].productName)
  //         console.log(this.bagData[i].productName)
  //         let val =this.product[index].productQty
  //         console.log(val)
  //         this.bagData[i].productQty = val
  //         // this.bagData.pop(this.product[index])
  //       }
  //        else if(this.product[index].productName !== this.bagData[i].productName) {
  //         this.bagData.push(this.product[index])
  //         console.log(this.bagData)
  //       }
  //     }
  //   }
    
  //   // this.bagData.push(this.product[index])
  //   this.tPrice = this.product[index].productQty * this.product[index].productPrice;
  // }
  quantity(conmd : any,prod:any ){
    if(conmd =='add'){
      prod.productQty++
      console.log(prod.productQty)
    }else if(conmd =='remove'){
      if(prod.productQty<=0){
        return
      }else{ 
        prod.productQty--
      }
    }
  }
  


  dataSendToBag(data:any) {
    let newData =Object.assign({},data)
    newData.productPrice=data.productPrice * data.productQty
    this.bagData.push(newData);
}

addToCart(prod : any ){
  let flag = false;
  let newData =Object.assign({},prod)
  for(let i of this.bagData){
    if(i.productId == prod.productId){
      i.productPrice = prod.productQty * prod.productPrice
      i.productQty = prod.productQty
      flag = true
    }
  }
 if(!flag){
  //  this.bagData.push(newData) 
  this.dataSendToBag(prod)
 }
 this.updateTotal()
}
  updateTotal(){
    this.total = 0
    for(let i of this.bagData){
        this.total+=i.productPrice
    }
    console.log(this.total)
  }
}




