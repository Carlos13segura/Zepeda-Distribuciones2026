import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CaleProduct {
    model: string;
    cca: string;
    price: string;
    link: string;
}

@Component({
    selector: 'app-battery-cale',
    standalone: true,
    imports: [CommonModule, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './battery-cale.html',
    styleUrls: ['./battery-cale.scss']
})
export class BatteryCaleComponent {

    automotiveProducts: CaleProduct[] = [
        { model: "CL-22F-450", cca: "450 CCA", price: "$2,660.00 MXN", link: "detalle/cl-22f-450" },
        { model: "CL-42-400", cca: "400 CCA", price: "$2,750.00 MXN", link: "detalle/cl-42-400" },
        { model: "CL-26R-500", cca: "500 CCA", price: "$2,750.00 MXN", link: "detalle/cl-26r-500" },
        { model: "CL-58-575", cca: "575 CCA", price: "$2,870.00 MXN", link: "detalle/cl-58-575" },
        { model: "CL-NS40-320", cca: "320 CCA", price: "$2,880.00 MXN", link: "detalle/cl-ns40-320" },
        { model: "CL-NS40Z-320", cca: "320 CCA", price: "$2,880.00 MXN", link: "detalle/cl-ns40z-320" },
        { model: "CL-99-390", cca: "390 CCA", price: "$2,960.00 MXN", link: "detalle/cl-99-390" },
        { model: "CL-24-420", cca: "420 CCA", price: "$2,990.00 MXN", link: "detalle/cl-24-420" },
        { model: "CL-42-500", cca: "500 CCA", price: "$3,020.00 MXN", link: "detalle/cl-42-500" },
        { model: "CL-35-550", cca: "550 CCA", price: "$3,030.00 MXN", link: "detalle/cl-35-550" },
        { model: "CL-24R-530", cca: "530 CCA", price: "$3,120.00 MXN", link: "detalle/cl-24r-530" },
        { model: "CL-75-550", cca: "550 CCA", price: "$3,140.00 MXN", link: "detalle/cl-75-550" },
        { model: "CL-42R-500", cca: "500 CCA", price: "$3,150.00 MXN", link: "detalle/cl-42r-500" },
        { model: "CL-51R-500", cca: "500 CCA", price: "$3,150.00 MXN", link: "detalle/cl-51r-500" },
        { model: "CL-65-800", cca: "800 CCA", price: "$3,310.00 MXN", link: "detalle/cl-65-800" },
        { model: "CL-34-600", cca: "600 CCA", price: "$3,420.00 MXN", link: "detalle/cl-34-600" },
        { model: "CL-75/86-650", cca: "650 CCA", price: "$3,420.00 MXN", link: "detalle/cl-75-86-650" },
        { model: "CL-41-650", cca: "650 CCA", price: "$3,420.00 MXN", link: "detalle/cl-41-650" },
        { model: "CL-47(LN2)-550", cca: "550 CCA", price: "$3,440.00 MXN", link: "detalle/cl-47-ln2-550" },
        { model: "CL-34/78-750", cca: "750 CCA", price: "$3,590.00 MXN", link: "detalle/cl-34-78-750" },
        { model: "CL-48/91(LN3)-615", cca: "615 CCA", price: "$3,860.00 MXN", link: "detalle/cl-48-91-ln3-615" }
    ];

    heavyDutyProducts: CaleProduct[] = [
        { model: "CL-31T-750", cca: "750 CCA", price: "$3,100.00 MXN", link: "detalle/cl-31t-750" },
        { model: "CL-31P-750", cca: "750 CCA", price: "$3,100.00 MXN", link: "detalle/cl-31p-750" },
        { model: "CL-4DLT-1000", cca: "1000 CCA", price: "$4,830.00 MXN", link: "detalle/cl-4dlt-1000" },
        { model: "CL-8D-1125", cca: "1125 CCA", price: "$4,830.00 MXN", link: "detalle/cl-8d-1125" }
    ];

    solarProducts: CaleProduct[] = [
        { model: "CL-31T/S-190M", cca: "190M", price: "$4,350.00 MXN", link: "detalle/cl-31t-s-190m" }
    ];

    scrollToProducts() {
        const element = document.querySelector('.cale-product-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
