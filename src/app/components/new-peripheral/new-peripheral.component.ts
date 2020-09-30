import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-peripheral',
  templateUrl: './new-peripheral.component.html',
  styleUrls: ['./new-peripheral.component.css']
})
export class NewPeripheralComponent implements OnInit {
  selectable = true;
  @ViewChild('resetPeripheralForm') myNgForm; 
  SectioinArray: any = ['online','offline'];
  position = new FormControl('above');
  peripheralForm: FormGroup;

  gatewayId: BigInteger;

  constructor(public fb: FormBuilder,
              private router: Router,
              private ngZone: NgZone,
              private peripheralApi: ApiService,
              private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.peripheralForm = this.fb.group({
      vendor: ['', [Validators.required]],
      status: ['', [Validators.required]]      
    });
    this.gatewayId = this.routeActive.snapshot.params.id;
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.peripheralForm.controls[controlName].hasError(errorName);
  }  

  /* Submit book */
  submitPeripheralForm() {
    if (this.peripheralForm.valid) {           
      this.peripheralForm.value.owner = this.gatewayId;
      console.log(this.peripheralForm.value);
      this.peripheralApi.AddPeripheral(this.peripheralForm.value).subscribe(res => {
        if(res.error){          
          alert(res.msg);                    
        }
        else{
          let url = '/view-peripherals-gateway/' + this.gatewayId;
          this.ngZone.run(() => this.router.navigateByUrl(url))
        }
      });
    }
  }

}
