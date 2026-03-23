import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/components/menu/menu';
import { WhatsappButtonComponent } from './shared/components/whatsapp-button/whatsapp-button.component';

import { PrivacySettingsComponent } from './shared/components/privacy-settings/privacy-settings.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ToastContainerComponent } from './shared/components/toast-container/toast-container';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, WhatsappButtonComponent, PrivacySettingsComponent, FooterComponent, ToastContainerComponent],
  template: `

    <app-menu></app-menu>
    <main>
      <router-outlet></router-outlet>
    </main>

    @defer (on viewport) {
      <app-footer></app-footer>
    } @placeholder {
      <div style="height: 300px; background: #f9fafb;"></div>
    }

    @defer (on idle) {
      <app-whatsapp-button></app-whatsapp-button>
      <app-toast-container></app-toast-container>
      <app-privacy-settings></app-privacy-settings>
    }
  `,
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('LTH');
}
