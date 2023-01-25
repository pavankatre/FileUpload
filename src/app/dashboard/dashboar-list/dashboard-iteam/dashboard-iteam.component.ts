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
  
  constructor(private dashServ: DashboardService){ }

  ngOnInit(): void {
    this.product = this.dashServ.sendToChild()
    console.log('this is data',this.dashServ.sendToChild())
    console.log(this.bagData)
  }
//For increase/decrease  quantity
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
  
//Add to bag If not added
  dataSendToBag(data:any) {
    let newData =Object.assign({},data)
    newData.productPrice=data.productPrice * data.productQty
    this.bagData.push(newData);
}
//Add to bag If already added 
addToCart(prod : any ){
  let flag = false;
  let newData =Object.assign({},prod)
  for(let i of this.bagData){
    if(i.productId == prod.productId){
      i.productPrice = prod.productQty * prod.productPrice
      i.productQty = prod.productQty
      flag = true;
    }
  }
 if(!flag){
  this.dataSendToBag(prod)
 }
 this.updateTotal()
}

//For Total 
  updateTotal(){
    this.total = 0
    for(let i of this.bagData){
        this.total+=i.productPrice
    }
    console.log(this.total)
  }
}
