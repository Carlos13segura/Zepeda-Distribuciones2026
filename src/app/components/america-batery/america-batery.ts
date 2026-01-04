import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface AmericaProduct {
    name: string;
    image: string;
    specs: {
        cca: string;
        weight: string;
    };
    price: string;
    link: string;
    isHeavyDuty?: boolean;
}

@Component({
    selector: 'app-america-batery',
    standalone: true,
    imports: [CommonModule, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './america-batery.html',
    styleUrls: ['./america-batery.scss']
})
export class AmericaBateryComponent {

    showAllAutomotive = false;

    automotiveProducts: AmericaProduct[] = [
        {
            name: "AM-22F-450",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-22F-450.png",
            specs: { cca: "450 CCA", weight: "22 kg" },
            price: "$2,370.00",
            link: "/catalogo-baterias/AM-22F-450" // Keeping original links logic, though usually should be routes
        },
        {
            name: "AM-42-400",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-42-400.png",
            specs: { cca: "400 CCA", weight: "18 kg" },
            price: "$2,440.00",
            link: "/catalogo-baterias/AM-42-400"
        },
        {
            name: "AM-26R-500",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-26R-500.png",
            specs: { cca: "500 CCA", weight: "24 kg" },
            price: "$2,440.00",
            link: "/catalogo-baterias/AM-26R-500"
        },
        {
            name: "AM-58-575",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-58-575.png",
            specs: { cca: "575 CCA", weight: "25 kg" },
            price: "$2,550.00",
            link: "/catalogo-baterias/AM-58-575"
        },
        {
            name: "AM-NS-40-320",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-NS40-320.png",
            specs: { cca: "320 CCA", weight: "18 kg" },
            price: "$2,560.00",
            link: "/catalogo-baterias/AM-NS-40-320"
        },
        {
            name: "AM-NS40Z-320",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-NS40Z-320.png",
            specs: { cca: "320 CCA", weight: "18 kg" },
            price: "$2,560.00",
            link: "/catalogo-baterias/AM-NS40Z-320"
        },
        // Collapsible items start here in original (after 6 items)
        {
            name: "AM-44B19-335",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-44B19-335.png",
            specs: { cca: "335 CCA", weight: "19 kg" },
            price: "$2,560.00",
            link: "/catalogo-baterias/AM-44B19-335"
        },
        {
            name: "AM-99-390",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-99-390.png",
            specs: { cca: "390 CCA", weight: "22 kg" },
            price: "$2,630.00",
            link: "/catalogo-baterias/AM-99-390"
        },
        {
            name: "AM-24-420",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-24-420.png",
            specs: { cca: "420 CCA", weight: "24 kg" },
            price: "$2,660.00",
            link: "/catalogo-baterias/AM-24-420"
        },
        {
            name: "AM-42-500",
            image: "https://lthcercadeti.com.mx/wp-content/uploads/2022/01/AM-42-500.png",
            specs: { cca: "500 CCA", weight: "24 kg" }, // Fixed CCA based on name 500
            price: "$2,690.00",
            link: "/catalogo-baterias/AM-42-500"
        },
        {
            name: "AM-35-550",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-35-550.png",
            specs: { cca: "550 CCA", weight: "24 kg" }, // Fixed CCA based on name 550
            price: "$2,690.00",
            link: "/catalogo-baterias/AM-35-550"
        },
        {
            name: "AM-24R-530",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-24R-530.png",
            specs: { cca: "530 CCA", weight: "24 kg" }, // Fixed CCA based on name 530
            price: "$2,780.00",
            link: "/catalogo-baterias/AM-24R-530"
        },
        {
            name: "AM-75-550",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-75-550.png",
            specs: { cca: "550 CCA", weight: "24 kg" }, // Fixed CCA based on name 550
            price: "$2,790.00",
            link: "/catalogo-baterias/AM-75-550"
        },
        {
            name: "AM-42R-500",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-42R-500.png",
            specs: { cca: "500 CCA", weight: "24 kg" }, // Fixed CCA based on name 500
            price: "$2,800.00",
            link: "/catalogo-baterias/AM-42R-500"
        },
        {
            name: "AM-51R-500",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-51R-500.png",
            specs: { cca: "500 CCA", weight: "24 kg" }, // Fixed CCA based on name 500
            price: "$2,800.00",
            link: "/catalogo-baterias/AM-51R-500"
        },
        {
            name: "AM-51-500",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-51-500.png",
            specs: { cca: "500 CCA", weight: "24 kg" }, // Fixed CCA based on name 500
            price: "$2,940.00",
            link: "/catalogo-baterias/AM-51-500"
        },
        {
            name: "AM-65-800",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-65-800.png",
            specs: { cca: "800 CCA", weight: "24 kg" }, // Fixed CCA based on name 800
            price: "$2,940.00",
            link: "/catalogo-baterias/AM-65-800"
        },
        {
            name: "AM-75/86-650",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-75/86-650.png",
            specs: { cca: "650 CCA", weight: "24 kg" }, // Fixed CCA based on name 650
            price: "$3,040.00",
            link: "/catalogo-baterias/AM-75-86-650"
        },
        {
            name: "AM-34-600",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-34-600.png",
            specs: { cca: "600 CCA", weight: "24 kg" }, // Fixed CCA based on name 600
            price: "$3,040.00",
            link: "/catalogo-baterias/AM-34-600"
        },
        {
            name: "AM-41-650",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-41-650.png",
            specs: { cca: "650 CCA", weight: "24 kg" }, // Fixed CCA based on name 650
            price: "$3,040.00",
            link: "/catalogo-baterias/AM-41-650"
        },
        {
            name: "AM-47(LN2)-550",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-47(LN2)-550.png",
            specs: { cca: "550 CCA", weight: "24 kg" }, // Fixed CCA based on name 550
            price: "$3,060.00",
            link: "/catalogo-baterias/AM-47(LN2)-550"
        },
        {
            name: "AM-58R-575",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-58R-575.png",
            specs: { cca: "575 CCA", weight: "24 kg" }, // Fixed CCA based on name 575
            price: "$3,130.00",
            link: "/catalogo-baterias/AM-58R-575"
        },
        {
            name: "AM-27F-520",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-27F-520.png",
            specs: { cca: "520 CCA", weight: "24 kg" }, // Fixed CCA based on name 520
            price: "$3,180.00",
            link: "/catalogo-baterias/AM-27F-520"
        },
        {
            name: "AM-34/78-750",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-34/78-750.png",
            specs: { cca: "750 CCA", weight: "24 kg" }, // Fixed CCA based on name 750
            price: "$3,190.00",
            link: "/catalogo-baterias/AM-34-78-750"
        },
        {
            name: "AM-48/91(LN3)-615",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-48/91(LN3)-615.png",
            specs: { cca: "615 CCA", weight: "24 kg" }, // Fixed CCA based on name 615
            price: "$3,430.00",
            link: "/catalogo-baterias/AM-48-91(LN3)-615"
        },
        {
            name: "AM-27-700",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-27-700.png",
            specs: { cca: "700 CCA", weight: "24 kg" }, // Fixed CCA based on name 700
            price: "$3,600.00",
            link: "/catalogo-baterias/AM-27-700"
        },
        {
            name: "AM-94R-800",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-94R-800.png",
            specs: { cca: "800 CCA", weight: "24 kg" }, // Fixed CCA based on name 800
            price: "$3,600.00",
            link: "/catalogo-baterias/AM-94R-800"
        }
    ];

    heavyDutyProducts: AmericaProduct[] = [
        {
            name: "AM-30H-670",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-30H-670.png",
            specs: { cca: "670 CCA", weight: "30 kg" },
            price: "$2,990.00",
            link: "/catalogo-baterias/AM-30H-670",
            isHeavyDuty: true
        },
        {
            name: "AM-31T-750-AR",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-31T-750-AR.png",
            specs: { cca: "750 CCA", weight: "31 kg" },
            price: "$3,100.00",
            link: "/catalogo-baterias/AM-31T-750-AR",
            isHeavyDuty: true
        },
        {
            name: "AM-31P-750-AR",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-31P-750-AR.png",
            specs: { cca: "1125 CCA", weight: "45 kg" }, // Snippet says 1125 for 750 AR? Keeping snippet data.
            price: "$3,100.00",
            link: "/catalogo-baterias/AM-31P-750-AR",
            isHeavyDuty: true
        },
        {
            name: "AM-31T-900-AR",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-31T-900-AR.png",
            specs: { cca: "1125 CCA", weight: "45 kg" }, // Snippet says 1125 for 900 AR? Keeping snippet data.
            price: "$3,420.00",
            link: "/catalogo-baterias/AM-31T-900-AR",
            isHeavyDuty: true
        },
        {
            name: "AM-4DLT-1000",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-4D-1000.png",
            specs: { cca: "1125 CCA", weight: "45 kg" },
            price: "$4,830.00",
            link: "/catalogo-baterias/AM-4DLT-1000",
            isHeavyDuty: true
        },
        {
            name: "AM-8D-1125-AR",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-8D-1125-AR.png",
            specs: { cca: "1125 CCA", weight: "45 kg" },
            price: "$5,950.00",
            link: "/catalogo-baterias/AM-8D-1125-AR",
            isHeavyDuty: true
        },
        {
            name: "AM-31P-900-AR",
            image: "https://bateriasamerica.com/wp-content/themes/americaracing/graphics/AM-31P-900-AR.png",
            specs: { cca: "1125 CCA", weight: "45 kg" },
            price: "$3,420.00",
            link: "/catalogo-baterias/AM-31P-900-AR",
            isHeavyDuty: true
        }
    ];

    get visibleAutomotiveProducts() {
        return this.showAllAutomotive ? this.automotiveProducts : this.automotiveProducts.slice(0, 6);
    }

    toggleAutomotive() {
        this.showAllAutomotive = !this.showAllAutomotive;
    }
}
