import { Component, OnInit } from '@angular/core';
import { PayoutItem } from '../../shared/models/payout-batch-detail.model';
import { PayoutPayload, PayoutSenderBatchHeader } from '../../shared/models/payout.model';
import { TokenService } from '../../shared/services/token.service';
import { PayoutApiService } from './payouts.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-payouts',
  templateUrl: './payouts.component.html',
  styleUrl: './payouts.component.scss',  standalone: false
})
export class PayoutsComponent implements OnInit {
  public payload: PayoutPayload;
  public sender_batch_header: PayoutSenderBatchHeader;
  public payoutItems: any[];
  public response: any;
  public summaryResponse: any;
  public get isloggedIn(): boolean {
    return localStorage.getItem('logged_in') === 'yes';
  }
  public batchId: string = 'XX892UVUHXTG8';

  constructor(
    private authService: AuthService,
    private api: PayoutApiService,
    private tokenSvc: TokenService
  ) {
    this.sender_batch_header = {
      sender_batch_id: '202101220950',
      recipient_type: 'EMAIL',
      email_subject: 'You have money!',
      email_message: 'You received a payment. Thanks for using our service!',
    };

    this.payoutItems = [
      {
        amount: {
          value: 3.0,
          currency: 'USD',
        },
        sender_item_id: 911010024627913,
        recipient_wallet: 'PAYPAL',
        receiver: 'naresh.nannesa@gmail.com',
      },
    ];

    this.payload = {
      items: this.payoutItems,
      sender_batch_header: this.sender_batch_header,
    };
  }

  ngOnInit(): void { }

  login() {
    // Sandbox
    // const authPayload = {
    //   username: 'AVdwHCBPPmsbsXE4NAVVIuzjBTnI-Ri1QZdLXHL8cDVIMOJti-Dhr3BUt6rE9Okj8vovCSDrxGPALiFC',
    //   password: 'EH8iPtLfrkOZB8T1_1k3mX2Ai75xX9VwRTc1mgr93afFrilmv1w1t-sQpKjd4yafWXVCEekjpwjdffZj'
    // };

    // Live
    const authPayload = {
      username:
        'AaTZ-26N704BB6kiYsJgKkTcL9BPVrZ696XLEi77K6v4UHy_vWCSqvAu6faTCfD8EWLEv2PJe39IuceN',
      password:
        'EL-_Rbc1N7JyhS-AsbUJAnPIN4hsLS7cczNOeNiTbpEE2HA53NQqDtSMrwrWkpZxq0X1BYJc-CZut8oc',
    };

    this.authService.login(authPayload).subscribe(
      (res) => {
        localStorage.setItem('logged_in', 'yes');
        this.tokenSvc.saveToken(res.access_token);
        console.log('You are secure now!');
      },
      (err: any) => {
        console.log(err);
        localStorage.setItem('logged_in', 'no');
      }
    );
  }

  sendPayload(): void {
    this.api.postPaymentRequest(this.payload).subscribe(
      (result) => {
        this.response = result;
      },
      (err) => {
        this.response = this.authService.handleError(err);
      }
    );
  }

  getSummary(): void {
    const requestParams = {
      page: 1,
      page_size: 100,
      total_required: true,
    };

    if (this.isloggedIn) {
      this.api.getPayoutDetailsByBatchId(this.batchId, requestParams).subscribe(
        {
          next: (result) => this.summaryResponse = result,
          error: (err) => this.summaryResponse = this.authService.handleError(err),
          complete: () => console.info('complete'),
        }
      );
    }
  }
}
