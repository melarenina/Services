import { Component} from '@angular/core';
import { LogginService } from '../Services/loggin.service';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // Providing the service, so Angular knows how to instanciate
  providers: [LogginService, AccountService]
})
export class NewAccountComponent {

  // Injecting the server
  constructor(private logginService: LogginService,
              private accountService: AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // Accessing the service method
    this.logginService.logStatusChange(accountStatus);

  }
}
