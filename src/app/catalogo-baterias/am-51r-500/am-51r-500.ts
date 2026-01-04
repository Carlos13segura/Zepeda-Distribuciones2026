import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-am-51r-500',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './am-51r-500.html',
    styleUrl: './am-51r-500.scss',
})
export class Am51r500Component {
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
    }

    //Funcion para ordenar
    handleOrder() {
        this.router.navigate(['/lth-domicilio'])
    }
}
