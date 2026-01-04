import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, linkedSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-battery-ciclado-profundo',
    standalone: true,
    imports: [CommonModule, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './battery-ciclado-profundo.html',
    styleUrls: ['./battery-ciclado-profundo.scss']
})
export class BatteryCicladoProfundoComponent {

    productImages: string[] = [
        "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-solar/lth-ciclado-profundo-solar-front-2019.png?sfvrsn=c658db8a_4",
        "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/servicio-pesado.png?sfvrsn=89d88df7_0",


    ];

    link = "/catalogo-baterias/l-31t-s-190m";

    currentSlide = 0;

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.productImages.length;
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.productImages.length) % this.productImages.length;
    }

    goToSlide(index: number) {
        this.currentSlide = index;
    }
}
