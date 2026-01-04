import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner';
import { ProductosComponent } from '../productos/productos';
import { CentrosComponent } from '../centros/centros';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, BannerComponent, ProductosComponent, CentrosComponent],
    templateUrl: './home.html',
    styleUrls: ['./home.scss']
})
export class HomeComponent { }
