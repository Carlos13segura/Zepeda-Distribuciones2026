import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="iconify" 
          [attr.data-icon]="key" 
          [style.font-size.px]="size"
          [style.color]="color"
          aria-hidden="true">
    </span>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }
  `]
})
export class IconComponent {
  @Input({ required: true }) key!: string;
  @Input() size: number = 24;
  @Input() color: string = 'inherit';
}
