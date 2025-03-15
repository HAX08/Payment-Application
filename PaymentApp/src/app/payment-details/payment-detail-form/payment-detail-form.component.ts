import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-payment-detail-form',
  imports: [FormsModule,CommonModule,ToastModule,ReactiveFormsModule],
  templateUrl: './payment-detail-form.component.html',
  styles: ``,
  providers: [PaymentDetailService,HttpClient]

})
export class PaymentDetailFormComponent {
  constructor(public service: PaymentDetailService){

  }

  onSubmit(form:NgForm)
  {
    this.service.formSubmitted= true;
    if(form.valid)
    {
      if(this.service.formData.paymentDetailId == 0)
      {
        this.insertRecord(form);
      }
      else
      {
        //this.updateRecord(form);
      }
    }
    
  }

  insertRecord(form:NgForm)
  {
    this.service.postPaymentDetal().
      subscribe({
        next: res =>{
          this.service.list = res as PaymentDetail[]
          this.service.resetForm(form)
          alert('Payment Details successfully registered');
        },
        error: err =>{
          console.log(err)
        }
      });
  }

  // updateRecord(form:NgForm)
  // {
  //   this.service.putPaymentDetails().
  //     subscribe({
  //       next: res =>{
  //         this.service.list = res as PaymentDetail[]
  //         this.service.resetForm(form)
  //         alert('Payment Details successfully updated');
  //       },
  //       error: err =>{
  //         console.log(err)
  //       }
  //     });
  // }




}
