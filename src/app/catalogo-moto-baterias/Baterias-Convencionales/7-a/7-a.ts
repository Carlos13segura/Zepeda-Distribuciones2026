import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
    selector: 'app-7-a',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './7-a.html',
    styleUrls: ['./7-a.scss']
})
export class SevenAComponent {
    private cartService = inject(CartService);
    private router = inject(Router);

    addToCart() {
        this.cartService.confirmAndAdd();
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
