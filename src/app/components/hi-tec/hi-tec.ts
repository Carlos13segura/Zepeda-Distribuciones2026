import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface HiTecProduct {
    model: string;
    images: {
        front: string;
        left: string;
        right: string;
    };
    specs: {
        cca: string;
        price: string;
    };
    link: string;
}

@Component({
    selector: 'app-hi-tec',
    standalone: true,
    imports: [CommonModule, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './hi-tec.html',
    styleUrls: ['./hi-tec.scss']
})
export class HiTecComponent {

    products: HiTecProduct[] = [
        {
            model: "H-22F-550",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_22f-550_front_mx.png?sfvrsn=6c64be45_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_22f-550_3-4_left_mx.png?sfvrsn=aa7441d_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_22f-550_3-4_right_mx.png?sfvrsn=971ea47c_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$3,260.00 MXN"
            },
            link: "/catalogo-baterias/H-22F-550" // Keeping user's link format
        },
        {
            model: "H-26R-500",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_26r-500_front_mx.png?sfvrsn=15cd2128_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_26r-500_3-4_left_mx.png?sfvrsn=e50404c0_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_26r-500_3-4_right_mx.png?sfvrsn=ac4ca9fe_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$3,360.00 MXN"
            },
            link: "/catalogo-baterias/H-26R-500"
        },
        {
            model: "H-58-650",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_58-650_front_mx.png?sfvrsn=2117b1a8_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_58-650_3-4_left_mx.png?sfvrsn=1960306a_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_58-650_3-4_right_mx.png?sfvrsn=a6c551c0_1"
            },
            specs: {
                cca: "450 CCA", // Note: Name says 650, user snippet says 450 CCA for all. Keeping snippet data for consistency unless corrected.
                price: "$3,510.00 MXN"
            },
            link: "/catalogo-baterias/H-58-650"
        },
        {
            model: "H-99(LBN1)-470",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_99-lbn1_470_front_mx.png?sfvrsn=bcbfaf45_1", // Using images from H-26R-500 as per snippet repetition
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_99-lbn1_470_3-4_left_mx_.png?sfvrsn=cf503e4f_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_99-lbn1_470_3-4_right_mx_v01.png?sfvrsn=2ef024de_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$3,620.00 MXN"
            },
            link: "/catalogo-baterias/H-99(LBN1)-470"
        },
        {
            model: "H-24-600",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_24-600_front_mx.png?sfvrsn=a8aef34a_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_24-600_3-4_left_mx.png?sfvrsn=b44edb01_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_24-600_3-4_right_mx.png?sfvrsn=440b4edf_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$3,650.00 MXN"
            },
            link: "/catalogo-baterias/H-24-600"
        },
        {
            model: "H-42-550",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_42-550_front_mx.png?sfvrsn=4fa28e6a_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_42-550_3-4_left_mx.png?sfvrsn=aa6b8ae4_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_42-550_3-4_right_mx.png?sfvrsn=c1425996_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$3,700.00 MXN"
            },
            link: "/catalogo-baterias/H-42-550"
        },
        {
            model: "H-35-585",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_35-585_front_mx.png?sfvrsn=f6c6bb1b_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_35-585_3-4_left_mx.png?sfvrsn=301654ab_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_35-585_3-4_right_mx.png?sfvrsn=87aaaf40_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$3,710.00 MXN"
            },
            link: "/catalogo-baterias/H-35-585"
        },
        {
            model: "H-24R-600",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_24r-600_front_mx.png?sfvrsn=3a295798_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_24r-600_3-4_left_mx.png?sfvrsn=c2ae3e86_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_24r-600_3-4_right_mx.png?sfvrsn=b56331e2_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$3,820.00 MXN"
            },
            link: "/catalogo-baterias/H-24R-600"
        },
        {
            model: "H-75-650",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_75-650_front_k_top_mx.png?sfvrsn=38c48204_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_75-650_3-4_left_k_top_mx.png?sfvrsn=aca674b2_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_75-650_3-4_right_k_top_mx.png?sfvrsn=c0d713dc_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$3,840.00 MXN"
            },
            link: "/catalogo-baterias/H-75-650"
        },
        {
            model: "H-65-850",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_65-850_front_mx.png?sfvrsn=17244d34_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_65-850_3-4_left_mx.png?sfvrsn=3df20_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_65-850_3-4_right_mx.png?sfvrsn=f061a3a4_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$4,050.00 MXN"
            },
            link: "/catalogo-baterias/H-65-850"
        },
        {
            model: "H-34-650",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_34-650_front_mx.png?sfvrsn=8121512a_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_34-650_3-4_left_mx.png?sfvrsn=fdc47302_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_34-650_3-4_right_mx.png?sfvrsn=bab49006_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$4,180.00 MXN"
            },
            link: "/catalogo-baterias/H-34-650"
        },
        {
            model: "H-41-750",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_41-750_front_mx.png?sfvrsn=ee4e889_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_41-750_3-4_left_mx.png?sfvrsn=ddec5723_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_41-750_3-4_right_mx.png?sfvrsn=f291a279_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$4,180.00 MXN"
            },
            link: "/catalogo-baterias/H-41-750"
        },
        {
            model: "H-75/86-700",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_75-86_700_front_mx.png?sfvrsn=9b21c56b_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_75-86_700_3-4_left_mx.png?sfvrsn=daffdb1e_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_75-86_700_3-4_right_mx.png?sfvrsn=4bc96733_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$4,180.00 MXN"
            },
            link: "/catalogo-baterias/H-75-86-700"
        },
        {
            model: "H-47(LN2)-600",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_47-ln2-600_front_mx.png?sfvrsn=67f6f816_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_47-ln2-600_3-4_left_mx.png?sfvrsn=722bedd0_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_47-ln2-600_3-4_right_mx.png?sfvrsn=3fe06e2_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$4,200.00 MXN"
            },
            link: "/catalogo-baterias/H-47(LN2)-600"
        },
        {
            model: "H-27F-810",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_27f-810_front_mx.png?sfvrsn=bce2d87e_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_27f-810_3-4_left_mx.png?sfvrsn=2cbba889_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_27f-810_3-4_right_mx.png?sfvrsn=1c4f342a_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$4,370.00 MXN"
            },
            link: "/catalogo-baterias/H-27F-810"
        },
        {
            model: "H-34/78-800",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_34-78_800_front_mx.png?sfvrsn=8d3b34f4_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_34-78_800_3-4_left_mx.png?sfvrsn=a1505096_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_34-78_800_3-4_right_mx.png?sfvrsn=40f3e52b_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$4,390.00 MXN"
            },
            link: "/catalogo-baterias/H-34-78-800"
        },
        {
            model: "H-48/91(LN3)-730",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_48-91_ln3_730_front_mx.png?sfvrsn=30dc249d_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_48-91_ln3_730_3-4_left_mx.png?sfvrsn=6d5980be_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_48-91_ln3_730_3-4_right_mx.png?sfvrsn=6d0cbd7d_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$4,720.00 MXN"
            },
            link: "/catalogo-baterias/H-48-91(LN3)-730"
        },
        {
            model: "H-78-800",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_78-800_front_mx.png?sfvrsn=13991bc6_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_78-800_3-4_left_mx.png?sfvrsn=82022115_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_78-800_3-4_right_mx.png?sfvrsn=ffbdc111_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$4,720.00 MXN"
            },
            link: "/catalogo-baterias/H-78-800"
        },
        {
            model: "H-49(LN5)-850",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_49_ln5-850_front_mx.png?sfvrsn=c6e65c0a_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_49_ln5-850_3-4_left_mx.png?sfvrsn=d58f99bc_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_49_ln5-850_3-4_right_mx.png?sfvrsn=8a15c505_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$4,720.00 MXN"
            },
            link: "/catalogo-baterias/H-49(LN5)-850"
        },
        {
            model: "H-27-810",
            images: {
                front: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_27-810_front_mx.png?sfvrsn=f24a089f_1",
                left: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_27-810_3-4_left_mx.png?sfvrsn=3ccf9d5f_1",
                right: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_hitec_27-810_3-4_right_mx.png?sfvrsn=73927b86_1"
            },
            specs: {
                cca: "450 CCA",
                price: "$4,950.00 MXN"
            },
            link: "/catalogo-baterias/H-27-810"
        }
    ];

    scrollToProducts() {
        const element = document.getElementById('productos');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
