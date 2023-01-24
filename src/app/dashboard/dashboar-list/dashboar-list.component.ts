import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../shared/services/dashboard.service';

@Component({
  selector: 'app-dashboar-list',
  templateUrl: './dashboar-list.component.html',
  styleUrls: ['./dashboar-list.component.css']
})
export class DashboarListComponent implements OnInit {
productlist:any;
  constructor( private dashServ : DashboardService) { }

  ngOnInit(): void {
// this.productlist=this.dashServ.dashListCopyData
  }

}
