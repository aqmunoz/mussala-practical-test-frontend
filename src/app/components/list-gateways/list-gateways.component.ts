import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import { Gateway } from '../../shared/gateway';
import { ApiService } from './../../shared/api.service';

@Component({
  selector: 'app-list-gateways',
  templateUrl: './list-gateways.component.html',
  styleUrls: ['./list-gateways.component.css']
})
export class ListGatewaysComponent implements OnInit {
  position = new FormControl('above');
  gatewayData: any = [];
  dataSource: MatTableDataSource<Gateway>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'name', 'serial', 'address', 'action'];

  constructor(private gatewayApi: ApiService) { 
    this.gatewayApi.GetGateways().subscribe(data => {
      this.gatewayData = data;      
      this.dataSource = new MatTableDataSource<Gateway>(this.gatewayData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }

  ngOnInit(): void {
  }

  deleteGateway(index: number, e){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.gatewayApi.DeleteGateway(e._id).subscribe()
    }
  }

}
