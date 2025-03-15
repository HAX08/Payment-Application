import { Component,OnInit } from '@angular/core';
import { PaymentDetailFormComponent } from "./payment-detail-form/payment-detail-form.component";
import { PaymentDetailService } from '../shared/payment-detail.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentDetail } from '../shared/payment-detail.model';

@Component({
  selector: 'app-payment-details',
  imports: [PaymentDetailFormComponent,PaymentDetailFormComponent,HttpClientModule,CommonModule,FormsModule],
  standalone: true, 
  templateUrl: './payment-details.component.html',
  styles: ``,
  providers: [PaymentDetailService,HttpClient]
})
export class PaymentDetailsComponent implements OnInit{
  constructor(public service: PaymentDetailService){

  }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail)
  {
    this.service.formData = selectedRecord;
  }

  onDelete(selectedRecordId: number)
  {
    this.service.deletePaymentDetails(selectedRecordId).
      subscribe({
        next: res =>{
          this.service.list = res as PaymentDetail[]
        },
        error: err =>{
          console.log(err)
        }
      });
  }
}
