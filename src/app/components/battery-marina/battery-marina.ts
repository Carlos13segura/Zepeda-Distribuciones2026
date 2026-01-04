import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface MarinaProduct {
    model: string;
    category: string;
    categoryIcon: string;
    voltage: string;
    capacity: string;
    cca: string;
    warranty: string;
    price: string;
    image: string;
    description: string;
    isPremium?: boolean;
    link?: string;
}

@Component({
    selector: 'app-battery-marina',
    standalone: true,
    imports: [CommonModule, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './battery-marina.html',
    styleUrls: ['./battery-marina.scss']
})
export class BatteryMarinaComponent {

    products: MarinaProduct[] = [
        {
            model: "L-24M-500",
            category: "Arranque",
            categoryIcon: "bi-speedometer2",
            voltage: "12V",
            capacity: "85Ah",
            cca: "650 CCA",
            warranty: "36 meses",
            price: "$3,070.00 MXN",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-marinas/l-24m-500-front.png?sfvrsn=7f864e26_2",
            description: "Batería de arranque especializada para lanchas deportivas y embarcaciones de recreo. Diseñada con tecnología PowerFrame® que proporciona arranque rápido y confiable para motores fuera de borda de hasta 150HP en condiciones marinas adversas.",
            isPremium: false,
            link: "/catalogo-baterias/l-24m-500"
        },
        {
            model: "L-24MDC-140",
            category: "Ciclado Profundo",
            categoryIcon: "bi-tsunami",
            voltage: "12V",
            capacity: "85Ah",
            cca: "650 CCA",
            warranty: "36 meses",
            price: "$3,390.00 MXN",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-marinas/l-24mdc-140-front.png?sfvrsn=73ac40e4_2",
            description: "Batería de ciclado profundo ideal para sistemas eléctricos de embarcaciones. Perfecta para alimentar equipos de navegación, luces y accesorios durante largas travesías marinas.",
            isPremium: false,
            link: "/catalogo-baterias/l-24mdc-140"
        },
        {
            model: "L-27MDC-160",
            category: "Ciclado Profundo",
            categoryIcon: "bi-tsunami",
            voltage: "12V",
            capacity: "85Ah",
            cca: "650 CCA",
            warranty: "36 meses",
            price: "$4,020.00 MXN",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-marinas/l-27mdc-160-front.png?sfvrsn=5a455f91_2",
            description: "Batería marina de alto rendimiento con capacidad extendida. Diseñada para embarcaciones medianas con múltiples sistemas eléctricos y electrónicos de navegación.",
            isPremium: false,
            link: "/catalogo-baterias/l-27mdc-160"
        },
        {
            model: "L-29DC-210",
            category: "Ciclado Profundo",
            categoryIcon: "bi-tsunami",
            voltage: "12V",
            capacity: "85Ah",
            cca: "650 CCA",
            warranty: "36 meses",
            price: "$5,140.00 MXN",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-marinas/l-29dc-210-front.png?sfvrsn=532856a6_2",
            description: "Batería profesional para embarcaciones grandes. Ofrece máxima capacidad de reserva para sistemas de navegación avanzados, radar, GPS y equipos de comunicación.",
            isPremium: true,
            link: "/catalogo-baterias/l-29dc-210"
        },
        {
            model: "L-4DM-390M",
            category: "Ciclado Profundo",
            categoryIcon: "bi-tsunami",
            voltage: "12V",
            capacity: "85Ah",
            cca: "650 CCA",
            warranty: "36 meses",
            price: "$7,600.00 MXN",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-servicio-pesado/l-4dm-390m-front.png?sfvrsn=a29f21a9_2",
            description: "Batería marina de máxima capacidad para yates y embarcaciones de lujo. Tecnología de punta que garantiza energía continua para todos los sistemas a bordo durante travesías prolongadas.",
            isPremium: true,
            link: "/catalogo-baterias/l-4dm-390m"
        }
    ];

    stats = {
        vessels: "2500+",
        ports: "150+",
        certification: "ISO"
    };
}
