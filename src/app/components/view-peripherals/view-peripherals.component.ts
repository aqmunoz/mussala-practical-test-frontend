import { Gateway } from './../../shared/gateway';
import { Peripheral } from './../../shared/peripheral';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import { ApiService } from './../../shared/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-peripherals',
  templateUrl: './view-peripherals.component.html',
  styleUrls: ['./view-peripherals.component.css']
})
export class ViewPeripheralsComponent implements OnInit {
  position = new FormControl('above');
  peripheralsData: any = [];
  gateway: Gateway;
  dataSource: MatTableDataSource<Peripheral>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'uid', 'vendor', 'createdAt', 'status', 'action'];

  constructor(private gatewayApi: ApiService, private routeActive: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.gatewayApi.GetGateway(this.routeActive.snapshot.params.id).subscribe(res => {      
      this.gateway = res;      
      this.gatewayApi.GetPeripherals(this.gateway._id).subscribe(data => {
        this.peripheralsData = data.peripherals;    
        this.dataSource = new MatTableDataSource<Peripheral>(this.peripheralsData);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        }, 0);
      })
    });  
    
  }

  deletePeripheral(index: number, e){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.gatewayApi.DeletePeripheral(e._id).subscribe()
    }
  }

}
