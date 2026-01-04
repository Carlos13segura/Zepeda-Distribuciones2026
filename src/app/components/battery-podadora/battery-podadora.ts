import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface PodadoraProduct {
    model: string;
    voltage: string;
    capacity: string;
    cca: string;
    workTime: string;
    warranty: string;
    price: string;
    images: string[];
    carouselId: string;
    link: string;
}

@Component({
    selector: 'app-battery-podadora',
    standalone: true,
    imports: [CommonModule, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './battery-podadora.html',
    styleUrls: ['./battery-podadora.scss']
})
export class BatteryPodadoraComponent {

    product: PodadoraProduct = {
        model: "L-U1-340",
        voltage: "12V",
        capacity: "35 Ah",
        cca: "280 CCA",
        workTime: "2-3 horas continuas",
        warranty: "12 Meses",
        price: "$2,070.00 MXN",
        carouselId: "carouselPodadora1",
        images: [
            "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-podadora/l-u1-340-front.png?sfvrsn=83c406e7_2",
            "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-podadora/l-u1-340-der.png?sfvrsn=d93c8939_2",
            "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-podadora/l-u1-340-izq.png?sfvrsn=9e2e4665_2"
        ],
        link: "/catalogo-baterias/l-u1-340"
    };
}
