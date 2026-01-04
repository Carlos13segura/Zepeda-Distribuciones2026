import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface BatteryProduct {
    name: string;
    image: string;
    voltage?: string;
    badges: { icon: string; text: string; class: string }[];
    specs: {
        cca: string;
        recycle: string;
        price: string;
    };
    link: string;
}

@Component({
    selector: 'app-battery-lth',
    standalone: true,
    imports: [CommonModule, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './battery-lth.html',
    styleUrls: ['./battery-lth.scss']
})
export class BatteryLthComponent {

    lthProducts: BatteryProduct[] = [
        {
            name: "L-22F-450",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_22f-450_front_mx.png?sfvrsn=3036021a_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: "450 CCA",
                recycle: "Requerida",
                price: "$2,960.00 MXN"
            },
            link: "/producto/L-22F-450"
        },
        {
            name: "L-42-400",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_42-400_front_mx.png?sfvrsn=154afcb6_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: "400 CCA",
                recycle: "Requerida",
                price: "$3,050.00 MXN"
            },
            link: "/producto/L-42-400"
        },
        {
            name: "L-26R-500",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_26r-500_front_mx.png?sfvrsn=87f91bb9_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: "500 CCA",
                recycle: "Requerida",
                price: "$3,050.00 MXN"
            },
            link: "/producto/L-26R-500"
        },
        {
            name: "L-58-575",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_58-575_front_mx.png?sfvrsn=22e3d0_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: "400 CCA",
                recycle: "Requerida",
                price: "$3,190.00 MXN"
            },
            link: "/producto/L-58-575"
        },
        {
            name: "L-NS40-320",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_ns40z-320_front_mx.png?sfvrsn=6845b43d_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: "400 CCA",
                recycle: "Requerida",
                price: "$3,200.00 MXN"
            },
            link: "/producto/L-NS40-320"
        },
        {
            name: "L-NS40Z-320",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_ns40z-320_front_mx.png?sfvrsn=6845b43d_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: "400 CCA",
                recycle: "Requerida",
                price: "3,200.00 MXN"
            },
            link: "/producto/L-NS40Z-320"
        },
        {
            name: "LNS40L-340",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_ns40l-340_front_mx.png?sfvrsn=334f0025_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "3,200.00 MXN"
            },
            link: "/producto/LNS40L-340"
        },
        {
            name: "L-44B19-335",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_44b19-335_front_mx.png?sfvrsn=e7d71408_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "3,200.00 MXN"
            },
            link: "/producto/L-44B19-335"
        },
        {
            name: "L-99(LBN1)-400",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_99_lbn1_400_front_mx.png?sfvrsn=f2d91399_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,290.00 MXN"
            },
            link: "/producto/L-99(LBN1)-400"
        },
        {
            name: "L-24-530",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_24-530_front_mx.png?sfvrsn=51e99353_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,320.00 MXN"
            },
            link: "/producto/L-24-530"
        },
        {
            name: "L-42-500",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_42-500_front_mx.png?sfvrsn=854367f2_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,360.00 MXN"
            },
            link: "/producto/L-42-500"
        },
        {
            name: "L-35-575",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_35-575_front_mx.png?sfvrsn=1f3c39e0_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,370.00 MXN"
            },
            link: "/producto/L-35-575"
        },
        {
            name: "L-24R-530",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_24r-530_front_mx.png?sfvrsn=c1913676_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,470.00 MXN"
            },
            link: "/producto/L-24R-530"
        },
        {
            name: "L-75-575",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_75-575_front_mx.png?sfvrsn=8f9d14_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,490.00 MXN"
            },
            link: "/producto/L-75-575"
        },
        {
            name: "L-42R-500",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_42r-500_front_mx.png?sfvrsn=c05ca0cd_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,500.00 MXN"
            },
            link: "/producto/L-42R-500"
        },
        {
            name: "L-51R-500",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_51r-500_front_mx.png?sfvrsn=e958a518_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,500.00 MXN"
            },
            link: "/producto/L-51R-500"
        },
        {
            name: "L-51R JIS-480",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth-auto_l-51r_jis-480_front_mx.png?sfvrsn=31e3fe1a_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,500.00 MXN"
            },
            link: "/producto/L-51R-JIS-480"
        },
        {
            name: "L-51-500",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_51-500_front_mx.png?sfvrsn=3731bea1_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,670.00 MXN"
            },
            link: "/producto/L-51-500"
        },
        {
            name: "L-51 JIS-480",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth-auto_l-51_jis-480_front_mx.png?sfvrsn=9f7cba71_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,670.00 MXN"
            },
            link: "/producto/L-51-JIS-480"
        },
        {
            name: "L-65-800",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_65-800_front_mx.png?sfvrsn=c552905b_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,680.00 MXN"
            },
            link: "/producto/L-65-800"
        },
        {
            name: "L-75/86-650",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_75-86-650_front_mx.png?sfvrsn=57dc3324_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,800.00 MXN"
            },
            link: "/producto/L-75-86-650"
        },
        {
            name: "L-34-600",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_34-600_front_mx.png?sfvrsn=309c1995_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,800.00 MXN"
            },
            link: "/producto/L-34-600"
        },
        {
            name: "L-41-650",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/default-album/lth_auto_41-650_front_mx.png?sfvrsn=dadbdeac_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,800.00 MXN"
            },
            link: "/producto/L-41-650"
        },
        {
            name: "L-47(LN2)-550",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_47_ln2-550_front_mx.png?sfvrsn=126c868e_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,820.00 MXN"
            },
            link: "/producto/L-47(LN2)-550"
        },
        {
            name: "L-58R-575",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_58-575_front_mx.png?sfvrsn=22e3d0_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,920.00 MXN"
            },
            link: "/producto/L-58R-575"
        },
        {
            name: "L-27F-520",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_27f-520_front_mx.png?sfvrsn=2e940828_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,970.00 MXN"
            },
            link: "/producto/L-27F-520"
        },
        {
            name: "L-34/78-750",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_34-78-750_front_mx.png?sfvrsn=6580484a_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$3,990.00 MXN"
            },
            link: "/producto/L-34/78-750"
        },
        {
            name: "L-48/91(LN3)-615",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_48-91_ln3-615_front_mx.png?sfvrsn=3aee8d3b_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$4,290.00 MXN"
            },
            link: "/producto/L-48/91(LN3)-615"
        },
        {
            name: "L-27-700",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_27-700_front_mx.png?sfvrsn=d21483ba_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$4,500.00 MXN"
            },
            link: "/producto/L-27-700"
        },
        {
            name: "L-94R-800",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_94r-800_front_mx.png?sfvrsn=5f5dd6c1_1",
            badges: [
                { icon: "bi bi-car-front-fill", text: "Automotriz", class: "lth-badge-auto" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: " CCA",
                recycle: "Requerida",
                price: "$4,500.00 MXN"
            },
            link: "/producto/L-94R-800"
        },
    ];

    heavyDuty6V: BatteryProduct[] = [
        {
            name: "L-4-950 AR",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-servicio-pesado/l-4-950-ar-front.png?sfvrsn=83f80e16_2",
            voltage: "6V",
            badges: [
                { icon: "bi bi-truck-front-fill", text: "Servicio Pesado", class: "lth-badge-heavy" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: "950 CCA",
                recycle: "Requerida",
                price: "$3,110.00 MXN"
            },
            link: "/producto/L-4-950-AR"
        }
    ];


    heavyDuty12V: BatteryProduct[] = [
        {
            name: "L-30H-670",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-servicio-pesado/l-4-950-ar-front.png?sfvrsn=83f80e16_2",
            voltage: "12V",
            badges: [
                { icon: "bi bi-truck-front-fill", text: "Servicio Pesado", class: "lth-badge-heavy" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: "950 CCA", // User snippet says 950 for L-30H-670
                recycle: "Requerida",
                price: "$3,520.00 MXN"
            },
            link: "/producto/L-30H-670"
        },
        {
            name: "L-31P-750 AR",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-servicio-pesado/l-31p-750-ar-sup.png?sfvrsn=fba317ba_2",
            voltage: "12V",
            badges: [
                { icon: "bi bi-truck-front-fill", text: "Servicio Pesado", class: "lth-badge-heavy" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: "670 CCA",
                recycle: "Requerida",
                price: "$3,520.00 MXN"
            },
            link: "/producto/L-31P-750-AR"
        },
        {
            name: "L-31T-750AR",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-servicio-pesado/l-31t-750-ar-sup-izq.png?sfvrsn=ef571e05_2",
            voltage: "12V",
            badges: [
                { icon: "bi bi-truck-front-fill", text: "Servicio Pesado", class: "lth-badge-heavy" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: "1125 CCA",
                recycle: "Requerida",
                price: "$3,650.00 MXN"
            },
            link: "/producto/L-31T-750AR"
        },
        {
            name: "L-31P-900 AR",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-servicio-pesado/l-31p-900-ar-front.png?sfvrsn=77a58344_2",
            voltage: "12V",
            badges: [
                { icon: "bi bi-truck-front-fill", text: "Servicio Pesado", class: "lth-badge-heavy" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: "1125 CCA",
                recycle: "Requerida",
                price: "$4,020.00 MXN"
            },
            link: "/producto/L-31P-900-AR"
        },
        {
            name: "L-31T-900 AR",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-servicio-pesado/l-31t-900-ar-front.png?sfvrsn=198d53f3_2",
            voltage: "12V",
            badges: [
                { icon: "bi bi-truck-front-fill", text: "Servicio Pesado", class: "lth-badge-heavy" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: "1125 CCA",
                recycle: "Requerida",
                price: "$4,020.00 MXN"
            },
            link: "/producto/L-31T-900-AR"
        },
        {
            name: "L-4DLT-1000",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/default-album/lth_sp_4dlt-1000_front_mx.png?sfvrsn=42dc8130_1",
            voltage: "12V",
            badges: [
                { icon: "bi bi-truck-front-fill", text: "Servicio Pesado", class: "lth-badge-heavy" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: "1125 CCA",
                recycle: "Requerida",
                price: "$5,680.00 MXN"
            },
            link: "/producto/L-4DLT-1000"
        },
        {
            name: "L-4D-1000",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-servicio-pesado/l-4d-1000-front.png?sfvrsn=be90e1f7_2",
            voltage: "12V",
            badges: [
                { icon: "bi bi-truck-front-fill", text: "Servicio Pesado", class: "lth-badge-heavy" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: "1125 CCA",
                recycle: "Requerida",
                price: "$5,640.00 MXN"
            },
            link: "/producto/L-4D-1000"
        },
        {
            name: "L-8D-1125 AR",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-servicio-pesado/l-8d-1125-ar-front.png?sfvrsn=a213cacc_2",
            voltage: "12V",
            badges: [
                { icon: "bi bi-truck-front-fill", text: "Servicio Pesado", class: "lth-badge-heavy" },
                { icon: "bi bi-check-circle-fill", text: "En Stock", class: "lth-badge-stock" }
            ],
            specs: {
                cca: "1125 CCA",
                recycle: "Requerida",
                price: "$7,000.00 MXN"
            },
            link: "/producto/L-8D-1125-AR"
        }
    ];

}
