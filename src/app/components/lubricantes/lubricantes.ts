import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface LubricantProduct {
    id: number;
    name: string;
    description: string;
    image: string;
    category: string;
}

@Component({
    selector: 'app-lubricantes',
    standalone: true,
    imports: [CommonModule, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './lubricantes.html',
    styleUrls: ['./lubricantes.scss']
})
export class LubricantesComponent {

    products: LubricantProduct[] = [
        {
            id: 1,
            name: "SINTÉTICO GASOLINA",
            description: "Lubricante sintético de alto rendimiento para motores a gasolina. Ofrece protección superior y máxima eficiencia.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants/sintetico-gasolina.png?sfvrsn=1",
            category: "Sintético"
        },
        {
            id: 2,
            name: "MULTIGRADO GASOLINA",
            description: "Aceite multigrado de alta calidad para todo tipo de motores a gasolina. Rendimiento óptimo en todas las condiciones.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants/multigrado-gasolina.png?sfvrsn=1",
            category: "Multigrado"
        },
        {
            id: 3,
            name: "ESPECIALES MOTOS",
            description: "Formulado especialmente para motocicletas. Protección superior para motor y transmisión.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants/especiales-motos.png?sfvrsn=1",
            category: "Especial"
        },
        {
            id: 4,
            name: "ESPECIALES MARINO",
            description: "Lubricante diseñado para motores marinos. Resistente a la corrosión y al agua salada.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants/especiales-marino.png?sfvrsn=1",
            category: "Especial"
        },
        {
            id: 5,
            name: "MULTIGRADO DIESEL",
            description: "Aceite multigrado premium para motores diesel. Máxima protección y rendimiento.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants/multigrado-diesel.png?sfvrsn=1",
            category: "Multigrado"
        },
        {
            id: 6,
            name: "MONOGRADO DIESEL",
            description: "Lubricante monogrado para motores diesel de trabajo pesado. Alta resistencia térmica.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants/monogrado-diesel.png?sfvrsn=1",
            category: "Monogrado"
        },
        {
            id: 7,
            name: "MONOGRADO GASOLINA",
            description: "Aceite monogrado confiable para motores a gasolina. Protección básica garantizada.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants/monogrado-gasolina.png?sfvrsn=1",
            category: "Monogrado"
        },
        {
            id: 8,
            name: "TRANSMISIÓN MANUAL",
            description: "Fluido especializado para transmisiones manuales. Cambios suaves y protección duradera.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants/transmision-manual.png?sfvrsn=1",
            category: "Transmisión"
        },
        {
            id: 9,
            name: "ACEITE MANUAL MULTIGRADO",
            description: "Aceite multigrado para cajas de cambios manuales. Rendimiento superior en todas las temperaturas.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants/aceite-manual-multigrado.png?sfvrsn=1",
            category: "Transmisión"
        },
        {
            id: 10,
            name: "ACEITE MANUAL MONOGRADO",
            description: "Lubricante monogrado para transmisiones manuales. Protección confiable y económica.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants/aceite-manual-monogrado.png?sfvrsn=1",
            category: "Transmisión"
        },
        {
            id: 11,
            name: "ANTICONGELANTE QXT",
            description: "Anticongelante de larga duración con tecnología QXT. Protección extrema contra congelamiento.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants/anticongelante-qxt.png?sfvrsn=1",
            category: "Anticongelante"
        },
        {
            id: 12,
            name: "ANTICONGELANTE PRE-MEZCLADO",
            description: "Anticongelante listo para usar. No requiere dilución, máxima conveniencia.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants/anticongelante-premezclado.png?sfvrsn=1",
            category: "Anticongelante"
        },
        {
            id: 13,
            name: "ADITIVOS OCTANAJE",
            description: "Mejora el octanaje de la gasolina. Aumenta el rendimiento y limpia el sistema de combustible.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants/aditivos-octanaje.png?sfvrsn=1",
            category: "Aditivos"
        },
        {
            id: 14,
            name: "ADITIVOS INYECTORES",
            description: "Limpiador de inyectores de alto rendimiento. Restaura la eficiencia del motor.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants/aditivos-inyectores.png?sfvrsn=1",
            category: "Aditivos"
        },
        {
            id: 15,
            name: "ADITIVOS GASOLINA",
            description: "Aditivo multifuncional para gasolina. Limpia, protege y mejora el rendimiento.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants/aditivos-gasolina.png?sfvrsn=1",
            category: "Aditivos"
        },
        {
            id: 16,
            name: "LÍQUIDO FRENOS",
            description: "Líquido de frenos DOT 3/DOT 4. Alto punto de ebullición para frenado seguro.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants/liquido-frenos.png?sfvrsn=1",
            category: "Frenos"
        },
        {
            id: 17,
            name: "GRASAS BALEROS",
            description: "Grasa de litio para baleros y rodamientos. Protección duradera contra desgaste.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lubricants/grasas-baleros.png?sfvrsn=1",
            category: "Grasas"
        }
    ];

    categories = [
        { name: 'Todos', icon: 'bi bi-droplet-half', active: true },
        { name: 'Sintético', icon: 'bi bi-star-fill', active: false },
        { name: 'Multigrado', icon: 'bi bi-layers-fill', active: false },
        { name: 'Especial', icon: 'bi bi-shield-fill-check', active: false },
        { name: 'Transmisión', icon: 'bi bi-gear-fill', active: false },
        { name: 'Anticongelante', icon: 'bi bi-snow', active: false },
        { name: 'Aditivos', icon: 'bi bi-droplet-fill', active: false }
    ];

    filteredProducts = [...this.products];

    filterByCategory(categoryName: string) {
        this.categories.forEach(cat => cat.active = cat.name === categoryName);

        if (categoryName === 'Todos') {
            this.filteredProducts = [...this.products];
        } else {
            this.filteredProducts = this.products.filter(p => p.category === categoryName);
        }
    }
}
