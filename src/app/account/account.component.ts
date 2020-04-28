import { Component, Input } from '@angular/core';
import { LogginService } from '../Services/loggin.service';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LogginService, AccountService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  // Injecting the server
  constructor(private logginService: LogginService,
              private accountService: AccountService){}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // Accessing the service method
    this.logginService.logStatusChange(status);
  }
}
