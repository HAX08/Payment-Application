import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment.development';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  url:string = environment.apiBaseUrl + '/PaymentDetails'
  list:PaymentDetail[] = [];
  formData : PaymentDetail = new PaymentDetail();
  formSubmitted: boolean = false;
  constructor(private http: HttpClient) { 

  }

  refreshList()
  {
    this.http.get(this.url)
    .subscribe({
      next: res=>{
        this.list = res as PaymentDetail[]
      },
      error: err => {console.log(err)}
    });
  }

  postPaymentDetal()
  {
    return this.http.post(this.url, this.formData);
  }

  resetForm(forms:NgForm)
  {
    forms.form.reset();
    this.formData = new PaymentDetail();
    this.formSubmitted = false;
    console.log('Form reset');
    this.refreshList();
  }

  putPaymentDetails(id:number,data:PaymentDetail)
  {
    return this.http.put(this.url + '/'+id,data);
  }

  deletePaymentDetails(id: number)
  {
    return this.http.delete(this.url + '/'+id);
  }
  
  
}
