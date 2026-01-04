import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ProtectProduct {
    model: string;
    image: string;
    specs: {
        cca: string;
        tech: string;
        warranty: string;
        application: string;
    };
    link: string;
}

@Component({
    selector: 'app-battery-protect',
    standalone: true,
    imports: [CommonModule, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './battery-protect.html',
    styleUrls: ['./battery-protect.scss']
})
export class BatteryProtectComponent {

    products: ProtectProduct[] = [
        {
            model: "L-153R(LN0)-420 XEV",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179709-lth_protect_auto_h3_xev_front.png?sfvrsn=ed1f3076_1",
            specs: { cca: "680 CCA", tech: "AGM Technology", warranty: "48 Meses", application: "Start-Stop / Hybrids" },
            link: "/catalogo-baterias/l-153r-ln0-420-xev"
        },
        {
            model: "L-140R(LN1)-570 XEV",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179710-lth_protect_auto_h4_xev_front.png?sfvrsn=5c3e05c2_1",
            specs: { cca: "760 CCA", tech: "AGM Technology", warranty: "48 Meses", application: "Start-Stop / Hybrids" },
            link: "/catalogo-baterias/l-140r-ln1-570-xev"
        },
        {
            model: "L-51JIS(B24PP)-410 XEV",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179707-lth_protect_auto_51_b24pp_xev_front.png?sfvrsn=5361f01_1",
            specs: { cca: "850 CCA", tech: "AGM Technology", warranty: "48 Meses", application: "Luxury / High Demand" },
            link: "/catalogo-baterias/l-51jis-b24pp-410-xev"
        },
        {
            model: "L-47(LN2)-660 XEV",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179711-lth_protect_auto_h5_xev_front.png?sfvrsn=2841a334_1",
            specs: { cca: "1000 CCA", tech: "AGM Technology", warranty: "48 Meses", application: "Start-Stop / Hybrids" },
            link: "/catalogo-baterias/l-47-ln2-660-xev"
        },
        {
            model: "L-51R(B24L)-410 XEV",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/baterias/lth-protect/179708-lth_protect_auto_51r_b24l_xev_front.png?sfvrsn=1ba86a8b_1",
            specs: { cca: "1000 CCA", tech: "AGM Technology", warranty: "48 Meses", application: "Start-Stop / Hybrids" },
            link: "/catalogo-baterias/l-51r-b24l-410-xev"
        },

    ];

    scrollToProducts() {
        const element = document.querySelector('.protect-product-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
