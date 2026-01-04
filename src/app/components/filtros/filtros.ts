import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FilterProduct {
    id: number;
    name: string;
    description: string;
    image: string;
    icon: string;
}

@Component({
    selector: 'app-filtros',
    standalone: true,
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './filtros.html',
    styleUrls: ['./filtros.scss']
})
export class FiltrosComponent {

    filters: FilterProduct[] = [
        {
            id: 1,
            name: "FILTROS DE ACEITE",
            description: "Garantiza el óptimo funcionamiento del motor al evitar que las partículas abrasivas perjudiciales provoquen su desgaste.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/filters/filtros-aceite.png?sfvrsn=1",
            icon: "bi-droplet-fill"
        },
        {
            id: 2,
            name: "FILTROS DE AIRE",
            description: "Garantizan la entrada de aire puro a la cámara de combustión y regulan la cantidad de aire aspirado.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/filters/filtros-aire.png?sfvrsn=1",
            icon: "bi-wind"
        },
        {
            id: 3,
            name: "FILTROS DE GASOLINA",
            description: "Evita la entrada de contaminantes contenidos en el mismo combustible antes de que llegue a los sistemas de alimentación.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/filters/filtros-gasolina.png?sfvrsn=1",
            icon: "bi-fuel-pump-fill"
        },
        {
            id: 4,
            name: "FILTROS DE CABINA",
            description: "Diseñados para limpiar las impurezas contaminantes del ambiente al momento de encender el clima del vehículo.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/filters/filtros-cabina.png?sfvrsn=1",
            icon: "bi-fan"
        }
    ];
}
