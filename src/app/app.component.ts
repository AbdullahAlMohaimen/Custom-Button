import { Component } from '@angular/core';
import { contacts } from './contacts';

@Component({
  selector: 'my-app',
  templateUrl: './Button.html',
  styleUrls: ['./Button.scss'],
})
export class AppComponent {
  public contacts: any[] = contacts;
}
