import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-garantia',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './garantia.html',
    styleUrl: './garantia.scss',
})
export class GarantiaComponent implements AfterViewInit, OnDestroy {
    private observer: IntersectionObserver | null = null;

    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        this.initAnimations();
        this.highlightGuaranteeCells();
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

    private highlightGuaranteeCells() {
        const cells = this.el.nativeElement.querySelectorAll('td');
        cells.forEach((cell: HTMLElement) => {
            if (cell.textContent?.includes('Garantía sin costo')) {
                cell.classList.add('guarantee-highlight');
            }
        });
    }
}
