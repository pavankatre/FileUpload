import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../dashboard/shared/services/dashboard.service';
import { v4 as uuidv4 } from 'uuid';
import { SizeValidetor } from '../shaird/validator/sizeValidetor';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  prodForm: FormGroup | any;
  img: any;
  imgFile: any;
  constructor(private fb: FormBuilder, private dashboardServ: DashboardService) { }

  ngOnInit(): void {
    this.prodForm = this.fb.group({
      productId: this.fb.control('', Validators.required),
      productImg: this.fb.control('', [Validators.required, SizeValidetor.imgSizeValidetor]),
      productName: this.fb.control('', Validators.required),
      productPrice: this.fb.control('', Validators.required),
      productQty: this.fb.control(1, Validators.required)
    })
  }
  //for :- send all input data to servic
  addValu() {
    this.prodForm.value.productId = uuidv4();
    this.prodForm.value.productImg = this.imgFile
    this.dashboardServ.getvalu(this.prodForm.value)
    this.prodForm.reset()
  }
   // for validation and get image file
  getFile(event: any) {
    this.img = event.target.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (ev: any) => {
      this.imgFile = ev.target.result;
    }
  }

}
