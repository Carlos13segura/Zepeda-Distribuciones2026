import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-reciclaje',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './reciclaje.html',
    styleUrl: './reciclaje.scss',
})
export class ReciclajeComponent implements AfterViewInit, OnDestroy {
    private observer: IntersectionObserver | null = null;

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

        // Observe elements with .fade-in-up class
        const animatables = document.querySelectorAll('.fade-in-up');
        animatables.forEach(el => this.observer?.observe(el));
    }
}
