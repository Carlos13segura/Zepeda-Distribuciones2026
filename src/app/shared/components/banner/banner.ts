import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.html',
  styleUrls: ['./banner.scss']
})
export class BannerComponent {
  @Input() backgroundImage = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() buttonText = 'Ver más';
  @Input() buttonLink = '/';
  
  constructor(private router: Router) {}
  
  navigateOrScroll(event: Event): void {
    event.preventDefault();
    if (this.buttonLink.startsWith('#')) {
      const element = document.querySelector(this.buttonLink);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigateByUrl(this.buttonLink);
    }
  }
}
