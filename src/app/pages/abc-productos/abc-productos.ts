import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-abc-productos',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './abc-productos.html',
    styleUrl: './abc-productos.scss',
})
export class AbcProductosComponent implements AfterViewInit, OnDestroy {
    private observer: IntersectionObserver | null = null;

    ngAfterViewInit() {
        this.initAnimations();

        // Initialize bootstrap accordions if using bootstrap JS, 
        // but since we might not have global bootstrap JS, we assume standard data-bs-toggle works via global scripts
        // or if we need manual handling. The user provided HTML uses data-bs-toggle, assuming it is loaded globally.
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

        const animatables = document.querySelectorAll('.fade-in-up');
        animatables.forEach(el => this.observer?.observe(el));
    }

    toggleCollapsible(event: Event) {
        const header = event.currentTarget as HTMLElement;
        const content = header.nextElementSibling as HTMLElement;
        const icon = header.querySelector('.chevron-icon'); // Changed to class selector for reliability

        if (content.classList.contains('show')) {
            content.classList.remove('show');
            if (icon) {
                icon.classList.remove('bi-chevron-up');
                icon.classList.add('bi-chevron-down');
            }
        } else {
            // Close all other collapsibles in the same accordion body
            const accordionBody = header.closest('.accordion-body');
            if (accordionBody) {
                const allContents = accordionBody.querySelectorAll('.collapsible-content');
                const allIcons = accordionBody.querySelectorAll('.chevron-icon');

                allContents.forEach(c => c.classList.remove('show'));
                allIcons.forEach(i => {
                    i.classList.remove('bi-chevron-up');
                    i.classList.add('bi-chevron-down');
                });
            }

            // Open the clicked one
            content.classList.add('show');
            if (icon) {
                icon.classList.remove('bi-chevron-down');
                icon.classList.add('bi-chevron-up');
            }
        }
    }
}
