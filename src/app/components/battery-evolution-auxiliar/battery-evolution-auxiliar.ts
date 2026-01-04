import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface AuxiliarProduct {
    model: string;
    cca: string;
    price: string;
    images: string[];
    link: string;
}

@Component({
    selector: 'app-battery-evolution-auxiliar',
    standalone: true,
    imports: [CommonModule, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './battery-evolution-auxiliar.html',
    styleUrls: ['./battery-evolution-auxiliar.scss']
})
export class BatteryEvolutionAuxiliarComponent {

    products: AuxiliarProduct[] = [
        {
            model: "AUX12",
            cca: "450 CCA",
            price: "$2,200.00 MXN",
            images: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution-auxiliar/179669-lth_evolution_auto_aux12_front.png?sfvrsn=cd830d49_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution-auxiliar/179669-lth_evolution_auto_aux12_3-4_right_v01.png?sfvrsn=22528d48_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution-auxiliar/179669-lth_evolution_auto_aux12_3-4_left.png?sfvrsn=975bc56f_1"
            ],
            link: "/catalogo-baterias/aux12"
        },
        {
            model: "AUX14",
            cca: "400 CCA",
            price: "$2,200.00 MXN",
            images: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution-auxiliar/179670-lth_evolution_auto_aux14_front.png?sfvrsn=218f71e7_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution-auxiliar/179670-lth_evolution_auto_aux14_3-4_right_v01.png?sfvrsn=cd55e502_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution-auxiliar/179670-lth_evolution_auto_aux14_3-4_left.png?sfvrsn=6c47e43c_1"
            ],
            link: "/catalogo-baterias/aux14"
        }
    ];

    scrollToProducts() {
        const element = document.querySelector('.auxiliar-product-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
