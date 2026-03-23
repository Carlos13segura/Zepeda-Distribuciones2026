import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from '../icon/icon.component';


@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './whatsapp-button.component.html',

  styleUrls: ['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent {
}
