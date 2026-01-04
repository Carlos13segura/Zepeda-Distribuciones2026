import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface MotoProduct {
    title: string;
    description: string;
    image: string;
    features: string[];
    link: string;
}

@Component({
    selector: 'app-moto-bateria',
    standalone: true,
    imports: [CommonModule, RouterLink],

    templateUrl: './moto-bateria.html',
    styleUrls: ['./moto-bateria.scss']
})
export class MotoBateriaComponent {

    products: MotoProduct[] = [
        {
            title: "AGM Libre de Mantenimiento",
            description: "Provee el máximo poder durante periodos largos sin disminuir su desempeño, diseñada para trabajar en condiciones extremas.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/motobateria-tx7l-bs-box.png?sfvrsn=18a9d43f_1",
            features: ["Tecnología AGM", "Resistente a vibraciones"],
            link: "/components/agm-libre-mantenimiento"
        },
        {
            title: "Moto-Batería Convencional",
            description: "Batería convencional de ácido líquido, diseñada para ofrecer un buen rendimiento y durabilidad.",
            image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/motobateria-12n7b-3a9-box.png?sfvrsn=2dd5e278_1",
            features: ["Tecnología probada", "Fácil instalación"],
            link: "/components/convencional"
        }
    ];

    whyChooseFeatures = [
        {
            icon: "bi-building",
            title: "Fabricación Nacional",
            description: "Productos fabricados en México con los más altos estándares de calidad."
        },
        {
            icon: "bi-gear-fill",
            title: "Tecnología Avanzada",
            description: "Incorporamos las últimas innovaciones en tecnología de baterías."
        },
        {
            icon: "bi-headset",
            title: "Soporte Técnico",
            description: "Asesoría especializada para ayudarte a elegir la batería correcta."
        },
        {
            icon: "bi-geo-alt-fill",
            title: "Red Nacional",
            description: "Amplia red de distribuidores en todo el país para tu comodidad."
        }
    ];
}
