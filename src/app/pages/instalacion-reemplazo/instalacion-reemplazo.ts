import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-instalacion-reemplazo',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './instalacion-reemplazo.html',
    styleUrl: './instalacion-reemplazo.scss',
})
export class InstalacionReemplazoComponent implements AfterViewInit, OnDestroy {
    private observer: IntersectionObserver | null = null;

    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        this.initAnimations();
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    private initAnimations() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, options);

        const animatables = this.el.nativeElement.querySelectorAll('.fade-in-up');
        animatables.forEach((el: Element) => this.observer?.observe(el));
    }
}
