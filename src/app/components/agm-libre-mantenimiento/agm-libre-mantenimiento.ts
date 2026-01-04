import { Component, ViewEncapsulation, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

declare var bootstrap: any;

interface AgmProduct {
    title: string;
    price: string;
    carouselImages: string[];
    voltage: string;
    amp: string;
    warranty: string;
    application: string; // e.g. "Para motocicletas"
    technology: string; // e.g. "Libre de mantenimiento"
    link: string;
}

@Component({
    selector: 'app-agm-libre-mantenimiento',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './agm-libre-mantenimiento.html',
    styleUrls: ['./agm-libre-mantenimiento.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AgmLibreMantenimientoComponent implements AfterViewInit {

    products: AgmProduct[] = [
        {
            title: "TX4L-BS",
            price: "$590.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/tx4l-bs-front-2020.png?sfvrsn=8febeb99_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/tx4l-bs-left-2020.png?sfvrsn=4a52416d_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/tx4l-bs-der-2020.png?sfvrsn=381eeebc_2"
            ],
            voltage: "12V",
            amp: "4Ah",
            warranty: "Garantía 12 meses",
            application: "Para motocicletas",
            technology: "Libre de mantenimiento",
            link: "/catalogo-moto-baterias/AGM/TX4L-BS" // To be filled by user
        },
        {
            title: "TX5L-BS",
            price: "$660.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx5l-bs-front-2020.png?sfvrsn=1d7f55cc_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx5l-bs-left-2020.png?sfvrsn=7ccb9c8c_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx5l-bs-der-2020.png?sfvrsn=1110dff1_2"
            ],
            voltage: "12V",
            amp: "45Ah",
            warranty: "Garantía 18 meses",
            application: "Para motocicletas",
            technology: "Ácido líquido",
            link: "/catalogo-moto-baterias/AGM/TX5L-BS"
        },
        {
            title: "TX6.5L-BS",
            price: "$720.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/tx6-5l-bs-frentee2f4f42f-d225-47df-8a90-25205bd99e0e.png?sfvrsn=fc8e66ad_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/tx6-5l-bs-lateral-262fce908-93ef-4df4-8072-2035637a8578.png?sfvrsn=8b0c596d_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/tx6-5l-bs-lateral3e4236f9-0c86-483d-875e-a8c7f1637994.png?sfvrsn=462a4ded_1"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/TX6.5L-BS"
        },
        {
            title: "TX7A-BS",
            price: "$820.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx7a-bs-front-2020.png?sfvrsn=c8ebec74_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx7a-bs-der-2020.png?sfvrsn=c066212d_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx7a-bs-left-2020.png?sfvrsn=c4e5e6b4_2"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/TX7A-BS"
        },
        {
            title: "TX7L-BS",
            price: "$830.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx7l-bs-front.png?sfvrsn=bd84dd97_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx7l-bs-left.png?sfvrsn=a9526b5b_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx7l-bs-der.png?sfvrsn=ab7b3524_2"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/TX7L-BS"
        },
        {
            title: "TX9-BS",
            price: "$990.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx9-bs-front-2020.png?sfvrsn=b9939a1e_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx9-bs-left-2020.png?sfvrsn=b5090b5_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx9-bs-der-2020.png?sfvrsn=8ac82915_2"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/TX9-BS"
        },
        {
            title: "T7B-BS",
            price: "$1,040.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-t7b-bs-2020.png?sfvrsn=fcc5c0be_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-t7b-bs-pack-2020.png?sfvrsn=3bf599e5_2"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/T7B-BS"
        },
        {
            title: "T9B-BS",
            price: "$1,200.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-t9b-bs-2020.png?sfvrsn=db7f62ae_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-t9b-bs-pack-2020.png?sfvrsn=96d2f8d7_2"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/T9B-BS"
        },
        {
            title: "TX12-BS",
            price: "$1,250.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx12-bs-front-2020.png?sfvrsn=568e8064_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx12-bs-der-2020.png?sfvrsn=aa0bbfe5_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx12-bs-pack-2020.png?sfvrsn=9ab99ada_2"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/TX12-BS"
        },
        {
            title: "TZ10S-BS",
            price: "$1,270.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tz10s-bs-front-2020.png?sfvrsn=48ac5550_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tz10s-bs-pack-2020.png?sfvrsn=a8d671ed_2"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/TZ10S-BS"
        },
        {
            title: "7-A",
            price: "$1,310.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx14l-bs-front-2020.png?sfvrsn=8bd0aae4_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx14l-bs-pack-2020.png?sfvrsn=3339f6e0_2"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/7-A"
        },
        {
            title: "TX14-BS",
            price: "$1,310.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx14-bs-front-lth-2020.png?sfvrsn=3cce3de2_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx14-bs-left-lth-2020.png?sfvrsn=9fcd6e0d_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx14-bs-der-lth-2020.png?sfvrsn=65296959_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx14-bs-pack-2020.png?sfvrsn=22b51f31_2"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/TX14-BS"
        },
        {
            title: "T12B-BS",
            price: "$1,320.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-t12b-bs-2020.png?sfvrsn=1ff31107_2"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/T12B-BS"
        },
        {
            title: "TX14AH-BS",
            price: "$1,440.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx14ah-bs-pack-2020.png?sfvrsn=cc31390c_2"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/TX14AH-BS"
        },
        {
            title: "TX14AHL-BS",
            price: "$1,440.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx14ahl-bs-front-2020.png?sfvrsn=65e6dcc4_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx14ahl-bs-pack-2020.png?sfvrsn=7a855fd4_2"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/TX14AHL-BS"
        },
        {
            title: "T14B-BS",
            price: "$1,440.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-t14b-bs-front.png?sfvrsn=42d01a98_2"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/T14B-BS"
        },
        {
            title: "TX20HL-BS",
            price: "$1,660.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx20hl-bs-front-2020.png?sfvrsn=d07567d9_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx20hl-bs-pack-2020.png?sfvrsn=f8eb4caa_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx20hl-bs-left-2020.png?sfvrsn=641b12bb_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx20hl-bs-der-2020.png?sfvrsn=3ca7442d_2"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/TX20HL-BS"
        },
        {
            title: "TX20CH-BS",
            price: "$2,230.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx20ch-bs-front.png?sfvrsn=d81825f4_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx20ch-bs-pack-2020.png?sfvrsn=5af73f9b_2"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/TX20CH-BS"
        },
        {
            title: "TX24HL-BS",
            price: "$2,400.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx24hl-bs-front-2020.png?sfvrsn=adc91b83_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx24hl-bs-pack-2020.png?sfvrsn=bad3b8a1_2"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/TX24HL-BS"
        },
        {
            title: "TX30L-BS",
            price: "$3,100.00",
            carouselImages: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx30l-bs-front-2020.png?sfvrsn=6d45dee_2",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-tx30l-bs-pack-2020.png?sfvrsn=71701ced_2"
            ],
            voltage: "12V",
            amp: "100Ah",
            warranty: "Garantía 24 meses",
            application: "Para motocicletas",
            technology: "Alto rendimiento",
            link: "/catalogo-moto-baterias/AGM/TX30L-BS"
        }
    ];

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            // Initialize all carousels manually
            const carousels = document.querySelectorAll('.carousel');
            carousels.forEach(carousel => {
                new bootstrap.Carousel(carousel, {
                    interval: false, // Disable auto-sliding if preferred, or keep default
                    wrap: true
                });
            });
        }
    }
}
