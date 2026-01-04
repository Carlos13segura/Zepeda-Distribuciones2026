import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-l-22f-450',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './l-22f-450.html',
    styleUrl: './l-22f-450.scss',
})
export class L22F450Component {
    private cartService = inject(CartService);

    constructor(private router: Router) { }

    product = {
        name: "L-22F-450",
        price: "$2,960.00",
        image: "https://useast2prodbrandsites.blob.core.windows.net/lth-sfassets-prod/images/default-source/products/lth_auto_22f-450_front_mx.png?sfvrsn=3036021a_1"
    };

    addToCart() {
        this.cartService.confirmAndAdd(this.product);
    }


    // Function to handle phone call
    callPhone() {
        // Try to initiate a phone call on mobile devices
        window.location.href = "tel:8008358400"
        console.log("Phone call initiated")
    }

    // Function to handle location
    handleLocation() {
        this.router.navigate(['/centros-servicio-resultados']);
        console.log("Location request initiated")
    }

    // Function to handle order
    handleOrder() {
        this.router.navigate(['/lth-domicilio']);
        console.log("Order request initiated")
    }
}
