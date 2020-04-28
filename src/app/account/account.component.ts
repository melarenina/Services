import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogginService } from '../Services/loggin.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LogginService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  // Injecting the server
  constructor(private logginService: LogginService){}

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    // Accessing the service method
    this.logginService.logStatusChange(status);
  }
}
