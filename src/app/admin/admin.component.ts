import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../shared/services/loader.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  public firstName: string = 'System';
  public lastName: string = 'Admin';

  constructor(private router: Router, private loaderService: LoaderService) {
    // this.firstName = this.mockUserData.FirstName;
    // this.lastName = this.mockUserData.LastName;
  }

  ngOnInit(): void {
    this.loaderService.show();
  }

  public async NavigateToHome(): Promise<void> {
    await this.router.navigateByUrl('http://localhost:4200/');
  }

  public async NavigateToUsersSummary(): Promise<void> {
    await this.router.navigate(['admin/users']);
  }

  public async NavigateToPayoutsSummary(): Promise<void> {
    await this.router.navigate(['admin/payouts']);
  }

  public async NavigateToPollsSummary(): Promise<void> {
    await this.router.navigate(['admin/polls']);
  }

  public async NavigateToSurveys(): Promise<void> {
    await this.router.navigate(['admin/surveys/summary']);
  }

  public async NavigateToRewardsSummary(): Promise<void> {
    await this.router.navigate(['admin/rewards']);
  }
}
