import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-am-35-550',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './am-35-550.html',
    styleUrl: './am-35-550.scss',
})
export class Am35550Component {
    private cartService = inject(CartService)
    private router = inject(Router)

    addToCart() {
        this.cartService.confirmAndAdd()
    }

    //Funcion para llamar
    callPhone() {
        window.location.href = "tel:8008358400"
    }

    //Funcion para localización
    handleLocation() {
        this.router.navigate(['/centros-servicio-resultados'])
        console.log("Location request initiated")
    }

    //Funcion para ordenar
    handleOrder() {
        this.router.navigate(['/lth-domicilio'])
        console.log("Order request initiated")
    }
}
