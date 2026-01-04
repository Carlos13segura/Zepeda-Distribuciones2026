import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface HeavyDutyProduct {
    model: string;
    cca: string;
    price: string;
    images: string[];
    carouselId: string;
    link?: string;
}


@Component({
    selector: 'app-battery-heavy-duty',
    standalone: true,
    imports: [CommonModule, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './battery-heavy-duty.html',
    styleUrls: ['./battery-heavy-duty.scss']
})
export class BatteryHeavyDutyComponent {

    heavyDutyProducts: HeavyDutyProduct[] = [
        {
            model: "L-31T-700 HD",
            cca: "450 CCA",
            price: "$4,050.00 MXN",
            carouselId: "carouselHD1",
            images: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-heavy-duty/l-31t-700-hd-sup-front-2019.png?sfvrsn=4d96f36b_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-heavy-duty/l-31t-700-hd-sup-der-2019.png?sfvrsn=7a67ab7f_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-heavy-duty/l-31t-700-hd-sup-izq-2019.png?sfvrsn=1fcfac61_2"
            ],
            link: "/catalogo-baterias/l-31t-700-hd",
        },
        {
            model: "L-31T-950 HD",
            cca: "400 CCA",
            price: "$4,470.00 MXN",
            carouselId: "carouselHD2",
            images: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-heavy-duty/l-31t-950-hd-sup-front-2019.png?sfvrsn=106d0e2_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-heavy-duty/l-31t-950-hd-sup-izq-2019.png?sfvrsn=ac960078_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-heavy-duty/l-31t-950-hd-sup-der-2019.png?sfvrsn=24fa96f9_2"
            ],
            link: "/catalogo-baterias/l-31t-950-hd",
        },
        {
            model: "L-4DM-1300 HD",
            cca: "400 CCA",
            price: "$7,380.00 MXN",
            carouselId: "carouselHD3",
            images: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-heavy-duty/l-4dm-1300-hd-front.png?sfvrsn=9ccd29ed_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-heavy-duty/l-4dm-1300-hd-izq.png?sfvrsn=6c52be1a_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-heavy-duty/l-4dm-1300-hd-der.png?sfvrsn=c0c87f66_2"
            ],
            link: "/catalogo-baterias/l-4dm-1300-hd",
        },
        {
            model: "L-8D-1400 HD",
            cca: "400 CCA",
            price: "$7,770.00 MXN",
            carouselId: "carouselHD4",
            images: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-heavy-duty/l-8d-1400-hd-front.png?sfvrsn=1c764d7d_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-heavy-duty/l-8d-1400-hd-izq.png?sfvrsn=6fcd4eec_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-heavy-duty/l-8d-1400-hd-der.png?sfvrsn=841ac9c6_2"
            ],
            link: "/catalogo-baterias/l-8d-1400-hd",
        }
    ];
}
