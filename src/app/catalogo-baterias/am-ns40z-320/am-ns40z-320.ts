import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-am-ns40z-320',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './am-ns40z-320.html',
    styleUrl: './am-ns40z-320.scss',
})
export class AmNs40z320Component {
    private cartService = inject(CartService)
    private router = inject(Router)

    addToCart() {
        this.cartService.confirmAndAdd()
    }

    //funcion para llamar
    callPhone() {
        window.location.href = "tel:8008358400"
    }

    //funcion para localización
    handleLocation() {
        this.router.navigate(['/centros-servicio-resultados']);
        console.log("Location request initiated")
    }

    //funcion para ordenar
    handleOrder() {
        this.router.navigate(['/lth-domicilio']);
        console.log("Order request initiated")
    }
}
