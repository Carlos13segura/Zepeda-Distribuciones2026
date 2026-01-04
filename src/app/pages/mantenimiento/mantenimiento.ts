import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-mantenimiento',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './mantenimiento.html',
    styleUrl: './mantenimiento.scss',
})
export class MantenimientoComponent implements AfterViewInit, OnDestroy {
    private observer: IntersectionObserver | null = null;

    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        this.initAnimations();
        this.initAccordion();
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

    // Simple accordion logic if Bootstrap JS is not available or to ensure smooth closing
    initAccordion() {
        const buttons = this.el.nativeElement.querySelectorAll('.accordion-button');
        buttons.forEach((button: HTMLElement) => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-bs-target');
                if (targetId) {
                    const target = this.el.nativeElement.querySelector(targetId);
                    const allCollapses = this.el.nativeElement.querySelectorAll('.accordion-collapse');

                    allCollapses.forEach((collapse: HTMLElement) => {
                        if (collapse !== target) {
                            collapse.classList.remove('show');
                            const btn = this.el.nativeElement.querySelector(`[data-bs-target="#${collapse.id}"]`);
                            if (btn) btn.classList.add('collapsed');
                        }
                    });

                    if (target) {
                        target.classList.toggle('show');
                        button.classList.toggle('collapsed');
                    }
                }
            });
        });
    }
}
