import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface GolfProduct {
    model: string;
    voltage: string;
    capacity: string;
    cca: string;
    price: string;
    image: string;
    category: string;
    link: string;
}

@Component({
    selector: 'app-battery-golf',
    standalone: true,
    imports: [CommonModule, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './battery-golf.html',
    styleUrls: ['./battery-golf.scss']
})
export class BatteryGolfComponent {

    products6V: GolfProduct[] = [
        {
            model: "L-GC2-101",
            voltage: "12V",
            capacity: "105 Ah",
            cca: "650 CCA",
            price: "$5,330.00 MXN",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth-golf-gc2-101.png?sfvrsn=424d9ea8_1",
            category: "6 Voltios",
            link: "/catalogo-baterias/l-gc2-101"
        },
        {
            model: "L-GC2-115",
            voltage: "12V",
            capacity: "105 Ah",
            cca: "650 CCA",
            price: "$6,820.00 MXN",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth-golf-gc2-115.png?sfvrsn=dbd06b01_1",
            category: "6 Voltios",
            link: "/catalogo-baterias/l-gc2-115"
        }
    ];

    products8V: GolfProduct[] = [
        {
            model: "L-GC8-110",
            voltage: "12V",
            capacity: "105 Ah",
            cca: "650 CCA",
            price: "$5,930.00 MXN",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/l-gc2-110-golf.png?sfvrsn=ccafb9ae_1",
            category: "8 Voltios",
            link: "/catalogo-baterias/l-gc8-110"
        }
    ];
}
