import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '@core/services/animation.service';
import { BannerComponent } from '@shared/components/banner/banner';
import { ProductosComponent } from '@features/products/productos/productos';
import { CentrosComponent } from '@shared/components/centros/centros';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, BannerComponent, ProductosComponent, CentrosComponent],
    templateUrl: './home.html',
    styleUrls: ['./home.scss']
})
export class HomeComponent implements AfterViewInit {
    private animationService = inject(AnimationService);

    ngAfterViewInit() {
        // Sequentially animate the main sections
        this.animationService.slideIn('app-banner', 'top');
        this.animationService.slideIn('app-productos', 'bottom');
        this.animationService.fadeIn('app-centros', 1200);
    }
}

