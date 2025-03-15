import { Component } from '@angular/core';
import { PaymentDetailsComponent } from "./payment-details/payment-details.component";

@Component({
  selector: 'app-root',
  imports: [PaymentDetailsComponent],
  standalone: true, 
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {

}
