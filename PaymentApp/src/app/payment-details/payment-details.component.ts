import { Component,OnInit } from '@angular/core';
import { PaymentDetailFormComponent } from "./payment-detail-form/payment-detail-form.component";
import { PaymentDetailService } from '../shared/payment-detail.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentDetail } from '../shared/payment-detail.model';

@Component({
  selector: 'app-payment-details',
  imports: [PaymentDetailFormComponent,HttpClientModule,CommonModule,FormsModule,ReactiveFormsModule],
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

    console.log("PF Functions clicked",selectedRecord)
    this.service.formData = Object.assign({},selectedRecord);
    console.log("PF Functions clicked 2",this.service.formData)
  }

  toggleEdit(pd: PaymentDetail) {
    if (pd.isEditing) {
      // Save changes
      this.service.putPaymentDetails(pd.paymentDetailId,pd).subscribe({
        next: () => {
          alert('Payment detail updated successfully');
          pd.isEditing = false; // Exit edit mode
        },
        error: (err) => {
          console.log('Error updating payment detail:', err);
        }
      });
    } else {
      // Enter edit mode
      pd.isEditing = true;
    }
  }


  onDelete(selectedRecordId: number)
  {
    if(confirm('Are you sure to delete this record'))
    {
      this.service.deletePaymentDetails(selectedRecordId).
      subscribe({
        next: res =>{
          this.service.list = res as PaymentDetail[]
          console.log(res)
        },
        error: err =>{
          console.log(err)
        }
      });
    }
    
  }
}
