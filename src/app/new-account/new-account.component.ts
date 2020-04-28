import { Component, EventEmitter, Output } from '@angular/core';
import { LogginService } from '../Services/loggin.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // Providing the service, so Angular knows how to instanciate
  providers: [LogginService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // Injecting the server
  constructor(private logginService: LogginService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    // Accessing the service method
    this.logginService.logStatusChange(accountStatus);

  }
}
