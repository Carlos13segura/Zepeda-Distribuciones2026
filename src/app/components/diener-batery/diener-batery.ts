import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface DienerProduct {
    model: string;
    image: string;
    specs: {
        cca: string;
        service: string;
        warranty: string;
        price: string;
    };
    link: string;
}

@Component({
    selector: 'app-diener-batery',
    standalone: true,
    imports: [CommonModule, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './diener-batery.html',
    styleUrls: ['./diener-batery.scss']
})
export class DienerBateryComponent {

    products: DienerProduct[] = [
        {
            model: "D-22F-350",
            image: "https://chedrauimx.vtexassets.com/arquivos/ids/49163130-1600-auto?v=638845736487870000&width=1600&height=auto&aspect=true",
            specs: { cca: "620 CCA", service: "Confiable 24/7", warranty: "3 Años Diener", price: "$2,370.00 MXN" },
            link: "DIENER-D-22F-350.html"
        },
        {
            model: "D-42-330",
            image: "https://chedrauimx.vtexassets.com/arquivos/ids/49163130-1600-auto?v=638845736487870000&width=1600&height=auto&aspect=true",
            specs: { cca: "680 CCA", service: "Confiable 24/7", warranty: "3 Años Diener", price: "$2,440.00 MXN" },
            link: "DIENER-D-42-330.html" // Inferred pattern
        },
        {
            model: "D-58-420",
            image: "https://chedrauimx.vtexassets.com/arquivos/ids/49163130-1600-auto?v=638845736487870000&width=1600&height=auto&aspect=true",
            specs: { cca: "750 CCA", service: "Confiable 24/7", warranty: "3 Años Diener", price: "$2,550.00 MXN" },
            link: "DIENER-D-58-420.html"
        },
        {
            model: "D-NS40-300",
            image: "https://chedrauimx.vtexassets.com/arquivos/ids/49163130-1600-auto?v=638845736487870000&width=1600&height=auto&aspect=true",
            specs: { cca: "750 CCA", service: "Confiable 24/7", warranty: "3 Años Diener", price: "$2,560.00 MXN" },
            link: "DIENER-D-NS40-300.html"
        },
        {
            model: "D-99-350",
            image: "https://chedrauimx.vtexassets.com/arquivos/ids/49163130-1600-auto?v=638845736487870000&width=1600&height=auto&aspect=true",
            specs: { cca: "750 CCA", service: "Confiable 24/7", warranty: "3 Años Diener", price: "$2,630.00 MXN" },
            link: "DIENER-D-99-350.html"
        },
        {
            model: "D-24-350",
            image: "https://chedrauimx.vtexassets.com/arquivos/ids/49163130-1600-auto?v=638845736487870000&width=1600&height=auto&aspect=true",
            specs: { cca: "750 CCA", service: "Confiable 24/7", warranty: "3 Años Diener", price: "$2,660.00 MXN" },
            link: "DIENER-D-24-350.html"
        },
        {
            model: "D-35-450",
            image: "https://chedrauimx.vtexassets.com/arquivos/ids/49163130-1600-auto?v=638845736487870000&width=1600&height=auto&aspect=true",
            specs: { cca: "750 CCA", service: "Confiable 24/7", warranty: "3 Años Diener", price: "$2,700.00 MXN" },
            link: "DIENER-D-35-450.html"
        },
        {
            model: "D-24R-420",
            image: "https://chedrauimx.vtexassets.com/arquivos/ids/49163130-1600-auto?v=638845736487870000&width=1600&height=auto&aspect=true",
            specs: { cca: "750 CCA", service: "Confiable 24/7", warranty: "3 Años Diener", price: "$2,780.00 MXN" },
            link: "DIENER-D-24R-420.html"
        },
        {
            model: "D-75-475",
            image: "https://chedrauimx.vtexassets.com/arquivos/ids/49163130-1600-auto?v=638845736487870000&width=1600&height=auto&aspect=true",
            specs: { cca: "750 CCA", service: "Confiable 24/7", warranty: "3 Años Diener", price: "$2,790.00 MXN" },
            link: "DIENER-D-75-475.html"
        },
        {
            model: "D-42R-330",
            image: "https://chedrauimx.vtexassets.com/arquivos/ids/49163130-1600-auto?v=638845736487870000&width=1600&height=auto&aspect=true",
            specs: { cca: "750 CCA", service: "Confiable 24/7", warranty: "3 Años Diener", price: "$2,800.00 MXN" },
            link: "DIENER-D-42R-330.html"
        },
        {
            model: "D-65-650",
            image: "https://chedrauimx.vtexassets.com/arquivos/ids/49163130-1600-auto?v=638845736487870000&width=1600&height=auto&aspect=true",
            specs: { cca: "750 CCA", service: "Confiable 24/7", warranty: "3 Años Diener", price: "$2,940.00 MXN" },
            link: "DIENER-D-65-650.html"
        },
        {
            model: "D-34-420",
            image: "https://chedrauimx.vtexassets.com/arquivos/ids/49163130-1600-auto?v=638845736487870000&width=1600&height=auto&aspect=true",
            specs: { cca: "750 CCA", service: "Confiable 24/7", warranty: "3 Años Diener", price: "$3,040.00 MXN" },
            link: "DIENER-D-34-420.html"
        },
        {
            model: "D-75/86-400",
            image: "https://chedrauimx.vtexassets.com/arquivos/ids/49163130-1600-auto?v=638845736487870000&width=1600&height=auto&aspect=true",
            specs: { cca: "750 CCA", service: "Confiable 24/7", warranty: "3 Años Diener", price: "$3,040.00 MXN" },
            link: "DIENER-D-75-86-400.html"
        },
        {
            model: "D-41-500",
            image: "https://chedrauimx.vtexassets.com/arquivos/ids/49163130-1600-auto?v=638845736487870000&width=1600&height=auto&aspect=true",
            specs: { cca: "750 CCA", service: "Confiable 24/7", warranty: "3 Años Diener", price: "$3,040.00 MXN" },
            link: "DIENER-D-41-500.html"
        },
        {
            model: "D-47-525",
            image: "https://chedrauimx.vtexassets.com/arquivos/ids/49163130-1600-auto?v=638845736487870000&width=1600&height=auto&aspect=true",
            specs: { cca: "750 CCA", service: "Confiable 24/7", warranty: "3 Años Diener", price: "$3,060.00 MXN" },
            link: "DIENER-D-47-525.html"
        }
    ];

    // scrollToProducts method removed as it is no longer used in the template
}
