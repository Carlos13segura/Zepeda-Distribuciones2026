import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


export interface Product {
    id: string;
    model: string;
    price: string;
    specs: {
        voltage: string;
        amperage: string;
    };
    features: string[];
    images: string[];
    link: string;
}

@Component({
    selector: 'app-convencional',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './convencional.html',
    styleUrls: ['./convencional.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ConvencionalComponent {
    products: Product[] = [
        {
            id: '12N5-3B',
            model: '12N5-3B',
            price: '$630.00',
            specs: { voltage: '12V', amperage: '4Ah' },
            features: [
                'Garantía 12 meses',
                'Para motocicletas',
                'Libre de mantenimiento'
            ],
            images: [
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n5-3b-front-2020.png?sfvrsn=86c70813_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n5-3b-left-2020.png?sfvrsn=6a53329f_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n5-3b-der-2020.png?sfvrsn=bdea926d_2'
            ],
            link: '/catalogo-moto-baterias/convencional/12N5-3B'
        },
        {
            id: '12N7B-3A',
            model: '12N7B-3A',
            price: '$740.00',
            specs: { voltage: '12V', amperage: '45Ah' },
            features: [
                'Garantía 18 meses',
                'Para automóviles',
                'Ácido líquido'
            ],
            images: [
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n7b-3a-front-2020.png?sfvrsn=a20f5638_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n7b-3a-left-2020.png?sfvrsn=d6037263_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n7b-3a-der-2020.png?sfvrsn=9b8e0689_2'
            ],
            link: '/catalogo-moto-baterias/convencional/12N7B-3A'
        },
        {
            id: '12N7-3B',
            model: '12N7-3B',
            price: '$750.00',
            specs: { voltage: '12V', amperage: '100Ah' },
            features: [
                'Garantía 24 meses',
                'Para camiones',
                'Alto rendimiento'
            ],
            images: [
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n7-3b-front-2020.png?sfvrsn=e295f11c_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n7-3b-der-2020.png?sfvrsn=3751916c_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n7-3b-left-2020.png?sfvrsn=fbf76faf_2'
            ],
            link: '/catalogo-moto-baterias/convencional/12N7-3B'
        },
        {
            id: '12N9-4B-1',
            model: '12N9-4B-1',
            price: '$750.00',
            specs: { voltage: '12V', amperage: '100Ah' },
            features: [
                'Garantía 24 meses',
                'Para camiones',
                'Alto rendimiento'
            ],
            images: [
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n9-4b-1-front-2020.png?sfvrsn=73fef417_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n9-4b-1-left-2020.png?sfvrsn=d7de5345_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n9-4b-1-der-2020.png?sfvrsn=83a92f02_2'
            ],
            link: '/catalogo-moto-baterias/convencional/12N9-4B-1'
        },
        {
            id: '12N10-3B',
            model: '12N10-3B',
            price: '$870.00',
            specs: { voltage: '12V', amperage: '100Ah' },
            features: [
                'Garantía 24 meses',
                'Para camiones',
                'Alto rendimiento'
            ],
            images: [
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n10-3b-front-2020.png?sfvrsn=600bc87f_2'
            ],
            link: '/catalogo-moto-baterias/convencional/12N10-3B'
        },
        {
            id: '12N12A-4A-1',
            model: '12N12A-4A-1',
            price: '$900.00',
            specs: { voltage: '12V', amperage: '100Ah' },
            features: [
                'Garantía 24 meses',
                'Para camiones',
                'Alto rendimiento'
            ],
            images: [
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n12a-4a-1-front-2020.png?sfvrsn=413fa74f_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n12a-4a-1-left-2020.png?sfvrsn=fcddfe7f_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n12a-4a-1-der-2020.png?sfvrsn=e0175bd_2'
            ],
            link: '/catalogo-moto-baterias/convencional/12N12A-4A-1'
        },
        {
            id: '12N14-3A',
            model: '12N14-3A',
            price: '$1,010.00',
            specs: { voltage: '12V', amperage: '100Ah' },
            features: [
                'Garantía 24 meses',
                'Para camiones',
                'Alto rendimiento'
            ],
            images: [
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n14-3a-front-2020.png?sfvrsn=5b1a0535_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n14-3a-left-2020.png?sfvrsn=72a680f1_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12n14-3a-der-2020.png?sfvrsn=eeaf0a1e_2'
            ],
            link: '/catalogo-moto-baterias/convencional/12N14-3A'
        },
        {
            id: '4L-B',
            model: '4L-B',
            price: '$560.00',
            specs: { voltage: '12V', amperage: '100Ah' },
            features: [
                'Garantía 24 meses',
                'Para camiones',
                'Alto rendimiento'
            ],
            images: [
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-4l-b-front-2020.png?sfvrsn=93a28a0d_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-4l-b-pack-2020.png?sfvrsn=d2cfac5d_2'
            ],
            link: '/catalogo-moto-baterias/convencional/4L-B'
        },
        {
            id: '5L-B',
            model: '5L-B',
            price: '$630.00',
            specs: { voltage: '12V', amperage: '100Ah' },
            features: [
                'Garantía 24 meses',
                'Para camiones',
                'Alto rendimiento'
            ],
            images: [
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-5l-b-front-2020.png?sfvrsn=169d9f32_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-5l-b-pack-2020.png?sfvrsn=28dbd899_2'
            ],
            link: '/catalogo-moto-baterias/convencional/5L-B'
        },
        {
            id: '6.5L-B',
            model: '6.5L-B',
            price: '$690.00',
            specs: { voltage: '12V', amperage: '100Ah' },
            features: [
                'Garantía 24 meses',
                'Para camiones',
                'Alto rendimiento'
            ],
            images: [
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-6-5l-b-front-2020.png?sfvrsn=5a45cf8_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-6-5l-b-left-2020.png?sfvrsn=11440be0_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-6-5l-b-der-2020.png?sfvrsn=9958fafa_2'
            ],
            link: '/catalogo-moto-baterias/convencional/6.5L-B'
        },
        {
            id: '7-A',
            model: '7-A',
            price: '$770.00',
            specs: { voltage: '12V', amperage: '100Ah' },
            features: [
                'Garantía 24 meses',
                'Para camiones',
                'Alto rendimiento'
            ],
            images: [
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-7-a-front-2020.png?sfvrsn=42e43c12_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-7-a-pack-2020.png?sfvrsn=130560df_2'
            ],
            link: '/catalogo-moto-baterias/convencional/7-a'
        },
        {
            id: '9-B',
            model: '9-B',
            price: '$820.00',
            specs: { voltage: '12V', amperage: '100Ah' },
            features: [
                'Garantía 24 meses',
                'Para camiones',
                'Alto rendimiento'
            ],
            images: [
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-9-b-front-2020.png?sfvrsn=ccca404d_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-9-b-pack-2020.png?sfvrsn=a795d980_2'
            ],
            link: '/catalogo-moto-baterias/convencional/9-B'
        },
        {
            id: '12A-A',
            model: '12A-A',
            price: '$990.00',
            specs: { voltage: '12V', amperage: '100Ah' },
            features: [
                'Garantía 24 meses',
                'Para camiones',
                'Alto rendimiento'
            ],
            images: [
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12a-a-front-2020.png?sfvrsn=3cc378af_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-12a-a-pack-2020.png?sfvrsn=7e0e22_2'
            ],
            link: '/catalogo-moto-baterias/convencional/12A-A'
        },
        {
            id: '14L-A2',
            model: '14L-A2',
            price: '$1,030.00',
            specs: { voltage: '12V', amperage: '100Ah' },
            features: [
                'Garantía 24 meses',
                'Para camiones',
                'Alto rendimiento'
            ],
            images: [
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-14l-a2-front-2020.png?sfvrsn=a5d2bac1_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-14l-a2-pack-2020.png?sfvrsn=d735d174_2'
            ],
            link: '/catalogo-moto-baterias/convencional/14L-A2'
        },
        {
            id: '16CL-B',
            model: '16CL-B',
            price: '$1,350.00',
            specs: { voltage: '12V', amperage: '100Ah' },
            features: [
                'Garantía 24 meses',
                'Para camiones',
                'Alto rendimiento'
            ],
            images: [
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-16cl-b-front-2020.png?sfvrsn=d253697e_2',
                'https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/product-brands/moto-baterias/lth-16cl-b-pack-2020.png?sfvrsn=38894f79_2'
            ],
            link: '/catalogo-moto-baterias/convencional/16CL-B'
        }
    ];
}
