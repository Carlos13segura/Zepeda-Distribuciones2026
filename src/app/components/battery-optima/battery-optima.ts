import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface OptimaProduct {
    title: string;
    description: string;
    price: string;
    image: string;
    badge: string;
    badgeClass: string;
    features: { icon: string; text: string }[];
}

@Component({
    selector: 'app-battery-optima',
    standalone: true,
    imports: [CommonModule, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './battery-optima.html',
    styleUrls: ['./battery-optima.scss']
})
export class BatteryOptimaComponent {

    optimaProducts: OptimaProduct[] = [
        {
            title: "Amarilla Ciclado Profundo",
            description: "Pilas alcalinas AA de alta calidad. Perfectas para dispositivos de uso diario.",
            price: "$7,370.00 MXN",
            image: "https://www.casamyers.com.mx/img/ItemImages/42300070/grid_42300070.jpg",
            badge: "Más Vendido",
            badgeClass: "badge-bestseller",
            features: [
                { icon: "bi bi-clock", text: "Larga duración" },
                { icon: "bi bi-shield-check", text: "Anti-fugas" }
            ]
        },
        {
            title: "Azul Marina Arranque",
            description: "Pilas AAA compactas con máximo rendimiento para dispositivos pequeños.",
            price: "$7,970.00 MXN",
            image: "https://www.casamyers.com.mx/img/ItemImages/42300115/grid_42300115.jpg",
            badge: "Premium",
            badgeClass: "badge-premium",
            features: [
                { icon: "bi bi-lightning-fill", text: "Alto rendimiento" },
                { icon: "bi bi-arrows-angle-contract", text: "Compactas" }
            ]
        },
        {
            title: "Amarilla Ciclado Profundo",
            description: "Pilas 9V de alta potencia para equipos profesionales y de seguridad.",
            price: "$7,970.00 MXN",
            image: "https://www.casamyers.com.mx/img/ItemImages/42300070/grid_42300070.jpg",
            badge: "Profesional",
            badgeClass: "badge-professional",
            features: [
                { icon: "bi bi-lightning-charge", text: "Alta potencia" },
                { icon: "bi bi-shield-lock", text: "Seguridad" }
            ]
        },
        {
            title: "Amarilla Ciclado Profundo",
            description: "Tecnología de litio avanzada para máximo rendimiento y durabilidad.",
            price: "$8,200.00 MXN",
            image: "https://www.casamyers.com.mx/img/ItemImages/42300070/grid_42300070.jpg",
            badge: "Avanzado",
            badgeClass: "badge-advanced",
            features: [
                { icon: "bi bi-rocket-takeoff", text: "Tecnología avanzada" },
                { icon: "bi bi-feather", text: "Ultra ligeras" }
            ]
        },
        {
            title: "Amarilla Ciclado Profundo",
            description: "Pilas recargables ecológicas con hasta 1000 ciclos de carga.",
            price: "$8,250.00 MXN",
            image: "https://www.casamyers.com.mx/img/ItemImages/42300070/grid_42300070.jpg",
            badge: "Eco-Friendly",
            badgeClass: "badge-eco",
            features: [
                { icon: "bi bi-recycle", text: "Recargables" },
                { icon: "bi bi-flower1", text: "Eco-friendly" }
            ]
        },
        {
            title: "Azul Marina Ciclado Profundo",
            description: "Pilas especializadas para relojes y dispositivos de precisión.",
            price: "$8,530.00 MXN",
            image: "https://www.casamyers.com.mx/img/ItemImages/42300115/grid_42300115.jpg",
            badge: "Precisión",
            badgeClass: "badge-precision",
            features: [
                { icon: "bi bi-clock", text: "Precisión" },
                { icon: "bi bi-circle", text: "Compactas" }
            ]
        },
        {
            title: "Amarilla Ciclado Profundo",
            description: "Pilas especializadas para relojes y dispositivos de precisión.",
            price: "$8,700.00 MXN",
            image: "https://www.casamyers.com.mx/img/ItemImages/42300070/grid_42300070.jpg",
            badge: "Precisión",
            badgeClass: "badge-precision",
            features: [
                { icon: "mdi:clock-outline", text: "Precisión" },
                { icon: "mdi:circle-small", text: "Compactas" }
            ]
        },
        {
            title: "Azul Marina Ciclado Profundo",
            description: "Pilas especializadas para relojes y dispositivos de precisión.",
            price: "$9,720.00 MXN",
            image: "https://www.casamyers.com.mx/img/ItemImages/42300115/grid_42300115.jpg",
            badge: "Precisión",
            badgeClass: "badge-precision",
            features: [
                { icon: "mdi:clock-outline", text: "Precisión" },
                { icon: "mdi:circle-small", text: "Compactas" }
            ]
        },
        {
            title: "Amarilla Ciclado Profundo",
            description: "Pilas especializadas para relojes y dispositivos de precisión.",
            price: "$10,330.00 MXN",
            image: "https://www.casamyers.com.mx/img/ItemImages/42300070/grid_42300070.jpg",
            badge: "Precisión",
            badgeClass: "badge-precision",
            features: [
                { icon: "mdi:clock-outline", text: "Precisión" },
                { icon: "mdi:circle-small", text: "Compactas" }
            ]
        },
        {
            title: "Azul Marina Ciclado Profundo",
            description: "Pilas especializadas para relojes y dispositivos de precisión.",
            price: "$10,600.00 MXN",
            image: "https://www.casamyers.com.mx/img/ItemImages/42300115/grid_42300115.jpg",
            badge: "Precisión",
            badgeClass: "badge-precision",
            features: [
                { icon: "mdi:clock-outline", text: "Precisión" },
                { icon: "mdi:circle-small", text: "Compactas" }
            ]
        }
    ];

    scrollToCatalog() {
        const element = document.querySelector('.catalog-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
