import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface TaxiProduct {
    model: string;
    cca: string;
    price: string;
    images: string[];
    carouselId: string;
    link: string;
}

@Component({
    selector: 'app-battery-taxi',
    standalone: true,
    imports: [CommonModule, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './battery-taxi.html',
    styleUrls: ['./battery-taxi.scss']
})
export class BatteryTaxiComponent {

    taxiProducts: TaxiProduct[] = [
        {
            model: "LTX-22F-600",
            cca: "450 CCA",
            price: "$3,420.00 MXN",
            carouselId: "carouselTaxi1",
            images: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-taxi/ltx-22f-600-front-nac.png?sfvrsn=6d2b4596_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-taxi/ltx-22f-600-izq-nac.png?sfvrsn=3647d119_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-taxi/ltx-22f-600-der-nac.png?sfvrsn=a2067cbc_2"
            ],
            link: '/catalogo-baterias/ltx-22f-600'
        },
        {
            model: "LTX-35-600",
            cca: "400 CCA",
            price: "$3,890.00 MXN",
            carouselId: "carouselTaxi2",
            images: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-taxi/ltx-35-600-front-nac.png?sfvrsn=d916a622_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-taxi/ltx-35-600-der-nac.png?sfvrsn=a0cbf79a_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-taxi/ltx-35-600-izq-nac.png?sfvrsn=70a074f3_2"
            ],
            link: '/catalogo-baterias/ltx-35-600'
        },
        {
            model: "LTX-47(LN2)-625",
            cca: "400 CCA",
            price: "$4,410.00 MXN",
            carouselId: "carouselTaxi3",
            images: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-taxi/ltx-47(ln2)-625-front-nac.png?sfvrsn=fc1cbd88_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-taxi/ltx-47(ln2)-625-der-nac.png?sfvrsn=9c5889e0_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-taxi/ltx-47(ln2)-625-izq-nac.png?sfvrsn=286ffeb7_2"
            ],
            link: '/catalogo-baterias/ltx-47-ln2-625'
        }
    ];

    scrollToProducts() {
        const element = document.querySelector('.taxi-product-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
