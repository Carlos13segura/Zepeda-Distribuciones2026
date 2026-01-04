import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';


@Component({
    selector: 'app-am-27f-520',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './am-27f-520.html',
    styleUrl: './am-27f-520.scss',
})
export class Am27f520Component {
    private cartService = inject(CartService);
    private router = inject(Router);

    addToCart() {
        this.cartService.confirmAndAdd();
    }

    //fucion para llamar
    callPhone() {
        window.location.href = "tel:8008358400"
    }

    //funcion para localizacion
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
