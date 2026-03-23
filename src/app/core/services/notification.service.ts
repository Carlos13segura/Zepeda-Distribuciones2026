import { Injectable, signal } from '@angular/core';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface Notification {
  id: number;
  type: NotificationType;
  message: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications = signal<Notification[]>([]);
  public readonly list = this.notifications.asReadonly();
  private counter = 0;

  show(message: string, type: NotificationType = 'info', duration: number = 4000) {
    const id = ++this.counter;
    const newNotification: Notification = { id, type, message, duration };
    
    this.notifications.update(list => [...list, newNotification]);

    if (duration > 0) {
      setTimeout(() => this.remove(id), duration);
    }
    
    return id;
  }

  success(message: string, duration?: number) {
    return this.show(message, 'success', duration);
  }

  error(message: string, duration?: number) {
    return this.show(message, 'error', duration);
  }

  info(message: string, duration?: number) {
    return this.show(message, 'info', duration);
  }

  warning(message: string, duration?: number) {
    return this.show(message, 'warning', duration);
  }

  remove(id: number) {
    this.notifications.update(list => list.filter(n => n.id !== id));
  }
}
