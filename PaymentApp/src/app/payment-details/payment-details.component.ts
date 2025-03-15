import { Component } from '@angular/core';
import { PaymentDetailFormComponent } from "./payment-detail-form/payment-detail-form.component";

@Component({
  selector: 'app-payment-details',
  imports: [PaymentDetailFormComponent,PaymentDetailFormComponent],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent {

}
