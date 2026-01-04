import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { CarritoComponent } from './components/carrito/carrito';
import { CartConfirmationComponent } from './components/cart-confirmation/cart-confirmation';
import { PrivacySettingsComponent } from './components/privacy-settings/privacy-settings.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, WhatsappButtonComponent, PrivacySettingsComponent, FooterComponent, CarritoComponent, CartConfirmationComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('LTH');
}
