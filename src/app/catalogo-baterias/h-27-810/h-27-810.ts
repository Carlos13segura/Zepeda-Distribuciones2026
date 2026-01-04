import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-h-27-810',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './h-27-810.html',
    styleUrls: ['./h-27-810.scss']
})
export class H27810Component {
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
