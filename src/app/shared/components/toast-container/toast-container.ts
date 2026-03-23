import { Component, inject, effect, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';


import { NotificationService } from '@core/services/notification.service';
import * as anime from 'animejs';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `

    <div class="toast-wrapper">
      @for (n of notificationService.list(); track n.id) {
        <div class="toast-card" 
             [class]="n.type"
             #toastCard>
          <div class="toast-content">
            <app-icon [key]="getIcon(n.type)" [size]="24" color="inherit"></app-icon>
            <span class="message">{{ n.message }}</span>
          </div>

          <button class="close-btn" (click)="notificationService.remove(n.id)">
            <i class="bi bi-x"></i>
          </button>
          <div class="toast-progress" [style.animation-duration.ms]="n.duration"></div>
        </div>
      }
    </div>
  `,
  styleUrls: ['./toast-container.scss']
})
export class ToastContainerComponent {
  public readonly notificationService = inject(NotificationService);
  @ViewChildren('toastCard') toastCards!: QueryList<ElementRef>;

  constructor() {
    // Watch for new notifications to animate them
    effect(() => {
      const list = this.notificationService.list();
      if (list.length > 0) {
        // Subtle entrance animation after change detection
        setTimeout(() => this.animateEntrance(), 0);
      }
    });
  }

  getIcon(type: string) {
    switch (type) {
      case 'success': return 'mdi:check-circle';
      case 'error': return 'mdi:alert-circle';
      case 'warning': return 'mdi:alert';
      default: return 'mdi:information';
    }
  }


  private animateEntrance() {
    const lastToast = this.toastCards.last?.nativeElement;
    if (lastToast && !lastToast.classList.contains('animated')) {
      lastToast.classList.add('animated');
      (anime as unknown as Function)({
        targets: lastToast,
        translateY: [20, 0],
        opacity: [0, 1],
        scale: [0.95, 1],
        duration: 400,
        easing: 'easeOutElastic(1, .8)'
      });
    }
  }
}
