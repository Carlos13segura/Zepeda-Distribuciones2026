import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-am-31p-750-ar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './am-31p-750-ar.html',
    styleUrl: './am-31p-750-ar.scss',
})
export class Am31p750ArComponent {
    private cartService = inject(CartService)
    private router = inject(Router)

    addToCart() {
        this.cartService.confirmAndAdd()
    }

    //Funci0on para llamar
    callPhone() {
        window.location.href = "tel:8008358400"
    }

    //Funci0n para localizaci0n
    handleLocation() {
        this.router.navigate(['/centros-servicio-resultados'])
    }

    //Funci0n para ordenar
    handleOrder() {
        this.router.navigate(['/lth-domicilio'])
    }
}
