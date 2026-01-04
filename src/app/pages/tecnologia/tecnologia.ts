import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tecnologia',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tecnologia.html',
    styleUrl: './tecnologia.scss',
})
export class TecnologiaComponent implements AfterViewInit, OnDestroy {
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

        // Observe elements with .fade-in class
        const animatables = document.querySelectorAll('.fade-in');
        animatables.forEach(el => this.observer?.observe(el));
    }
}
