import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-new-gateway',
  templateUrl: './new-gateway.component.html',
  styleUrls: ['./new-gateway.component.css']
})
export class NewGatewayComponent implements OnInit {
  gatewayForm: FormGroup;
  position = new FormControl('above');

  constructor(public fb: FormBuilder,
              private router: Router,
              private ngZone: NgZone,
              private gatewayApi: ApiService) { }

  ngOnInit(): void {
    this.gatewayForm = this.fb.group({
      name: ['', [Validators.required]],
      serial: ['', [Validators.required]],
      address: ['', [Validators.required]]
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.gatewayForm.controls[controlName].hasError(errorName);
  }  

  /* Submit book */
  submitGatewayForm() {
    if (this.gatewayForm.valid) {
      this.gatewayApi.AddGateway(this.gatewayForm.value).subscribe(res => {
        if(res.error){
          if(res.code == 1)
            this.gatewayForm.controls['address'].setErrors({incorrect: true});
          alert(res.msg);                    
        }
        else{
          this.ngZone.run(() => this.router.navigateByUrl('/gateways'))
        }
      });
    }
  }

}
