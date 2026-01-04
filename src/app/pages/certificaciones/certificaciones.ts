import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-certificaciones',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './certificaciones.html',
    styleUrl: './certificaciones.scss',
})
export class CertificacionesComponent implements AfterViewInit, OnDestroy {
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

                    // Staggered animation for cards
                    if (entry.target.classList.contains('certificaciones-container')) {
                        const cards = entry.target.querySelectorAll('.cert-card');
                        cards.forEach((card, index) => {
                            (card as HTMLElement).style.animationDelay = `${index * 0.15}s`;
                            card.classList.add('fade-in-up');
                        });
                    }
                }
            });
        }, options);

        // Observe container to trigger staggered animation for children
        const container = document.querySelector('.certificaciones-container');
        if (container) this.observer.observe(container);

        // Also observe individual elements if needed
        const stats = document.querySelector('.stats-section');
        if (stats) {
            stats.classList.add('fade-in-up');
            this.observer.observe(stats);
        }
    }
}
