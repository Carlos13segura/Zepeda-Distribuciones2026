import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
    selector: 'app-12n10-3b',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './12n10-3b.html',
    styleUrls: ['./12n10-3b.scss']
})
export class TwelveN103bComponent {
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
