import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface EvolutionProduct {
    model: string;
    cca: string;
    tech: string;
    price: string;
    images: string[];
    isHeavyDuty?: boolean;
    link: string;
}

@Component({
    selector: 'app-battery-evolution',
    standalone: true,
    imports: [CommonModule, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './battery-evolution.html',
    styleUrls: ['./battery-evolution.scss']
})
export class BatteryEvolutionComponent {

    products: EvolutionProduct[] = [
        {
            model: "L-35-650 AGM",
            cca: "650 CCA",
            tech: "AGM Start-Stop Ready",
            price: "$5,560.00 MXN",
            images: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_35-650_agm_front_mx.png?sfvrsn=afa2d152_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_35-650_agm_3-4_right_mx.png?sfvrsn=5912760e_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_35-650_agm_3-4_left_mx.png?sfvrsn=6a2cc9d3_1"
            ],
            link: "/catalogo-baterias/l-35-650-agm"
        },
        {
            model: "L-24F-710 AGM",
            cca: "710 CCA",
            tech: "AGM Start-Stop Ready",
            price: "$5,730.00 MXN",
            images: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_24f-710_agm_front_mx.png?sfvrsn=215a24d8_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_24f-710_agm_3-4_left_mx.png?sfvrsn=b7cae37c_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_24f-710_agm_3-4_right_mx.png?sfvrsn=9513fb7e_1"
            ],
            link: "/catalogo-baterias/l-24f-710-agm"
        },
        {
            model: "L-65-750 AGM",
            cca: "750 CCA",
            tech: "AGM Start-Stop Ready",
            price: "$6,070.00 MXN",
            images: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_65-750_agm_front_mx.png?sfvrsn=4231a704_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_65-750_agm_3-4_right_mx.png?sfvrsn=ab1973f_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_65-750_agm_3-4_left_mx.png?sfvrsn=fe2b33f4_1"
            ],
            link: "/catalogo-baterias/l-65-750-agm"
        },
        {
            model: "L-47(LN2)-660 AGM",
            cca: "660 CCA",
            tech: "AGM Start-Stop Ready",
            price: "$6,300.00 MXN",
            images: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_47-660_agm_front_mx.png?sfvrsn=d56efed2_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_47-660_agm_3-4_right_mx_v01.png?sfvrsn=d5a51c8e_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_47-660_agm_3-4_left_mx.png?sfvrsn=d381bff_1"
            ],
            link: "/catalogo-baterias/l-47-ln2-660-agm"
        },
        {
            model: "L-94R-850 AGM",
            cca: "850 CCA",
            tech: "AGM Start-Stop Ready",
            price: "$7,080.00 MXN",
            images: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_94r-850_agm_front_mx.png?sfvrsn=bbef2f07_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_94r-850_agm_3-4_left_mx.png?sfvrsn=405fc542_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_94r-850_agm_3-4_right_mx_v01.png?sfvrsn=cb27b889_1"
            ],
            link: "/catalogo-baterias/l-94r-850-agm"
        },
        {
            model: "L-48/91-760 AGM",
            cca: "760 CCA",
            tech: "AGM Start-Stop Ready",
            price: "$7,080.00 MXN",
            images: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_48-91-760_agm_front_mx.png?sfvrsn=e987f339_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_48-91-760_agm_3-4_left_mx.png?sfvrsn=7e4b26f9_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_48-91-760_agm_3-4_right_mx.png?sfvrsn=6edd1551_1"
            ],
            link: "/catalogo-baterias/l-48-91-760-agm"
        },
        {
            model: "L-49-900 AGM",
            cca: "900 CCA",
            tech: "AGM Start-Stop Ready",
            price: "$7,080.00 MXN",
            images: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_49-900_agm_front_mx.png?sfvrsn=4dde781_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_49-900_agm_3-4_left_mx.png?sfvrsn=8302969d_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_auto_49-900_agm_3-4_right_mx.png?sfvrsn=4689c9c5_1"
            ],
            link: "/catalogo-baterias/l-49-900-agm"
        }
    ];

    heavyDutyProducts: EvolutionProduct[] = [
        {
            model: "L-31T-825 AGM",
            cca: "825 CCA",
            tech: "Servicio Pesado",
            price: "$8,260.00 MXN",
            isHeavyDuty: true,
            images: [
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_sp_31t-825_agm_front_mx.png?sfvrsn=ff45810e_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_sp_31t-825_agm_3-4_right_mx_v01.png?sfvrsn=74071e5a_1",
                "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-evolution/lth_evolution_sp_31t-825_agm_3-4_left_mx.png?sfvrsn=62b2b0db_1"
            ],
            link: "/catalogo-baterias/l-31t-825-agm"
        }
    ];

    scrollToProducts() {
        const element = document.querySelector('.product-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
