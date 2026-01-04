import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-am-30h-670',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './am-30h-670.html',
    styleUrl: './am-30h-670.scss',
})
export class Am30h670Component {
    private cartService = inject(CartService)
    private router = inject(Router)

    addToCart() {
        this.cartService.confirmAndAdd()
    }

    //función para llamar
    callPhone() {
        window.location.href = "tel:8008358400"
    }

    //función para localización
    handleLocation() {
        this.router.navigate(['/centros-servicio-resultados'])
        console.log("Location request initiated")
    }

    //función para ordenar
    handleOrder() {
        this.router.navigate(['/lth-domicilio'])
        console.log("Order request initiated")
    }
}
